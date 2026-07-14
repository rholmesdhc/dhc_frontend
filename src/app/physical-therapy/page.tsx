import React from 'react';
import styles from './PhysicalTherapy.module.css';
import ProgramContactSidebar from '../../components/ProgramContactSidebar';

export const metadata = {
  title: 'Physical Therapy & Rehabilitation | Delta Health Center',
  description: 'Comprehensive physical therapy services at Delta Health Center. Specializing in mobility training, post-surgical rehabilitation, and chronic pain management.',
};

export default function PhysicalTherapy() {
  return (
    <main className={styles.pageWrapper}>
      {/* Hero Section */}
      <div className="container">
        <section className={styles.hero}>
          <img 
            src="/images/physical_therapy_hero.png" 
            alt="Physical Therapist helping a patient with mobility exercises" 
            className={styles.heroBg} 
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Physical Therapy & Rehabilitation</h1>
            <p className={styles.heroSubtitle}>
              Restoring mobility, reducing pain, and empowering you to live an active, fulfilling life through expert, personalized care.
            </p>
            <br />
            <p className={styles.heroSubtitle}>Physical Therapy Director - Dr. Lauren Adams</p>
          </div>
        </section>
      </div>

      {/* Main Content */}
      <div className="container" style={{ marginTop: '40px', marginBottom: '60px' }}>
        <section className="program-layout-grid">
          
          {/* Left Column: Description & Services */}
          <div className={styles.leftColumn}>
            <h2 className={styles.orangeHeading}>Comprehensive Rehabilitation Care</h2>
            <p className={styles.textParagraph}>
              At Delta Health Center, our Physical Therapy department is dedicated to helping you regain your strength, mobility, and independence. Whether you are recovering from a recent surgery, managing a chronic condition, or overcoming a sports injury, our expert team provides compassionate, evidence-based care tailored to your unique goals.
            </p>
            <p className={styles.textParagraph}>
              Led by highly specialized professionals, including Dr. Lauren Adams, PhD in Physical Therapy, our clinic utilizes state-of-the-art equipment and modern therapeutic techniques. We believe in treating the whole person, not just the symptom, ensuring a holistic approach to your long-term recovery.
            </p>

            <h2 className={styles.orangeHeading}>Our Specialized Services</h2>
            <ul className={styles.featuresList}>
              <li>
                <strong>Post-Surgical Rehabilitation:</strong> Safe and structured recovery programs following orthopedic surgeries, joint replacements, and spinal procedures.
              </li>
              <li>
                <strong>Chronic Pain Management:</strong> Targeted therapies and therapeutic exercises to alleviate persistent neck, back, and joint pain without relying solely on medication.
              </li>
              <li>
                <strong>Sports Injury Recovery:</strong> Accelerated healing protocols for sprains, strains, and athletic injuries to get you back in the game safely.
              </li>
              <li>
                <strong>Balance & Fall Prevention:</strong> Specialized training designed for older adults to improve stability, coordination, and confidence in daily movements.
              </li>
              <li>
                <strong>Workplace Injury Rehab:</strong> Comprehensive conditioning programs to help injured workers safely return to their occupational duties.
              </li>
            </ul>
          </div>

          {/* Right Column: Sidebar */}
          <ProgramContactSidebar 
            title="Referral Required"
            description="In order to see our physical therapist you must have a referral from one of the DHC providers."
            phoneDisplay="662-741-8800"
            phoneHref="tel:6627418800"
          />
        </section>
      </div>
    </main>
  );
}
