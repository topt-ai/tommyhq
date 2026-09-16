'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

export function ThemeToggle({
  toLightLabel = 'Switch to light mode',
  toDarkLabel = 'Switch to dark mode',
}: {
  toLightLabel?: string;
  toDarkLabel?: string;
}) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.getAttribute('data-theme') as Theme) || 'dark';
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new CustomEvent('themechange', { detail: next }));
  };

  const isDark = theme === 'dark';
  const nextLabel = isDark ? toLightLabel : toDarkLabel;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={nextLabel}
      title={nextLabel}
      className="flex items-center justify-center w-8 h-8 rounded-full border border-brand-border text-brand-muted hover:text-brand-primary hover:border-brand-border-hover transition-colors duration-250 cursor-pointer shrink-0"
    >
      {/* Render nothing theme-specific until mounted to avoid hydration mismatch. */}
      {mounted && (isDark ? <Moon size={15} /> : <Sun size={15} />)}
    </button>
  );
}
