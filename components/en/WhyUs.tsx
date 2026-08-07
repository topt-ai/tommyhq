'use client';

import { motion } from 'motion/react';

export function WhyUs() {
  const points = [
    { title: "Always On.", desc: "Your site ranks and your systems run around the clock. Nothing to babysit." },
    { title: "Built Around You.", desc: "No templates, no page builders. Every site and system is custom." },
    { title: "Direct Access.", desc: "You talk to the person who builds it, not an account manager." },
    { title: "No Lock-In.", desc: "Month to month, always. If it's not working, you're not stuck." }
  ];

  return (
    <section className="py-32 px-6 bg-[#0a0a0a] border-y border-brand-border/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="font-mono text-sm tracking-widest uppercase text-brand-accent mb-4">Why Us</p>
          <h2 className="font-serif text-4xl md:text-6xl italic mb-6">&quot;We win only if you win.&quot;</h2>
          <p className="text-xl text-brand-muted leading-relaxed">
            That means no long contracts, no runaround, and no vanity reports full of numbers that don&apos;t pay your bills.
          </p>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-12 gap-y-16">
          {points.map((pt, idx) => (
            <motion.div 
              key={pt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="font-serif text-2xl mb-3 text-brand-primary/90">{pt.title}</h3>
              <p className="text-brand-muted leading-relaxed">
                {pt.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
