import ContactSection from "./components/ContactSection";
import GallerySection from "./components/GallerySection";
import HeaderSection from "./components/HeaderSection";
import LogoBar from "./components/LogoBar";
import SkillsSection from "./components/SkillSection";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <main className="main">
      <HeaderSection />
      <LogoBar />
      <SkillsSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
