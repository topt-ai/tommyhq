'use client';

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-bg border-t border-brand-border relative z-10">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

        <div className="flex items-center gap-2.5 order-3 md:order-1">
          <span className="w-8 h-8 rounded-[8px] border border-brand-border bg-brand-surface flex items-center justify-center">
            <span className="font-display text-brand-accent text-[18px] leading-none">T</span>
          </span>
          <span className="font-sans font-light text-[13px] text-brand-muted">Tommy HQ</span>
        </div>

        <div className="hidden md:block font-mono text-[11px] text-[#2A2A2A] order-2 tracking-wide">
          Systems that run while you don&apos;t have to.
        </div>

        <div className="flex items-center gap-6 order-1 md:order-3">
          <button onClick={() => scrollToSection('services')} className="font-sans font-light text-[13px] text-brand-muted hover:text-brand-primary transition-colors duration-250 cursor-pointer">
            Services
          </button>
          <button onClick={() => scrollToSection('work')} className="font-sans font-light text-[13px] text-brand-muted hover:text-brand-primary transition-colors duration-250 cursor-pointer">
            Demos
          </button>
        </div>

      </div>

      <div className="border-t border-brand-border">
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="font-sans font-light text-[12px] text-brand-muted">
            All rights reserved &middot; 2025
          </div>
          <div className="font-sans font-light text-[12px] text-brand-muted">
            Made by <span className="text-brand-accent">TommyHQ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
