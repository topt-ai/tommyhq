import Image from 'next/image';

type Project = {
  client: string;
  tags: string[];
  result: string;
  img: string;
  hoverImg: string | null;
  href: string | null;
  cta: string | null;
};

const PROJECTS: Project[] = [
  {
    client: 'The Tooth Boutique',
    tags: ['Sitio web', 'SEO local'],
    result: 'Top 3 en Google Maps para "ortodoncista san salvador".',
    img: '/projects/tooth1.png',
    hoverImg: '/projects/tooth2.png',
    href: 'https://www.thetoothboutique.com/',
    cta: 'Ver sitio',
  },
  {
    client: 'Jarvis Real Estate',
    tags: ['Sitio web', 'Demo'],
    result: 'Demo para agentes inmobiliarios en El Salvador. Listings y contacto por WhatsApp.',
    img: '/projects/jarvis1.png',
    hoverImg: '/projects/jarvis2.png',
    href: null,
    cta: null,
  },
  {
    client: 'Bisou Munchies',
    tags: ['Sitio web'],
    result: 'Sitio para marca de postres en Nicaragua.',
    img: '/projects/bisoutuweb.webp',
    hoverImg: null,
    href: 'https://bisoumunchies.com/',
    cta: 'Ver sitio',
  },
  {
    client: 'Top Google Places',
    tags: ['SEO local'],
    result: 'The Tooth Boutique entre las primeras opciones al buscar clínicas de ortodoncia en San Salvador.',
    img: '/projects/project_mapstooth.png',
    hoverImg: null,
    href: null,
    cta: null,
  },
  {
    client: 'VOID',
    tags: ['Sitio web', 'Marca'],
    result: 'Agencia de marketing y desempeño.',
    img: '/projects/project_void2.png',
    hoverImg: null,
    href: null,
    cta: null,
  },
];

export function ProjectsES() {
  return (
    <section id="proyectos" className="bg-brand-bg py-[120px] border-t border-brand-border">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">

        <div className="mb-12 GSAP-reveal" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-4">
            Proyectos
          </div>
          <h2 className="font-display font-normal text-brand-primary text-[36px] md:text-[52px] leading-tight">
            Resultados, no mockups.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.client}
              className="group relative rounded-[16px] bg-brand-surface border border-brand-border hover:border-[#2A2A2A] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 GSAP-reveal"
              data-reveal
            >
              <div className="relative bg-brand-bg border-b border-brand-border overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
                <Image
                  src={p.img}
                  alt={p.client}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition-all duration-500 group-hover:scale-105 ${p.hoverImg ? 'group-hover:opacity-0' : ''}`}
                />
                {p.hoverImg && (
                  <Image
                    src={p.hoverImg}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-brand-muted border border-brand-border rounded-full px-2.5 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-[20px] text-brand-primary mb-2">{p.client}</h3>
                <p className="font-sans font-light text-[14px] text-brand-muted leading-[1.6] mb-5">{p.result}</p>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noreferrer" className="font-sans font-normal text-[14px] text-brand-accent hover:underline">
                    {p.cta} →
                  </a>
                ) : (
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-muted">Caso interno</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
