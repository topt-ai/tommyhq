import { OrganizationSchema } from '@/components/OrganizationSchema';
import { Navbar } from '@/components/en/Navbar';
import { Hero } from '@/components/en/Hero';
import { BrandMoment } from '@/components/en/BrandMoment';
import { Services } from '@/components/en/Services';
import { AISearch } from '@/components/en/AISearch';
import { SystemDiagram } from '@/components/en/SystemDiagram';
import { Work } from '@/components/en/Work';
import { About } from '@/components/en/About';
import { Process } from '@/components/en/Process';
import { WhyUs } from '@/components/en/WhyUs';
import { FAQ } from '@/components/en/FAQ';
import { Contact } from '@/components/en/Contact';
import { Footer } from '@/components/en/Footer';

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <OrganizationSchema />
      <Navbar />
      <Hero />
      <BrandMoment />
      <Services />
      <AISearch />
      <SystemDiagram />
      <Work />
      <About />
      <Process />
      <WhyUs />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
