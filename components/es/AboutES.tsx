'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

export function AboutES() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/tommy/1920/1080" 
          alt="TommyHQ Taller" 
          fill 
          className="object-cover opacity-30 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-brand-bg/20" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-mono text-sm tracking-widest uppercase text-brand-accent mb-6">Con Quién Trabajas</p>
        <h2 className="font-serif text-5xl md:text-7xl mb-8">Sin intermediarios. Sin vendedores.</h2>
        <p className="text-xl md:text-2xl text-brand-primary/90 leading-relaxed mb-12 max-w-3xl mx-auto">
          Cuando llamas, hablas con la persona que realmente construye tu sistema. No con un representante de ventas ni un coordinador.
        </p>
        <p className="font-serif text-2xl text-brand-muted italic">
          — Tommy, el desarrollador
        </p>
      </div>
    </section>
  );
}
