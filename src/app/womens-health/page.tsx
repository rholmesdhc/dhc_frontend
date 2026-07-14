import React from 'react';
import styles from './WomensHealth.module.css';
import ProgramContactSidebar from '../../components/ProgramContactSidebar';

export default function WomensHealthPage() {
  const womensServices = [
    "Well-Woman Exams",
    "Pap Smears & HPV Testing",
    "Breast Cancer Screenings",
    "Mammogram Referrals",
    "Family Planning & Contraception",
    "Prenatal Care",
    "Postpartum Care",
    "Menopause Management",
    "STI Testing & Treatment",
    "Osteoporosis Screening",
    "Gynecological Care",
    "Health Education"
  ];

  return (
    <main className={styles.pageWrapper}>
      
      {/* Banner Section */}
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/womens_health_hero.png?v=3" alt="Women's Health Banner" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Women's Health</h1>
            <p className={styles.heroSubtitle}>Comprehensive Care For Every Stage</p>
          </div>
        </section>
      </div>

      {/* Main Content Grid */}
      <div className="container">
        <section className="program-layout-grid">
          
          {/* Left Text & Services Column */}
          <div className={styles.leftColumn}>
            <p className={styles.textParagraph}>
              At Delta Health Center, we are dedicated to providing compassionate, high-quality healthcare tailored specifically to the unique needs of women. We understand that women's health goes beyond reproductive health, encompassing physical, mental, and emotional well-being throughout every stage of life.
            </p>
            <p className={styles.textParagraph}>
              From adolescence through menopause and beyond, our experienced medical providers offer a safe, welcoming environment. Whether you need a routine preventative screening, family planning guidance, prenatal care, or management of a specific health condition, our team is here to support you. We prioritize preventive care and education, empowering you to make informed decisions about your health.
            </p>

            <h2 className={styles.servicesHeading}>OUR SERVICES</h2>
            
            <div className={styles.servicesListContainer}>
              <ul>
                {womensServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <ProgramContactSidebar />

        </section>
      </div>

    </main>
  );
}
