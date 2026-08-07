import { DM_Serif_Display, DM_Sans, JetBrains_Mono, Shippori_Mincho } from 'next/font/google';

export const dmSerifDisplay = DM_Serif_Display({ 
  weight: ['400'], 
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif'
});

export const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans'
});

export const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains'
});

export const shipporiMincho = Shippori_Mincho({ 
  weight: ['400', '800'], 
  subsets: ['latin'],
  variable: '--font-shippori'
});
