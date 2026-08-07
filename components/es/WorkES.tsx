'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function WorkES() {
  return (
    <section id="demos" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <p className="font-mono text-sm tracking-widest uppercase text-brand-accent mb-4">Comprúebalo tú mismo</p>
        <h2 className="font-serif text-4xl md:text-6xl mb-6">¿Quieres pruebas? Te las mostraremos.</h2>
        <p className="text-lg text-brand-muted">Cuéntanos sobre tu negocio y te mostraremos exactamente lo que construiríamos para ti.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group p-10 md:p-14 border border-brand-border rounded-3xl bg-[#0d0d0d] hover:bg-[#111111] transition-all cursor-pointer relative overflow-hidden"
          onClick={() => {
             const evt = new CustomEvent('setContactModeES', { detail: 'demo' });
             window.dispatchEvent(evt);
             document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-[80px] group-hover:bg-brand-accent/20 transition-all duration-500 rounded-full" />
          <h3 className="font-serif text-3xl mb-4">Solicita un sitio de prueba</h3>
          <p className="text-brand-muted leading-relaxed mb-10">
            Diseñaremos una página de muestra para tu negocio, así podrás ver la calidad antes de comprometerte a nada.
          </p>
          <div className="flex items-center gap-2 text-brand-accent font-mono uppercase tracking-widest text-sm">
            Comenzar <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group p-10 md:p-14 border border-brand-border rounded-3xl bg-[#0d0d0d] hover:bg-[#111111] transition-all cursor-pointer relative overflow-hidden"
          onClick={() => {
             const evt = new CustomEvent('setContactModeES', { detail: 'audit' });
             window.dispatchEvent(evt);
             document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/20 transition-all duration-500 rounded-full" />
          <h3 className="font-serif text-3xl mb-4">Recibe una auditoría gratuita</h3>
          <p className="text-brand-muted leading-relaxed mb-10">
            Revisaremos dónde apareces en Google y en búsquedas de IA, y te diremos exactamente qué te está frenando.
          </p>
          <div className="flex items-center gap-2 text-brand-accent font-mono uppercase tracking-widest text-sm">
            Comenzar <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
