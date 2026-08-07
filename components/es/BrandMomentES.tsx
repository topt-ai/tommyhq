'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function BrandMomentES() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const color = useTransform(scrollYProgress, [0.8, 1], ["#888888", "#f5f5f5"]);

  return (
    <section ref={ref} className="h-[60vh] flex items-center justify-center bg-brand-bg relative overflow-hidden">
      <motion.h2 
        style={{ opacity, scale, color }}
        className="font-serif text-5xl md:text-7xl lg:text-9xl text-center px-6 max-w-6xl mx-auto leading-none"
      >
        Imposible de ignorar.
      </motion.h2>
    </section>
  );
}
