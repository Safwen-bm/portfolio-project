// app/page.jsx
import TopBand from "@/components/hero/TopBand";
import HeroSection from "@/components/hero/HeroSection";
import Stats from "@/components/hero/Stats";
import TechStackSection from "@/components/techstack/TechStackSection";
import AboutSection from "@/components/about/AboutSection";
import RoadmapSection from "@/components/roadmap/RoadmapSection";
import WorkSection from "@/components/work/WorkSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ServicesSection from "@/components/services/ServicesSection";
import CvSection from "@/components/cv/CvSection";
import ContactSection from "@/components/contact/ContactSection";

const Home = () => {
  return (
    <div className="bg-primary text-ink">
      {/* One 3D background shared by Hero + Stats + Tech Stack */}
      <TopBand>
        <HeroSection />

        <section className="relative pb-4 pt-2 md:pb-6">
          <div className="container mx-auto px-4">
            <Stats />
          </div>
        </section>

        <TechStackSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </TopBand>

      <AboutSection />
      <RoadmapSection />
      <WorkSection />
      <ResumeSection />
      <ServicesSection />
      <CvSection />
      <ContactSection />
    </div>
  );
};

export default Home;
