import Link from 'next/link';

export function FooterES() {
  return (
    <footer className="border-t border-brand-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-4">
            <Link href="/es-sv" className="font-nav font-extrabold text-xl tracking-tighter hover:text-brand-accent transition-colors">
              Tommy HQ
            </Link>
            <span className="hidden md:inline-block text-brand-muted text-sm border-l border-brand-border pl-4">
              Sistemas que funcionan solos.
            </span>
          </div>
          <div className="text-sm font-mono text-brand-muted md:mt-2 text-center md:text-left">
            <p>San Salvador, El Salvador</p>
            <p>+503 XXXXXXXX</p> {/* TODO: NAP real de El Salvador */}
          </div>
        </div>
        
        <div className="flex items-center gap-6 font-mono text-sm uppercase tracking-widest text-brand-muted">
          <a href="#servicios" className="hover:text-brand-primary transition-colors">Servicios</a>
          <a href="#demos" className="hover:text-brand-primary transition-colors">Demos</a>
        </div>
        
        <div className="text-brand-muted text-sm flex flex-col md:text-right gap-1 items-center md:items-end">
          <p>Todos los derechos reservados · {new Date().getFullYear()}</p>
          <p>Hecho por TommyHQ</p>
        </div>
      </div>
    </footer>
  );
}
