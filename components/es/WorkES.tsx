'use client';

import { Monitor, Search } from 'lucide-react';

export function WorkES() {
  const openContactForm = (formKey: 'audit' | 'demo') => {
    window.dispatchEvent(new CustomEvent('select-contact-form', { detail: formKey }));
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="demos" className="bg-brand-bg py-[120px]">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">

        <div className="mb-12 GSAP-reveal text-center" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-4">
            Compruébalo tú mismo
          </div>
          <h2 className="font-display font-normal text-brand-primary text-[36px] md:text-[52px] leading-tight">
            ¿Quieres pruebas? Te las mostramos.
          </h2>
          <p className="font-sans font-light text-[16px] md:text-[18px] text-brand-muted max-w-[560px] mx-auto mt-6 leading-relaxed">
            Cuéntanos sobre tu negocio y te mostramos exactamente qué construiríamos para ti.
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
            <h3 className="font-display text-[26px] text-brand-primary mb-3">Solicita un sitio de prueba</h3>
            <p className="font-sans font-light text-[15px] text-brand-muted leading-[1.7] mb-6">
              Te armamos una página para tu negocio para que veas la calidad antes de comprometerte a algo.
            </p>
            <span className="font-sans font-normal text-[14px] text-brand-accent group-hover:underline">
              Solicitar demo →
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
            <h3 className="font-display text-[26px] text-brand-primary mb-3">Recibe una auditoría gratuita</h3>
            <p className="font-sans font-light text-[15px] text-brand-muted leading-[1.7] mb-6">
              Revisamos dónde apareces en Google y en buscadores de IA, y te decimos exactamente qué te está frenando.
            </p>
            <span className="font-sans font-normal text-[14px] text-brand-accent group-hover:underline">
              Obtener mi auditoría →
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
