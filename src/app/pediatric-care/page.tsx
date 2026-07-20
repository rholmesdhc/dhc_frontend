import React from 'react';
import Link from 'next/link';
import styles from './PediatricCare.module.css';
import ProgramContactSidebar from '../../components/ProgramContactSidebar';

export const metadata = {
  title: 'Pediatric Care | Delta Health Center',
  description: 'Delta Health Center offers comprehensive pediatric services to improve the health and lives of infants through adulthood.',
};

export default function PediatricCarePage() {
  return (
    <main className={styles.pageWrapper}>
      
      {/* Banner Section */}
      <div className="container">
        <section className={styles.hero}>
          <img 
            src="/images/provider_hero.png" 
            alt="Pediatric Care Banner" 
            className={styles.heroBg} 
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Pediatric Care</h1>
            <p className={styles.heroSubtitle}>Improving the Health and Lives of Children.</p>
            <br />
            <p className={styles.heroSubtitle}>Pediatric Care Providers: Simone Moore MD, Tara Davis FNP</p>
          </div>
        </section>
      </div>

      {/* Top Graphic Section (Children Cutout & Divider) */}
      <section className={styles.topSection}>
        <div className="container" style={{ textAlign: 'center' }}>
          <img 
            src="/images/pediatric-care/infants_cutout.png" 
            alt="Happy diverse infants sitting in a row" 
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
              Our providers comprehensively care for infants, children, and adolescents. They make decisions daily that improve the overall health of infants and children of all ages. Delta Health Center takes pride in providing the most compassionate care & services to our pediatric patients. Our goal is to improve the health outcomes of children in the Mississippi Delta and surrounding areas.
            </p>

            <h3 className={styles.orangeHeading}>Immunizations/Vaccinations Including the Vaccines For Children Program</h3>
            <p className={styles.textParagraph}>
              The Vaccines for Children program (VFC) is designed to allow children, zero through 18 years of age, to receive immunizations funded and provided by the Mississippi Department of Health. VFC eligible children include those who have Medicaid or CHIPs as active insurance, children who do not have insurance, children with insurance that does not cover immunizations or those of Alaskan or Native American heritage. This program promotes and encourages vaccinations in children. Please feel free to contact our Mound Bayou, Moorhead or Leland clinic today for more information.
            </p>

            <h2 className={styles.servicesHeading}>PEDIATRIC SERVICES</h2>
            
            <div className={styles.servicesListContainer}>
              <ul>
                <li>Preventive Health</li>
                <li>Annual Wellness Exams</li>
                <li>Early Periodic Screening Diagnostic & Treatment (EPSDT) (This service is provided at the Mound Bayou, Moorhead, and Leland clinics only.)</li>
                <li>Vision & Hearing Screenings</li>
                <li>Adolescent Counseling</li>
                <li>Reproductive & Sex Education</li>
                <li>Immunizations/Vaccinations</li>
                <li>Physical Examinations</li>
                <li>Management of Acute & Chronic Health Conditions</li>
              </ul>
            </div>
          </div>

          <ProgramContactSidebar 
            description="Your child's health is our priority. From routine checkups and immunizations to sick visits and preventive care, our pediatric team is here to support your family every step of the way."
            phoneDisplay="662-741-8800"
            phoneHref="tel:6627418800"
            hideLocationHours={true}
          />

        </section>
      </div>

    </main>
  );
}
