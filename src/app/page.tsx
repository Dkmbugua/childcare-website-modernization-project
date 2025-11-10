import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import OurStory from "@/components/sections/our-story";
import Programs from "@/components/sections/programs";
import EnrichmentPrograms from "@/components/sections/enrichment-programs";
import MissionVision from "@/components/sections/mission-vision";
import Testimonials from "@/components/sections/testimonials";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="PAGES_CONTAINER">
        <HeroSection />
        <OurStory />
        <Programs />
        <EnrichmentPrograms />
        <MissionVision />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}