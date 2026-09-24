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
    client: 'Descent',
    tags: ['Demo', 'Interactive'],
    result: 'A cinematic, scroll-driven cityscape. Pure atmosphere and motion, built for feel.',
    img: '/projects/descent.png',
    hoverImg: null,
    href: 'https://descent-lemon.vercel.app/',
    cta: 'View demo',
  },
  {
    client: 'Unfazed',
    tags: ['Demo', 'WebGL'],
    result: 'An interactive particle piece that reacts as you move through it.',
    img: '/projects/unfazed.png',
    hoverImg: null,
    href: 'https://unfazed-particles.vercel.app/',
    cta: 'View demo',
  },
  {
    client: 'Ronin & Son',
    tags: ['Demo', 'Scroll story'],
    result: 'A five-chapter scrollytelling story on forging a katana by hand.',
    img: '/projects/katana.png',
    hoverImg: null,
    href: 'https://ronin-son.vercel.app/',
    cta: 'View demo',
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-brand-bg py-[120px] border-t border-brand-border">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">

        <div className="mb-12 GSAP-reveal" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-4">
            Projects
          </div>
          <h2 className="font-display font-normal text-brand-primary text-[36px] md:text-[52px] leading-tight">
            A few things we&apos;ve built.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.client}
              className="group relative rounded-[16px] bg-brand-surface border border-brand-border hover:border-brand-border-hover overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 GSAP-reveal"
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
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-muted">Internal case</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
