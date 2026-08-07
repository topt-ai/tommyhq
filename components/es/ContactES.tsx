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

const WHATSAPP_URL =
  'https://wa.me/50372018215?text=' +
  encodeURIComponent('Hola, quiero más información sobre TommyHQ');

const FORMS: Record<FormKey, { label: string; submissionType: string; subcopy: string }> = {
  default: {
    label: 'General',
    submissionType: 'General inquiry',
    subcopy: 'Cuéntanos un poco sobre tu negocio y cómo podemos ayudarte. Te contactamos lo antes posible.',
  },
  audit: {
    label: 'Auditoría',
    submissionType: 'Rank audit request',
    subcopy: '¿Quieres saber exactamente dónde estás parado? Auditamos tu presencia en Google y te decimos qué te está frenando.',
  },
  demo: {
    label: 'Sitio demo',
    submissionType: 'Website demo request',
    subcopy: 'Mira lo que construiríamos para ti. Cuéntanos sobre tu negocio y armamos una demo.',
  },
};

export function ContactES() {
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
          source: 'tommyhq.com/es-sv',
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
    <section id="contacto" className="bg-brand-surface py-[120px]">
      <div className="w-full max-w-[720px] mx-auto px-6 md:px-12 text-center">

        <div className="GSAP-reveal" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-6">
            Trabajemos juntos
          </div>
          <h2 className="font-display italic text-brand-primary text-[36px] md:text-[64px] leading-tight mb-6">
            ¿Listo para construir<br />algo que funcione?
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
              <div className="font-sans font-medium text-[16px] text-brand-primary mb-2">Gracias, ya lo tenemos.</div>
              <div className="font-sans font-light text-[14px] text-brand-muted">
                Te contactamos lo antes posible.
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full bg-brand-bg border border-brand-border rounded-[16px] p-6 md:p-10 mb-10 text-left"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Nombre" required>
                  <input type="text" required value={form.firstName} onChange={update('firstName')} placeholder="Jane" className={inputClass} />
                </Field>
                <Field label="Apellido" required>
                  <input type="text" required value={form.lastName} onChange={update('lastName')} placeholder="Doe" className={inputClass} />
                </Field>

                {activeForm !== 'default' && (
                  <Field label="Nombre del negocio" required>
                    <input type="text" required value={form.businessName} onChange={update('businessName')} placeholder="Acme Roofing" className={inputClass} />
                  </Field>
                )}

                <Field label="Email" required>
                  <input type="email" required value={form.email} onChange={update('email')} placeholder="jane@company.com" className={inputClass} />
                </Field>
                <Field label="Teléfono" required>
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
                  <Field label="URL de Google Maps" required>
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
                    Busca tu negocio en Google Maps, toca <span className="text-brand-muted">Compartir</span>, y copia el enlace. Así revisamos dónde posicionas actualmente.
                  </p>
                </div>
              )}

              {activeForm === 'default' && (
                <div className="mt-5">
                  <Field label="¿Cómo podemos ayudarte?" required>
                    <textarea required value={form.message} onChange={update('message')} rows={5} placeholder="Cuéntanos sobre tu negocio y qué estás buscando." className={`${inputClass} resize-none`} />
                  </Field>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-5 font-sans text-[13px] text-[#E4707A]">
                  Algo salió mal enviando tu mensaje. Inténtalo de nuevo, o escríbenos a hola@tommyhq.com.
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="mt-8 w-full md:w-auto rounded-full bg-brand-hover text-white font-sans font-medium text-[14px] px-[32px] py-[14px] transition-all duration-250 hover:bg-[#D4888E] hover:shadow-[0_0_20px_rgba(201,113,122,0.3)] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Enviando.' : 'Enviar mensaje'}
              </button>
            </form>
          )}

          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="font-sans font-light text-[14px] text-brand-muted">
              ¿Prefieres email? Escríbenos a
            </span>
            <a href="mailto:hola@tommyhq.com" className="font-sans font-normal text-[14px] text-brand-accent hover:underline transition-all">
              hola@tommyhq.com
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-brand-border/40 flex flex-col items-center gap-3">
            <span className="font-sans font-light text-[14px] text-brand-muted">
              ¿Prefieres escribirnos directo? Contáctanos por WhatsApp
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-border text-brand-primary font-sans font-medium text-[13px] px-[20px] py-[10px] transition-all duration-250 hover:border-[#2A2A2A] cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#4ADE80" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.83 14.13c-.25.7-1.24 1.28-2.03 1.45-.54.11-1.25.2-3.63-.78-3.05-1.26-5.01-4.36-5.16-4.56-.15-.2-1.23-1.64-1.23-3.13s.77-2.22 1.05-2.52c.25-.28.62-.4.99-.4.12 0 .23 0 .32.01.28.01.42-.02.65.5.28.63.95 2.16 1.03 2.32.08.16.13.35.03.56-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.31.31-.13.61.18.3.79 1.3 1.7 2.11 1.17 1.04 2.15 1.37 2.46 1.52.31.15.49.13.67-.08.18-.2.77-.9.98-1.21.2-.3.4-.25.68-.15.28.1 1.79.85 2.1 1.01.31.15.51.23.59.36.08.13.08.75-.17 1.45Z" />
              </svg>
              Escríbenos por WhatsApp
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
        {optional && <span className="text-brand-muted/50 normal-case tracking-normal">(opcional)</span>}
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
          Sitio web
          {optional && !noWebsite && <span className="text-brand-muted/50 normal-case tracking-normal">(opcional)</span>}
          {required && !noWebsite && <span className="text-brand-accent">*</span>}
        </span>
        <button
          type="button"
          onClick={onToggleNoWebsite}
          className="font-sans text-[12px] text-brand-accent hover:underline cursor-pointer normal-case"
        >
          {noWebsite ? 'Sí tengo sitio web' : 'Todavía no tengo sitio web'}
        </button>
      </div>

      {noWebsite ? (
        <div className="w-full bg-brand-surface border border-dashed border-brand-border rounded-[10px] px-4 py-3 font-sans font-light text-[13px] text-brand-muted">
          Sin sitio web todavía, sin problema. Lo tomamos en cuenta en tu plan.
        </div>
      ) : (
        <input
          type="text"
          required={required}
          value={value}
          onChange={onChange}
          placeholder="tunegocio.com"
          className={inputClass}
        />
      )}
    </div>
  );
}
