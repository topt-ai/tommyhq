'use client';

import { useEffect, useState } from 'react';

/**
 * Typewriter that cycles through example search queries, so the prompt reads as
 * a template to adapt rather than an exact phrase to type into an AI.
 */
export function RotatingQuery({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState(phrases[0]);
  const [phase, setPhase] = useState<'typing' | 'holding' | 'deleting'>('holding');

  const current = phrases[index];

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (typed.length < current.length) {
        t = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 55);
      } else {
        t = setTimeout(() => setPhase('holding'), 2000);
      }
    } else if (phase === 'holding') {
      t = setTimeout(() => setPhase('deleting'), 1400);
    } else {
      if (typed.length > 0) {
        t = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 28);
      } else {
        setIndex((i) => (i + 1) % phrases.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(t);
  }, [typed, phase, current, phrases.length]);

  return (
    <div className="font-mono text-[14px] text-brand-primary flex items-center gap-2 min-h-[21px]">
      <span className="text-brand-accent">&gt;</span>
      <span>
        &quot;{typed}
        <span className="inline-block w-[2px] h-[15px] bg-brand-accent align-middle ml-[1px] animate-pulse" />
        &quot;
      </span>
    </div>
  );
}
