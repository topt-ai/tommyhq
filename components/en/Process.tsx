'use client';

import { motion } from 'motion/react';

export function Process() {
  const steps = [
    {
      num: "01",
      title: "We talk",
      desc: "One call. You tell us what's broken or what's missing. We tell you what we'd build and what it would cost."
    },
    {
      num: "02",
      title: "We build",
      desc: "Fast turnaround. You get a working site or system, not a deck of wireframes and a three-month timeline."
    },
    {
      num: "03",
      title: "It runs",
      desc: "After delivery, your site ranks and your systems work. You don't manage them. That's the point."
    }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <p className="font-mono text-sm tracking-widest uppercase text-brand-accent mb-4">The Process</p>
        <h2 className="font-serif text-4xl md:text-6xl">Simple from day one.</h2>
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
