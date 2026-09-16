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

    const readVar = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    let ctx: ReturnType<typeof gsap.context>;

    const build = () => {
      ctx?.revert();
      const from = readVar('--color-brand-faint') || '#141414';
      const to = readVar('--color-brand-primary') || '#F5F0EE';
      ctx = gsap.context(() => {
        gsap.fromTo(
          wordRef.current,
          { color: from },
          {
            color: to,
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
    };

    build();
    window.addEventListener('themechange', build);

    return () => {
      window.removeEventListener('themechange', build);
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex items-center justify-center overflow-hidden bg-brand-bg"
      style={{ height: '60vh' }}
    >
      <div
        ref={wordRef}
        className="px-6 text-center font-brand text-brand-faint"
        style={{
          fontWeight: 700,
          fontSize: 'clamp(44px, 9vw, 128px)',
          letterSpacing: '-0.01em',
          lineHeight: 1.05,
        }}
      >
        Imposible<br />de ignorar.
      </div>
    </section>
  );
}
