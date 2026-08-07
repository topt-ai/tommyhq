export function ProcessES() {
  return (
    <section className="bg-brand-bg py-[120px]">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">

        <div className="mb-16 GSAP-reveal" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-4">
            El proceso
          </div>
          <h2 className="font-display font-normal text-brand-primary text-[48px] leading-tight">
            Simple desde el día uno.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-12 md:gap-0 relative">

          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-[#1E1E1E] z-0"></div>
          <div className="block md:hidden absolute left-[30px] top-[40px] bottom-[40px] w-[1px] bg-[#1E1E1E] z-0"></div>

          <div className="flex-1 pl-12 pr-0 md:px-6 relative z-10 GSAP-reveal" data-reveal>
            <div className="font-mono text-[13px] text-[#1E1E1E] mb-6 hidden md:block bg-brand-bg w-max px-2 mx-auto">01</div>
            <div className="font-mono text-[13px] text-[#1E1E1E] mb-2 md:hidden absolute left-0 top-1 bg-brand-bg py-2">01</div>

            <h3 className="font-sans font-medium text-[20px] text-brand-primary mb-4 md:text-center">Hablamos</h3>
            <p className="font-sans font-light text-[15px] text-brand-muted leading-[1.6] md:text-center text-balance mx-auto">
              Una llamada. Nos dices qué está fallando o qué hace falta. Te decimos qué construiríamos y cuánto costaría.
            </p>
          </div>

          <div className="flex-1 pl-12 pr-0 md:px-6 relative z-10 GSAP-reveal" data-reveal>
            <div className="font-mono text-[13px] text-[#1E1E1E] mb-6 hidden md:block bg-brand-bg w-max px-2 mx-auto">02</div>
            <div className="font-mono text-[13px] text-[#1E1E1E] mb-2 md:hidden absolute left-0 top-1 bg-brand-bg py-2">02</div>

            <h3 className="font-sans font-medium text-[20px] text-brand-primary mb-4 md:text-center">Construimos</h3>
            <p className="font-sans font-light text-[15px] text-brand-muted leading-[1.6] md:text-center text-balance mx-auto">
              Entrega rápida. Recibes un sitio o sistema funcionando, no un mazo de wireframes y una línea de tiempo de tres meses.
            </p>
          </div>

          <div className="flex-1 pl-12 pr-0 md:px-6 relative z-10 GSAP-reveal" data-reveal>
            <div className="font-mono text-[13px] text-[#1E1E1E] mb-6 hidden md:block bg-brand-bg w-max px-2 mx-auto">03</div>
            <div className="font-mono text-[13px] text-[#1E1E1E] mb-2 md:hidden absolute left-0 top-1 bg-brand-bg py-2">03</div>

            <h3 className="font-sans font-medium text-[20px] text-brand-primary mb-4 md:text-center">Funciona</h3>
            <p className="font-sans font-light text-[15px] text-brand-muted leading-[1.6] md:text-center text-balance mx-auto">
              Después de la entrega, tu sitio posiciona y tus sistemas trabajan. Tú no los administras. Ese es el punto.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
