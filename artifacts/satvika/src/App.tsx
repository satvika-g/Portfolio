import { Navbar } from "./components/Navbar.tsx";
import { HeroSection } from "./components/HeroSection.tsx";
import { IntroSection } from "./components/IntroSection.tsx";
import { SkillsSection } from "./components/SkillsSection.tsx";
import { FeaturesSection } from "./components/FeaturesSection.tsx";
import { CTASection } from "./components/CTASection.tsx";
import { Footer } from "./components/Footer.tsx";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <SkillsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </>
  );
}