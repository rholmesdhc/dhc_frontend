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

      {/* Additional Homepage Sections can go here */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '24px' }}>
            Why Choose Delta Health Center?
          </h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>
            For sixty years, Delta Health Center has been a cornerstone of community well-being. Born in 1965 from a powerful vision for health equity, we have grown from a pioneering rural health clinic into a comprehensive healthcare home for thousands in the Mississippi Delta.
          </p>
        </div>
      </section>

      {/* WordPress Headless Data Integration */}
      <LatestNews />
    </>
  );
}
