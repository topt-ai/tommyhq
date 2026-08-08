import type { Metadata } from 'next';
import '../globals.css';
import { dmSans, dmSerifDisplay, jetbrainsMono, shipporiMincho } from '@/lib/fonts';
import { LocalBusinessSchema } from '@/components/LocalBusinessSchema';
import { ClientRoot } from '@/components/ClientRoot';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://tommyhq.com'),
  title: 'TommyHQ | Sistemas que funcionan solos',
  description: 'Desarrollamos páginas web de alto impacto, optimizamos tu SEO local en Google y creamos automatizaciones a medida.',
  alternates: {
    languages: {
      'en-US': '/',
      'es-SV': '/es-sv/',
      'x-default': '/',
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${dmSerifDisplay.variable} ${jetbrainsMono.variable} ${shipporiMincho.variable}`}>
      <body className="antialiased font-sans bg-brand-bg text-brand-primary min-h-screen flex flex-col selection:bg-brand-accent selection:text-white">
        <LocalBusinessSchema />
        <ClientRoot>{children}</ClientRoot>
        <Analytics />
      </body>
    </html>
  );
}
