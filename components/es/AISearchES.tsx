const labels = ['SEO', 'GEO', 'AEO'];

export function AISearchES() {
  return (
    <section className="bg-brand-bg py-[120px] border-t border-brand-border">
      <div className="max-w-[820px] mx-auto px-6 md:px-12 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-6">
          Más allá del SEO tradicional
        </p>
        <h2 className="font-display text-brand-primary text-[36px] md:text-[56px] leading-[1.1] mb-8">
          Conoces ChatGPT.<br className="hidden md:block" /> ¿Pero él te conoce a ti?
        </h2>
        <p className="font-sans font-light text-[16px] md:text-[18px] text-brand-muted leading-relaxed max-w-[620px] mx-auto mb-10">
          Tus clientes le preguntan a ChatGPT y a los buscadores de IA que les recomienden un negocio, no solo googlean. Construimos tu sitio para que ambos te encuentren: los buscadores que ya conoces, y las herramientas de IA que rápidamente se están convirtiendo en la nueva puerta de entrada.
        </p>

        <div className="max-w-[520px] mx-auto mb-10 rounded-[14px] border border-brand-border bg-[#121212] px-5 py-4 text-left">
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-2">
            Pruébalo ahora mismo
          </div>
          <div className="font-mono text-[14px] text-brand-primary flex items-center gap-2">
            <span className="text-brand-accent">&gt;</span>
            <span>&quot;mejor [tu servicio] en [tu ciudad]&quot;</span>
          </div>
          <div className="font-sans font-light text-[13px] text-brand-muted mt-3 leading-relaxed">
            Pregúntale eso a cualquier IA. Si tu negocio no aparece en la respuesta, eso es exactamente lo que arreglamos.
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          {labels.map((label) => (
            <span
              key={label}
              className="font-mono text-[10px] uppercase tracking-[0.14em] px-4 py-2 rounded-full border border-brand-border text-brand-muted"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
