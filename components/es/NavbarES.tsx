'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function NavbarES() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg/80 backdrop-blur-md border-b border-brand-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/es-sv" className="font-nav font-extrabold text-2xl tracking-tighter hover:text-brand-accent transition-colors">
          Tommy HQ
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-widest uppercase">
          <a href="#servicios" className="hover:text-brand-accent transition-colors">Servicios</a>
          <a href="#demos" className="hover:text-brand-accent transition-colors">Demos</a>
          <a href="#contacto" className="px-6 py-3 border border-brand-primary rounded-full hover:bg-brand-primary hover:text-brand-bg transition-colors font-sans normal-case tracking-normal font-medium text-base">
            Agendar llamada
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-bg border-b border-brand-border p-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="font-mono text-sm tracking-widest uppercase hover:text-brand-accent transition-colors">Servicios</a>
            <a href="#demos" onClick={() => setMobileMenuOpen(false)} className="font-mono text-sm tracking-widest uppercase hover:text-brand-accent transition-colors">Demos</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 bg-brand-primary text-brand-bg rounded-full text-center font-sans font-medium text-base">
              Agendar llamada
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
