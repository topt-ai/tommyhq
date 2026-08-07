'use client';

import { motion } from 'motion/react';

export function WhyUsES() {
  const points = [
    { title: "Siempre Activo.", desc: "Tu sitio posiciona y tus sistemas operan las 24 horas. No hay nada que vigilar." },
    { title: "Construido Para Ti.", desc: "Sin plantillas, sin constructores visuales. Cada web y sistema está hecho a tu medida." },
    { title: "Acceso Directo.", desc: "Hablas directamente con el desarrollador, no con un manager de cuentas." },
    { title: "Sin Ataduras.", desc: "De mes a mes, siempre. Si no te funciona, no estás atrapado en un contrato." }
  ];

  return (
    <section className="py-32 px-6 bg-[#0a0a0a] border-y border-brand-border/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="font-mono text-sm tracking-widest uppercase text-brand-accent mb-4">Por Qué Nosotros</p>
          <h2 className="font-serif text-4xl md:text-6xl italic mb-6">&quot;Solo ganamos si tú ganas.&quot;</h2>
          <p className="text-xl text-brand-muted leading-relaxed">
            Eso significa cero contratos largos, cero rodeos y cero reportes de vanidad con números que no pagan tus cuentas.
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
