'use client';

import { Monitor, Search } from 'lucide-react';

export function Work() {
  const openContactForm = (formKey: 'audit' | 'demo') => {
    window.dispatchEvent(new CustomEvent('select-contact-form', { detail: formKey }));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="work" className="bg-brand-bg py-[120px]">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">

        <div className="mb-12 GSAP-reveal text-center" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-4">
            See it for yourself
          </div>
          <h2 className="font-display font-normal text-brand-primary text-[36px] md:text-[52px] leading-tight">
            Want proof? We&apos;ll show you.
          </h2>
          <p className="font-sans font-light text-[16px] md:text-[18px] text-brand-muted max-w-[560px] mx-auto mt-6 leading-relaxed">
            Tell us about your business and we&apos;ll show you exactly what we&apos;d build for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto mt-14">
          <button
            onClick={() => openContactForm('demo')}
            className="group text-left bg-brand-surface border border-brand-border hover:border-[#2A2A2A] rounded-[16px] p-8 md:p-10 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 GSAP-reveal"
            data-reveal
          >
            <div className="w-[44px] h-[44px] rounded-full border border-brand-border bg-brand-bg flex items-center justify-center text-brand-accent mb-6">
              <Monitor size={20} />
            </div>
            <h3 className="font-display text-[26px] text-brand-primary mb-3">Request a demo site</h3>
            <p className="font-sans font-light text-[15px] text-brand-muted leading-[1.7] mb-6">
              We&apos;ll mock up a page for your business so you can see the quality before you commit to anything.
            </p>
            <span className="font-sans font-normal text-[14px] text-brand-accent group-hover:underline">
              Request a demo →
            </span>
          </button>

          <button
            onClick={() => openContactForm('audit')}
            className="group text-left bg-brand-surface border border-brand-border hover:border-[#2A2A2A] rounded-[16px] p-8 md:p-10 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 GSAP-reveal"
            data-reveal
          >
            <div className="w-[44px] h-[44px] rounded-full border border-brand-border bg-brand-bg flex items-center justify-center text-brand-accent mb-6">
              <Search size={20} />
            </div>
            <h3 className="font-display text-[26px] text-brand-primary mb-3">Get a free rank audit</h3>
            <p className="font-sans font-light text-[15px] text-brand-muted leading-[1.7] mb-6">
              We&apos;ll check where you show up on Google and in AI search, and tell you exactly what&apos;s holding you back.
            </p>
            <span className="font-sans font-normal text-[14px] text-brand-accent group-hover:underline">
              Get my audit →
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
