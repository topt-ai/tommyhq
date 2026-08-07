'use client';

import { motion } from 'motion/react';
import { ArrowRight, Search, CheckCircle, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const queries = ["constructor de techos cerca de mi", "reparación de aire acondicionado", "dentista abierto hoy"];

export function HeroES() {
  const [queryIndex, setQueryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQueryIndex((prev) => (prev + 1) % queries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-40 pb-24 px-6 min-h-[90vh] flex flex-col justify-center max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-sm tracking-widest uppercase text-brand-accent mb-6"
          >
            Páginas Web · SEO Local · Automatizaciones
          </motion.p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8">
            <span className="block overflow-hidden">
              <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="block">Domina</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="block text-brand-muted">Google.</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="block">Funciona en</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="block italic">piloto automático.</motion.span>
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-xl text-brand-muted max-w-lg mb-10 leading-relaxed"
          >
            Desarrollamos páginas web que posicionan alto para captar clientes locales, optimizamos tu presencia en Google y creamos automatizaciones para eliminar tu trabajo administrativo manual.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a href="#contacto" className="px-8 py-4 bg-brand-primary text-brand-bg font-medium rounded-full hover:bg-white transition-colors">
              Agendar llamada
            </a>
            <a href="#demos" className="flex items-center gap-2 group text-brand-muted hover:text-brand-primary transition-colors">
              Ver un demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Decorative Widget */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative w-full max-w-md mx-auto lg:ml-auto"
        >
          <div className="absolute inset-0 bg-brand-accent/20 blur-[100px] rounded-full" />
          <div className="relative bg-[#121212]/80 backdrop-blur-xl border border-brand-border rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 bg-black/50 border border-brand-border rounded-full px-4 py-3">
              <Search size={18} className="text-brand-muted" />
              <p className="font-mono text-sm text-brand-primary/80 overflow-hidden text-ellipsis whitespace-nowrap">
                {queries[queryIndex]}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-brand-bg rounded-xl p-4 border border-brand-accent/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent" />
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-lg">Tu Negocio</h3>
                  <span className="bg-brand-accent/20 text-brand-accent text-xs font-mono px-2 py-1 rounded-full">Top #2</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-brand-muted">
                  <span className="flex items-center gap-1"><CheckCircle size={12} className="text-green-500" /> Verificado en Google</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> Abierto 24/7</span>
                </div>
              </div>
              
              <div className="bg-brand-bg rounded-xl p-4 border border-brand-border opacity-50">
                <h3 className="font-serif text-lg mb-2">Competidor A</h3>
                <div className="h-2 w-24 bg-brand-border rounded-full" />
              </div>
              
              <div className="bg-brand-bg rounded-xl p-4 border border-brand-border opacity-30">
                <h3 className="font-serif text-lg mb-2">Competidor B</h3>
                <div className="h-2 w-32 bg-brand-border rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
