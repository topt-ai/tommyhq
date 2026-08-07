'use client';

import { motion } from 'motion/react';

export function ProcessES() {
  const steps = [
    {
      num: "01",
      title: "Hablamos",
      desc: "Una sola llamada. Nos cuentas qué falla o qué falta. Te decimos qué construiríamos y cuánto costaría."
    },
    {
      num: "02",
      title: "Construimos",
      desc: "Entrega rápida. Recibes una web o sistema funcional, no una presentación de bocetos con un cronograma de tres meses."
    },
    {
      num: "03",
      title: "Funciona",
      desc: "Después de la entrega, tu sitio posiciona y tus sistemas operan solos. Tú no los administras. Ese es el punto."
    }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <p className="font-mono text-sm tracking-widest uppercase text-brand-accent mb-4">El Proceso</p>
        <h2 className="font-serif text-4xl md:text-6xl">Simple desde el primer día.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <motion.div 
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="p-8 border-l border-brand-border"
          >
            <div className="font-mono text-brand-accent text-lg mb-6">{step.num}</div>
            <h3 className="font-serif text-3xl mb-4">{step.title}</h3>
            <p className="text-brand-muted leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
