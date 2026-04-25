import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { AuthorityBar } from "@/components/sections/AuthorityBar";
import { Philosophy } from "@/components/sections/Philosophy";
import { Services } from "@/components/sections/Services";
import { Methodology } from "@/components/sections/Methodology";
import { Testimonials } from "@/components/sections/Testimonials";
import { AboutDiego } from "@/components/sections/AboutDiego";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:bg-accent focus:text-bg focus:px-4 focus:py-2 font-mono text-xs uppercase tracking-widest"
      >
        Saltar al contenido
      </a>
      
      <Nav />
      
      <main id="main-content">
        <Hero />
        <AuthorityBar />
        <Philosophy />
        <Services />
        <Methodology />
        <Testimonials />
        <AboutDiego />
        <LeadMagnet />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
