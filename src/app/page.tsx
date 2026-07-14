import Hero from "../components/Hero";
// Import HeroCarousel for next release unhiding
// import HeroCarousel from "../components/HeroCarousel";
import StandOut from "../components/StandOut";
import ServicesGrid from "../components/ServicesGrid";
import LatestNews from "../components/LatestNews";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <HeroCarousel /> */}
      <ServicesGrid />
      <StandOut />

      {/* WordPress Headless Data Integration */}
      <LatestNews />
    </>
  );
}
