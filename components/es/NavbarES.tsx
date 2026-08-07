'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function NavbarES() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] items-center px-4 py-2 flex gap-4 sm:gap-8 max-w-[calc(100vw-24px)]',
        scrolled
          ? 'bg-[#111111]/85 backdrop-blur-[12px] border border-brand-border'
          : 'bg-transparent border border-transparent'
      )}
    >
      <div
        className="text-[16px] tracking-[0.04em] text-brand-primary whitespace-nowrap font-brand"
        style={{ fontWeight: 500 }}
      >
        Tommy HQ
      </div>
      <div className="hidden sm:flex items-center gap-6">
        <button
          onClick={() => scrollToSection('demos')}
          className="font-sans font-normal text-[14px] text-brand-muted hover:text-brand-primary transition-colors duration-250 cursor-pointer"
        >
          Demos
        </button>
        <button
          onClick={() => scrollToSection('servicios')}
          className="font-sans font-normal text-[14px] text-brand-muted hover:text-brand-primary transition-colors duration-250 cursor-pointer"
        >
          Servicios
        </button>
      </div>
      <button
        onClick={() => scrollToSection('contacto')}
        className="rounded-full bg-brand-hover text-white font-sans font-medium text-[13px] px-[20px] py-[8px] transition-all duration-250 hover:bg-[#D4888E] hover:shadow-[0_0_20px_rgba(201,113,122,0.3)] whitespace-nowrap cursor-pointer"
      >
        Agenda una llamada
      </button>
    </nav>
  );
}
