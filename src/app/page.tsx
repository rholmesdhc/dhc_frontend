import Hero from "../components/Hero";
// Import HeroCarousel for next release unhiding
// import HeroCarousel from "../components/HeroCarousel";
import StandOut from "../components/StandOut";
import ServicesGrid from "../components/ServicesGrid";
import LatestNews from "../components/LatestNews";
import ActionCards from "../components/ActionCards";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <HeroCarousel /> */}
      <ActionCards />
      <ServicesGrid />
      <StandOut />
      <WhyChoose />

      {/* WordPress Headless Data Integration */}
      <LatestNews />
    </>
  );
}

