import Hero from "../components/Hero";
import StandOut from "../components/StandOut";
import ServicesGrid from "../components/ServicesGrid";
import LatestNews from "../components/LatestNews";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <StandOut />
      <WhyChoose />

      {/* WordPress Headless Data Integration */}
      <LatestNews />
    </>
  );
}
