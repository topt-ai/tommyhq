'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Search, TrendingUp, MapPin } from 'lucide-react';

export function HeroES() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.word');

      gsap.to(words, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.3,
      });
    }

    if (illustrationRef.current) {
      gsap.fromTo(
        illustrationRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.5, ease: 'power2.out' }
      );
    }
  }, []);

  const scrollToWork = () => {
    document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const line1 = 'Posiciona alto en Google.'.split(' ');
  const line2 = 'Corre en automático.'.split(' ');

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-32 pb-[80px] overflow-hidden bg-brand-bg">
      <div
        ref={illustrationRef}
        className="hidden lg:block absolute right-[4%] top-1/2 -translate-y-1/2 w-[38%] max-w-[460px] opacity-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <RankDashboardES />
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 flex items-center justify-between">
        <div className="max-w-[640px] GSAP-reveal" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-6">
            Sitios web &nbsp;&middot;&nbsp; SEO local &nbsp;&middot;&nbsp; Automatizaciones
          </div>

          <h1
            ref={headlineRef}
            className="font-display italic text-brand-primary text-[48px] md:text-[76px] leading-[1.08] mb-6 flex flex-wrap"
          >
            <div className="w-full flex flex-wrap gap-x-[0.25em] mb-1">
              {line1.map((word, i) => (
                <span key={`l1-${i}`} className="inline-block overflow-hidden pb-[0.18em] -mb-[0.18em]">
                  <span className="word inline-block translate-y-[32px] opacity-0">{word}</span>
                </span>
              ))}
            </div>
            <div className="w-full flex flex-wrap gap-x-[0.25em]">
              {line2.map((word, i) => (
                <span key={`l2-${i}`} className="inline-block overflow-hidden pb-[0.18em] -mb-[0.18em]">
                  <span className="word inline-block translate-y-[32px] opacity-0">{word}</span>
                </span>
              ))}
            </div>
          </h1>

          <p className="font-sans font-light text-[18px] text-brand-muted max-w-[520px] mt-6 mb-10 leading-relaxed GSAP-reveal" data-reveal>
            Construimos sitios web de alto ranking que capturan leads locales, optimizamos tu presencia en Google, y desplegamos automatizaciones a la medida para eliminar tu trabajo administrativo manual.
          </p>

          <div className="flex items-center gap-6 mt-10 GSAP-reveal" data-reveal>
            <button
              onClick={scrollToContact}
              className="rounded-full bg-brand-hover text-white font-sans font-medium text-[14px] px-[28px] py-[12px] transition-all duration-250 hover:bg-[#D4888E] hover:shadow-[0_0_20px_rgba(201,113,122,0.3)] cursor-pointer"
            >
              Agenda una llamada
            </button>
            <button
              onClick={scrollToWork}
              className="font-sans font-normal text-[14px] text-brand-accent hover:underline cursor-pointer transition-colors duration-250"
            >
              Ver una demo →
            </button>
          </div>

          <div className="mt-12 flex justify-center lg:hidden GSAP-reveal" data-reveal aria-hidden="true">
            <div className="w-full max-w-[280px]">
              <RankDashboardES />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Stat = { value: string; label: string };
type Query = { text: string; city: string; rank: number; stats: [Stat, Stat] };

const QUERIES: Query[] = [
  {
    text: 'techador en san salvador',
    city: 'San Salvador, SV',
    rank: 2,
    stats: [
      { value: '37', label: 'Leads capturados hoy' },
      { value: '100%', label: 'Auto-respondidos en < 1 min' },
    ],
  },
  {
    text: 'clínica dental en santa tecla',
    city: 'Santa Tecla, SV',
    rank: 1,
    stats: [
      { value: '52', label: 'Citas agendadas esta semana' },
      { value: '4.9★', label: 'Calificación promedio' },
    ],
  },
  {
    text: 'agente inmobiliario en antiguo cuscatlán',
    city: 'Antiguo Cuscatlán, SV',
    rank: 2,
    stats: [
      { value: '18', label: 'Visitas agendadas' },
      { value: '2.3k', label: 'Vistas de perfil en mapa' },
    ],
  },
];

const RESULT_FADE_MS = 450;

function RankDashboardES() {
  const [queryIndex, setQueryIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [phase, setPhase] = useState<'typing' | 'ranked' | 'hiding'>('typing');

  const current = QUERIES[queryIndex];
  const revealed = phase === 'ranked';

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (typed.length < current.text.length) {
        timeout = setTimeout(() => {
          setTyped(current.text.slice(0, typed.length + 1));
        }, 55);
      } else {
        timeout = setTimeout(() => setPhase('ranked'), 380);
      }
    } else if (phase === 'ranked') {
      timeout = setTimeout(() => setPhase('hiding'), 3000);
    } else {
      timeout = setTimeout(() => {
        setTyped('');
        setQueryIndex((i) => (i + 1) % QUERIES.length);
        setPhase('typing');
      }, RESULT_FADE_MS);
    }

    return () => clearTimeout(timeout);
  }, [typed, phase, current.text, queryIndex]);

  const revealStyle = (enterDelay: number) => {
    const delay = revealed ? enterDelay : 0;
    return {
      opacity: revealed ? 1 : 0,
      transform: revealed ? 'translateY(0)' : 'translateY(8px)',
      transition: `opacity ${RESULT_FADE_MS}ms ease ${delay}s, transform ${RESULT_FADE_MS}ms ease ${delay}s`,
    };
  };

  return (
    <div
      className="relative rounded-[20px] border border-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      style={{
        background: 'linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp size={16} className="text-brand-accent" />
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-primary/80">
            Rank Tracker
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
          <span className="font-mono text-[10px] uppercase text-[#4ADE80]">En vivo</span>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-[12px] border border-white/10 bg-black/30 px-4 py-3 mb-4">
        <Search size={16} className="text-brand-muted shrink-0" />
        <div className="font-sans text-[14px] text-brand-primary flex items-center min-w-0">
          <span className="truncate">{typed}</span>
          {!revealed && (
            <span className="w-[2px] h-[16px] bg-brand-accent inline-block ml-[2px] animate-pulse" />
          )}
        </div>
      </div>

      <div className="min-h-[180px]">
        <div
          className="flex items-center justify-between rounded-[12px] border border-white/10 bg-black/20 px-4 py-4 mb-4"
          style={revealStyle(0)}
        >
          <div className="flex items-center gap-2 min-w-0">
            <MapPin size={14} className="text-brand-accent shrink-0" />
            <span className="font-sans text-[13px] text-brand-muted truncate">{current.city}</span>
          </div>
          <div className="flex items-baseline gap-1 shrink-0">
            <span className="font-mono text-[11px] text-brand-muted">RANK</span>
            <span className="font-display text-[28px] leading-none text-brand-accent">#{current.rank}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {current.stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-[12px] border border-white/10 bg-black/20 px-4 py-3"
              style={revealStyle(0.12 + i * 0.1)}
            >
              <div className="font-display text-[24px] text-brand-primary leading-none mb-1">{stat.value}</div>
              <div className="font-sans font-light text-[11px] text-brand-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
