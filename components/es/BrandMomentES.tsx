'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function BrandMomentES() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !wordRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordRef.current,
        { color: '#141414' },
        {
          color: '#F5F0EE',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0A0A0A', height: '60vh' }}
    >
      <div
        ref={wordRef}
        className="px-6 text-center font-brand"
        style={{
          fontWeight: 700,
          fontSize: 'clamp(44px, 9vw, 128px)',
          letterSpacing: '-0.01em',
          color: '#141414',
          lineHeight: 1.05,
        }}
      >
        Imposible<br />de ignorar.
      </div>
    </section>
  );
}
