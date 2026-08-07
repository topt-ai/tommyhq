import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-brand-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-nav font-extrabold text-xl tracking-tighter hover:text-brand-accent transition-colors">
            Tommy HQ
          </Link>
          <span className="hidden md:inline-block text-brand-muted text-sm border-l border-brand-border pl-4">
            Systems that run while you don&apos;t have to.
          </span>
        </div>
        
        <div className="flex items-center gap-6 font-mono text-sm uppercase tracking-widest text-brand-muted">
          <a href="#services" className="hover:text-brand-primary transition-colors">Services</a>
          <a href="#work" className="hover:text-brand-primary transition-colors">Demos</a>
        </div>
        
        <div className="text-brand-muted text-sm flex flex-col md:text-right gap-1 items-center md:items-end">
          <p>All rights reserved · {new Date().getFullYear()}</p>
          <p>Made by TommyHQ</p>
        </div>
      </div>
    </footer>
  );
}
