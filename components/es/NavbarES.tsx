'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const WHATSAPP_URL =
  'https://wa.me/50372018215?text=' +
  encodeURIComponent('Hola, quiero más información sobre TommyHQ');

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
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="flex items-center justify-center w-[34px] h-[34px] rounded-full border border-brand-border text-[#4ADE80] hover:border-[#2A2A2A] hover:text-[#6EEB9E] transition-colors duration-250 shrink-0"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.83 14.13c-.25.7-1.24 1.28-2.03 1.45-.54.11-1.25.2-3.63-.78-3.05-1.26-5.01-4.36-5.16-4.56-.15-.2-1.23-1.64-1.23-3.13s.77-2.22 1.05-2.52c.25-.28.62-.4.99-.4.12 0 .23 0 .32.01.28.01.42-.02.65.5.28.63.95 2.16 1.03 2.32.08.16.13.35.03.56-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.31.31-.13.61.18.3.79 1.3 1.7 2.11 1.17 1.04 2.15 1.37 2.46 1.52.31.15.49.13.67-.08.18-.2.77-.9.98-1.21.2-.3.4-.25.68-.15.28.1 1.79.85 2.1 1.01.31.15.51.23.59.36.08.13.08.75-.17 1.45Z" />
        </svg>
      </a>
      <button
        onClick={() => scrollToSection('contacto')}
        className="rounded-full bg-brand-hover text-white font-sans font-medium text-[13px] px-[20px] py-[8px] transition-all duration-250 hover:bg-[#D4888E] hover:shadow-[0_0_20px_rgba(201,113,122,0.3)] whitespace-nowrap cursor-pointer"
      >
        Agenda una llamada
      </button>
    </nav>
  );
}
