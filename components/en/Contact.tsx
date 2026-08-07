'use client';

import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent, ReactNode } from 'react';

type FormKey = 'default' | 'audit' | 'demo';

type FormState = {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  googleMapsUrl: string;
  message: string;
};

const EMPTY: FormState = {
  firstName: '',
  lastName: '',
  businessName: '',
  email: '',
  phone: '',
  website: '',
  googleMapsUrl: '',
  message: '',
};

const WEBHOOK_URL =
  'https://tommy-1.app.n8n.cloud/webhook/54de26e0-f0eb-4eae-a2a5-5a94d730eb04';

const FORMS: Record<FormKey, { label: string; submissionType: string; subcopy: string }> = {
  default: {
    label: 'General',
    submissionType: 'General inquiry',
    subcopy: "Tell us a little about your business and how we can help. We'll get in touch as soon as possible.",
  },
  audit: {
    label: 'Rank Audit',
    submissionType: 'Rank audit request',
    subcopy: "Want to know exactly where you stand? We'll audit your Google presence and show you what's holding you back.",
  },
  demo: {
    label: 'Demo Site',
    submissionType: 'Website demo request',
    subcopy: "See what we'd build for you. Tell us about your business and we'll put together a demo.",
  },
};

export function Contact() {
  const [activeForm, setActiveForm] = useState<FormKey>('default');
  const [form, setForm] = useState<FormState>(EMPTY);
  const [noWebsite, setNoWebsite] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as FormKey;
      if (detail && FORMS[detail]) {
        setActiveForm(detail);
        setStatus('idle');
      }
    };
    window.addEventListener('select-contact-form', handler);
    return () => window.removeEventListener('select-contact-form', handler);
  }, []);

  const update = (field: keyof FormState) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const switchForm = (key: FormKey) => {
    setActiveForm(key);
    setNoWebsite(false);
    setStatus('idle');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const websiteValue = noWebsite ? 'No website yet' : form.website || 'N/A';

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          website: websiteValue,
          formType: activeForm,
          submissionType: FORMS[activeForm].submissionType,
          submittedAt: new Date().toISOString(),
          source: 'tommyhq.com',
        }),
      });

      if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      setStatus('success');
      setForm(EMPTY);
      setNoWebsite(false);
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setStatus('error');
    }
  };

  const sending = status === 'sending';

  return (
    <section id="contact" className="bg-brand-surface py-[120px]">
      <div className="w-full max-w-[720px] mx-auto px-6 md:px-12 text-center">

        <div className="GSAP-reveal" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-6">
            Let&apos;s work together
          </div>
          <h2 className="font-display italic text-brand-primary text-[36px] md:text-[64px] leading-tight mb-6">
            Ready to build<br />something that runs?
          </h2>
          <p className="font-sans font-light text-[18px] text-brand-muted max-w-[600px] mx-auto leading-relaxed mb-12 text-balance">
            {FORMS[activeForm].subcopy}
          </p>
        </div>

        {status !== 'success' && (
          <div className="GSAP-reveal flex justify-center mb-10" data-reveal>
            <div className="inline-flex flex-wrap justify-center gap-1 p-1 rounded-full border border-brand-border bg-brand-bg">
              {(Object.keys(FORMS) as FormKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => switchForm(key)}
                  className={`font-sans font-medium text-[13px] px-5 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                    activeForm === key
                      ? 'bg-brand-hover text-white'
                      : 'text-brand-muted hover:text-brand-primary'
                  }`}
                >
                  {FORMS[key].label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="GSAP-reveal" data-reveal>
          {status === 'success' ? (
            <div className="w-full bg-brand-bg border border-brand-border rounded-[16px] p-12 mb-10 text-center">
              <div className="w-[48px] h-[48px] border border-brand-border rounded-full flex items-center justify-center mx-auto mb-4 bg-brand-surface text-brand-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="font-sans font-medium text-[16px] text-brand-primary mb-2">Thanks, we&apos;re on it.</div>
              <div className="font-sans font-light text-[14px] text-brand-muted">
                We&apos;ll get in touch as soon as possible.
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full bg-brand-bg border border-brand-border rounded-[16px] p-6 md:p-10 mb-10 text-left"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="First name" required>
                  <input type="text" required value={form.firstName} onChange={update('firstName')} placeholder="Jane" className={inputClass} />
                </Field>
                <Field label="Last name" required>
                  <input type="text" required value={form.lastName} onChange={update('lastName')} placeholder="Doe" className={inputClass} />
                </Field>

                {activeForm !== 'default' && (
                  <Field label="Business name" required>
                    <input type="text" required value={form.businessName} onChange={update('businessName')} placeholder="Acme Roofing" className={inputClass} />
                  </Field>
                )}

                <Field label="Email" required>
                  <input type="email" required value={form.email} onChange={update('email')} placeholder="jane@company.com" className={inputClass} />
                </Field>
                <Field label="Phone" required>
                  <input type="tel" required value={form.phone} onChange={update('phone')} placeholder="(555) 123-4567" className={inputClass} />
                </Field>
              </div>

              <div className="mt-5">
                <WebsiteField
                  value={form.website}
                  onChange={update('website')}
                  required={activeForm === 'audit'}
                  optional={activeForm !== 'audit'}
                  noWebsite={noWebsite}
                  onToggleNoWebsite={() => setNoWebsite((v) => !v)}
                />
              </div>

              {activeForm === 'audit' && (
                <div className="mt-5">
                  <Field label="Google Maps URL" required>
                    <input
                      type="text"
                      required
                      value={form.googleMapsUrl}
                      onChange={update('googleMapsUrl')}
                      placeholder="https://maps.app.goo.gl/..."
                      className={inputClass}
                    />
                  </Field>
                  <p className="font-sans font-light text-[12px] text-brand-muted/80 mt-2 leading-relaxed">
                    Find your business on Google Maps, tap <span className="text-brand-muted">Share</span>, and copy the link. This is how we check where you currently rank.
                  </p>
                </div>
              )}

              {activeForm === 'default' && (
                <div className="mt-5">
                  <Field label="How can we help you?" required>
                    <textarea required value={form.message} onChange={update('message')} rows={5} placeholder="Tell us about your business and what you're looking for." className={`${inputClass} resize-none`} />
                  </Field>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-5 font-sans text-[13px] text-[#E4707A]">
                  Something went wrong sending your message. Please try again, or email us at tommy@tommyhq.com.
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="mt-8 w-full md:w-auto rounded-full bg-brand-hover text-white font-sans font-medium text-[14px] px-[32px] py-[14px] transition-all duration-250 hover:bg-[#D4888E] hover:shadow-[0_0_20px_rgba(201,113,122,0.3)] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending.' : 'Send message'}
              </button>
            </form>
          )}

          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="font-sans font-light text-[14px] text-brand-muted">
              Prefer email? Reach us at
            </span>
            <a href="mailto:tommy@tommyhq.com" className="font-sans font-normal text-[14px] text-brand-accent hover:underline transition-all">
              tommy@tommyhq.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

const inputClass =
  'w-full bg-brand-surface border border-brand-border rounded-[10px] px-4 py-3 font-sans text-[14px] text-brand-primary placeholder:text-brand-muted/60 outline-none transition-colors duration-200 focus:border-brand-accent';

function Field({
  label,
  required,
  optional,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-brand-muted mb-2 flex items-center gap-2">
        {label}
        {optional && <span className="text-brand-muted/50 normal-case tracking-normal">(optional)</span>}
        {required && <span className="text-brand-accent">*</span>}
      </span>
      {children}
    </label>
  );
}

function WebsiteField({
  value,
  onChange,
  required,
  optional,
  noWebsite,
  onToggleNoWebsite,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  optional?: boolean;
  noWebsite: boolean;
  onToggleNoWebsite: () => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-brand-muted flex items-center gap-2">
          Website
          {optional && !noWebsite && <span className="text-brand-muted/50 normal-case tracking-normal">(optional)</span>}
          {required && !noWebsite && <span className="text-brand-accent">*</span>}
        </span>
        <button
          type="button"
          onClick={onToggleNoWebsite}
          className="font-sans text-[12px] text-brand-accent hover:underline cursor-pointer normal-case"
        >
          {noWebsite ? 'I do have a website' : "I don't have a website yet"}
        </button>
      </div>

      {noWebsite ? (
        <div className="w-full bg-brand-surface border border-dashed border-brand-border rounded-[10px] px-4 py-3 font-sans font-light text-[13px] text-brand-muted">
          No website yet, no problem. We&apos;ll factor that into your plan.
        </div>
      ) : (
        <input
          type="text"
          required={required}
          value={value}
          onChange={onChange}
          placeholder="yourbusiness.com"
          className={inputClass}
        />
      )}
    </div>
  );
}
