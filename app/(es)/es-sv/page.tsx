import { NavbarES } from '@/components/es/NavbarES';
import { HeroES } from '@/components/es/HeroES';
import { BrandMomentES } from '@/components/es/BrandMomentES';
import { ServicesES } from '@/components/es/ServicesES';
import { AISearchES } from '@/components/es/AISearchES';
import { SystemDiagramES } from '@/components/es/SystemDiagramES';
import { WorkES } from '@/components/es/WorkES';
import { AboutES } from '@/components/es/AboutES';
import { ProcessES } from '@/components/es/ProcessES';
import { WhyUsES } from '@/components/es/WhyUsES';
import { FAQES } from '@/components/es/FAQES';
import { ContactES } from '@/components/es/ContactES';
import { FooterES } from '@/components/es/FooterES';

export default function HomeES() {
  return (
    <main className="flex flex-col w-full relative">
      <NavbarES />
      <HeroES />
      <BrandMomentES />
      <ServicesES />
      <AISearchES />
      <SystemDiagramES />
      <WorkES />
      <AboutES />
      <ProcessES />
      <WhyUsES />
      <FAQES />
      <ContactES />
      <FooterES />
    </main>
  );
}
