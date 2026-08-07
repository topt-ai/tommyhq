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
          src="/assets/tommy-about.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/65" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-mono text-sm tracking-widest uppercase text-brand-accent mb-6">Con Quién Trabajas</p>
        <h2 className="font-display text-5xl md:text-7xl mb-8">Sin intermediarios. Sin vendedores.</h2>
        <p className="text-xl md:text-2xl text-brand-primary/90 leading-relaxed mb-12 max-w-3xl mx-auto">
          Cuando llamas, hablas con la persona que realmente construye tu sistema. No con un representante de ventas ni un coordinador.
        </p>
        <p className="font-display text-2xl text-brand-muted italic">
          — Tommy, el desarrollador
        </p>
      </div>
    </section>
  );
}
