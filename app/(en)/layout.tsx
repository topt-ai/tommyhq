import type { Metadata } from 'next';
import '../globals.css';
import { dmSans, dmSerifDisplay, jetbrainsMono, shipporiMincho } from '@/lib/fonts';
import { ClientRoot } from '@/components/ClientRoot';

export const metadata: Metadata = {
  metadataBase: new URL('https://tommyhq.com'),
  title: 'TommyHQ | Systems that run while you don\'t have to',
  description: 'We build high-ranking websites that capture local leads, optimize your Google presence, and deploy custom automations.',
  alternates: {
    languages: {
      'en-US': '/',
      'es-SV': '/es-sv/',
      'x-default': '/',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable} ${jetbrainsMono.variable} ${shipporiMincho.variable}`}>
      <body className="antialiased font-sans bg-brand-bg text-brand-primary min-h-screen flex flex-col selection:bg-brand-accent selection:text-white">
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
