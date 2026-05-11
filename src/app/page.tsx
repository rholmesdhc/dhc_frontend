import Hero from "../components/Hero";
import StandOut from "../components/StandOut";
import ServicesGrid from "../components/ServicesGrid";
import LatestNews from "../components/LatestNews";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <StandOut />

      {/* WordPress Headless Data Integration */}
      <LatestNews />
    </>
  );
}
