'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ServicesES() {
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);

  // Inicializa en los valores finales para que la tarjeta se lea bien antes de
  // (o sin) la animación de scroll (evita el "0%" de código a medida al cargar).
  const [score, setScore] = useState(98);
  const [loadTime, setLoadTime] = useState(1.2);
  const [customCode, setCustomCode] = useState(100);

  useEffect(() => {
    if (!card1Ref.current) return;

    ScrollTrigger.create({
      trigger: card1Ref.current,
      start: 'top 85%',
      onEnter: () => {
        setScore(0);
        setLoadTime(5);
        setCustomCode(0);
        gsap.to({ val: 0 }, {
          val: 98,
          duration: 1.5,
          ease: 'power3.out',
          onUpdate: function () {
            setScore(Math.floor(this.targets()[0].val));
          },
        });

        gsap.to({ val: 5 }, {
          val: 1.2,
          duration: 1.5,
          ease: 'power3.out',
          onUpdate: function () {
            setLoadTime(Number(this.targets()[0].val.toFixed(1)));
          },
        });

        gsap.to({ val: 0 }, {
          val: 100,
          duration: 1.5,
          ease: 'power3.out',
          onUpdate: function () {
            setCustomCode(Math.floor(this.targets()[0].val));
          },
        });
      },
      once: true,
    });
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="bg-brand-bg py-[120px]">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">

        <div className="mb-12 GSAP-reveal" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-4">
            Qué construimos
          </div>
          <h2 className="font-display font-normal text-brand-primary text-[48px] leading-tight">
            Tres servicios.
          </h2>
        </div>

        <hr className="border-t border-brand-border my-12 GSAP-reveal" data-reveal />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="group relative bg-transparent border border-brand-border hover:border-brand-border-hover rounded-[16px] p-6 md:p-10 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 GSAP-reveal"
            data-reveal
          >
            <div className="font-mono text-[11px] text-brand-muted mb-4">01</div>
            <h3 className="font-display text-[36px] text-brand-primary mb-4">SEO Local + Ads</h3>
            <p className="font-sans font-light text-[16px] text-brand-muted leading-[1.7] mb-8">
              Domina la búsqueda local de dos formas. El SEO te posiciona en el mapa, Top 3 garantizado. Los anuncios de Google &amp; Meta te ponen frente a clientes cercanos más rápido. Úsalos juntos para potenciarte, o cada uno por su cuenta.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              <Tag label="Perfil de Google" />
              <Tag label="Autoridad local" />
              <Tag label="Google & Meta Ads" />
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border/30">
              <div>
                <div className="font-display text-[32px] text-brand-accent mb-1">#1-3</div>
                <div className="font-sans font-light text-[12px] text-brand-muted">Ranking en mapas</div>
              </div>
              <div>
                <div className="font-display text-[32px] text-brand-accent mb-1">2 vías</div>
                <div className="font-sans font-light text-[12px] text-brand-muted">Para aparecer</div>
              </div>
              <div>
                <div className="font-display text-[32px] text-brand-accent mb-1">Local</div>
                <div className="font-sans font-light text-[12px] text-brand-muted">Clientes cerca</div>
              </div>
            </div>
          </div>

          <div
            ref={card1Ref}
            className="group relative bg-transparent border border-brand-border hover:border-brand-border-hover rounded-[16px] p-6 md:p-10 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 GSAP-reveal"
            data-reveal
          >
            <div className="font-mono text-[11px] text-brand-muted mb-4">02</div>
            <h3 className="font-display text-[36px] text-brand-primary mb-4">Sitios Web y Apps</h3>
            <p className="font-sans font-light text-[16px] text-brand-muted leading-[1.7] mb-8">
              Sitios y apps a la medida que se ven serios, cargan rápido y aparecen en Google. Sin plantillas. Desde landing pages hasta apps completas con base de datos, logins y dashboards.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              <Tag label="Rápido" />
              <Tag label="Confiable" />
              <Tag label="A tu marca" />
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border/30">
              <div>
                <div className="font-display text-[32px] text-brand-accent mb-1">{score}</div>
                <div className="font-sans font-light text-[12px] text-brand-muted">PageSpeed</div>
              </div>
              <div>
                <div className="font-display text-[32px] text-brand-accent mb-1">&lt; {loadTime < 2 ? '2' : loadTime}s</div>
                <div className="font-sans font-light text-[12px] text-brand-muted">Tiempo de carga</div>
              </div>
              <div>
                <div className="font-display text-[32px] text-brand-accent mb-1">{customCode}%</div>
                <div className="font-sans font-light text-[12px] text-brand-muted">Código propio</div>
              </div>
            </div>
          </div>

          <div
            className="group relative bg-transparent border border-brand-border hover:border-brand-border-hover rounded-[16px] p-6 md:p-10 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 GSAP-reveal"
            data-reveal
          >
            <div className="font-mono text-[11px] text-brand-muted mb-4">03</div>
            <h3 className="font-display text-[36px] text-brand-primary mb-4">Sistemas</h3>
            <p className="font-sans font-light text-[16px] text-brand-muted leading-[1.7] mb-8">
              Automatizaciones, agentes de IA y flujos a medida que reemplazan el trabajo manual de tu equipo. Se construyen una vez, funcionan siempre.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              <Tag label="CRM" />
              <Tag label="Calificación de leads" />
              <Tag label="A tu medida" />
            </div>

            <TypewriterEffect />
          </div>

        </div>
      </div>
    </section>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <div className="font-mono text-[11px] border border-brand-border text-brand-muted rounded-full px-[12px] py-[4px]">
      {label}
    </div>
  );
}

function TypewriterEffect() {
  const lines = [
    '> Lead calificado a las 2:14 AM',
    '> Email de seguimiento enviado automáticamente',
    '> CRM actualizado, sin intervención',
    '> Cita agendada mientras dormías',
  ];

  const [displayText, setDisplayText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (charIndex < lines[lineIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + lines[lineIndex].charAt(charIndex));
          setCharIndex((c) => c + 1);
        }, 40);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setVisibleLines((prev) => [...prev, lines[lineIndex]]);
          setDisplayText('');
          setCharIndex(0);

          if (lineIndex < lines.length - 1) {
            setLineIndex((l) => l + 1);
            setIsTyping(true);
          } else {
            setTimeout(() => {
              setVisibleLines([]);
              setLineIndex(0);
              setIsTyping(true);
            }, 3000);
          }
        }, 800);
      }
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, isTyping, lineIndex]);

  return (
    <div className="pt-6 border-t border-brand-border/30 h-[140px] relative">
      <div className="flex items-center gap-2 mb-4 absolute top-6 right-0">
        <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></div>
        <div className="font-mono text-[10px] uppercase text-[#4ADE80]">Live</div>
      </div>

      <div className="font-mono text-[13px] text-brand-accent leading-relaxed flex flex-col pt-1 pr-16">
        {visibleLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {lineIndex < lines.length && (
          <div className="flex whitespace-pre-wrap">
            <span>{displayText}</span>
            <span className="w-2 bg-brand-accent animate-pulse inline-block ml-[2px] h-[15px] self-center"></span>
          </div>
        )}
      </div>
    </div>
  );
}
