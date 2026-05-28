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
            <h1 className={styles.heroTitle}>PEDIATRIC CARE</h1>
            <p className={styles.heroSubtitle}>Improving the Health and Lives of Infants.</p>
            <br />
            <p className={styles.heroSubtitle}>Pediatric Care Director: Dr. Simone Moore</p>
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
              Our providers comprehensively care for infants, children, and adolescents. They make decisions daily that improve the health and lives of infants through adulthood, form relationships with parents, and diagnose and treat youth. Delta Health Center takes pride in providing the most compassionate care & services to children. Our goal is to improve the health of our state's children.
            </p>

            <h3 className={styles.orangeHeading}>Immunizations/Vaccinations Including Vaccines For Children Program</h3>
            <p className={styles.textParagraph}>
              The Vaccines for Children program (VFC) is designed to allow children, zero through 18 years of age, to receive free vaccinations. Eligible children include those who receive Medicaid, Native Americans or Alaskan Natives, and children who have health insurance that does not cover vaccination. These underinsured children must be referred to a Federally Qualified Health Center, Community/Rural Health Center, or Public Health to receive their immunizations/vaccinations.
            </p>
            <p className={styles.textParagraph}>
              This program promotes the creation of a medical home for children by inviting private provider participation. It can also reduce referrals to public health clinics and help raise awareness of childhood immunizations/vaccinations.
            </p>
            <p className={styles.textParagraph}>
              Health care providers may receive VFC vaccine and administer this vaccine at no charge if they are willing to enroll in the program and agree to follow the ACIP Recommended Immunization/Vaccination Schedule. There is no fee for enrolling and the provider is allowed to charge a $10 administration fee per vaccine if the parent is able to pay; otherwise the vaccination is provided at no cost. Providers may also elect to bill clients for a separate office visit. For any child who is Medicaid eligible, the provider must bill Medicaid for the administration fee. This fee is reimbursed in ADDITION to the reimbursement for the office visit; it does not replace it.
            </p>

            <h3 className={styles.orangeHeading}>American Academy of Pediatrics for Healthy Children website</h3>
            <p className={styles.textParagraph}>
              For trusted information by the American Academy of Pediatrics by pediatricians for parents, please click here.
            </p>

            <h2 className={styles.servicesHeading}>PEDIATRIC SERVICES</h2>
            
            <div className={styles.servicesListContainer}>
              <ul>
                <li>Preventive Health</li>
                <li>Well-Child Care</li>
                <li>Early Periodic Screening Diagnostic & Treatment (EPSDT) (This service is provided at the Mound Bayou, Moorhead, and Leland clinics only.)</li>
                <li>Vaccinations</li>
                <li>HPV Injections</li>
                <li>Vision & Hearing Screenings</li>
                <li>Asthma Treatment</li>
                <li>Adolescent Counseling</li>
                <li>Sex Education</li>
                <li>Immunizations/Vaccinations</li>
                <li>School & Physical Exams</li>
              </ul>
            </div>
          </div>

          <ProgramContactSidebar 
            phoneDisplay="662-741-8800"
            phoneHref="tel:6627418800"
          />

        </section>
      </div>

    </main>
  );
}
