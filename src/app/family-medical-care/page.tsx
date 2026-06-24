import React from 'react';
import Link from 'next/link';
import styles from './FamilyMedicalCare.module.css';
import ProgramContactSidebar from '../../components/ProgramContactSidebar';

export const metadata = {
  title: 'Family Medical Care | Delta Health Center',
  description: 'Delta Health Center offers comprehensive family medical services for all ages.',
};

export default function FamilyMedicalCarePage() {
  return (
    <main className={styles.pageWrapper}>
      
      {/* Banner Section */}
      <div className="container">
        <section className={styles.hero}>
          <img 
            src="/images/provider_hero.png" 
            alt="Family Medical Care Banner" 
            className={styles.heroBg} 
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>FAMILY MEDICAL CARE</h1>
            <p className={styles.heroSubtitle}>Uniquely Trained to Care.</p>
            <br />
            <p className={styles.heroSubtitle}>Chief Medical Officer: Dr. Marketta Blue</p>
          </div>
        </section>
      </div>

      {/* Top Graphic Section (Cutout & Divider) */}
      <section className={styles.topSection}>
        <div className="container">
          <img 
            src="/images/family-medical/cutout.png" 
            alt="Family and medical provider" 
            className={styles.heroCutout} 
          />
        </div>
        <hr className={styles.blueDivider} />
      </section>

      {/* Main Content Grid */}
      <div className="container">
        <section className="program-layout-grid">
          
          {/* Left Text & Services Column */}
          <div className={styles.leftColumn}>
            <p className={styles.textParagraph}>
              Delta Health Center's family medical team consists of internists, family physicians, family nurse practitioners, registered nurses, and licensed practical nurses. Our team is uniquely trained to care for the whole person. A few of the services provided by Delta Health Center can be found below.
            </p>

            <h2 className={styles.servicesHeading}>FAMILY MEDICAL SERVICES</h2>
            
            <div className={styles.servicesListContainer}>
              <ul>
                <li>Prostate Screenings</li>
                <li>Adult Life Span Screenings</li>
                <li>Annual Wellness Exams</li>
                <li>Colorectal Cancer Screenings</li>
                <li>Preventive Health Screenings</li>
                <li>Chronic Disease Management</li>
                <li>Tobacco Cessation</li>
                <li>Eye Exam Screenings & Referrals</li>
                <li>Diabetic Screenings</li>
              </ul>
            </div>

            <Link href="/find-a-provider?specialty=Family+Medicine" className={styles.providerLink}>
              CLICK HERE TO MEET OUR FAMILY MEDICAL PROVIDERS
            </Link>
          </div>

          <ProgramContactSidebar 
            phoneDisplay="662-741-8800"
            phoneHref="tel:6627418800"
            hideLocationHours={true}
          />

        </section>
      </div>

    </main>
  );
}
