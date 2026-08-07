export function AboutES() {
  return (
    <section id="about" className="relative h-screen">
      <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <img src="/assets/tommy-about.webp" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/65" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-[720px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-5">
            Con Quién Trabajas
          </p>
          <h2 className="font-display text-brand-primary text-[40px] md:text-[60px] leading-[1.05] mb-6">
            Sin intermediarios. Sin vendedores.
          </h2>
          <p className="font-sans font-light text-[17px] md:text-[19px] text-white/85 leading-relaxed max-w-[560px] mx-auto mb-6">
            Cuando llamas, hablas con la persona que realmente construye tu sistema. No con un representante de ventas ni un coordinador.
          </p>
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/60">
            Tommy, el desarrollador
          </p>
        </div>
      </div>
    </section>
  );
}
