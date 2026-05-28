import React from 'react';
import Link from 'next/link';
import styles from './MaternalHealth.module.css';
import ProgramContactSidebar from '../../components/ProgramContactSidebar';

export const metadata = {
  title: 'Maternal Health | Delta Health Center',
  description: 'Delta Health Center provides comprehensive, compassionate maternal health services, from prenatal care to postpartum support.',
};

export default function MaternalHealthPage() {
  return (
    <main className={styles.pageWrapper}>
      
      {/* Hero Banner */}
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/maternal_health_hero.png" alt="Caring healthcare provider consulting with an expectant mother" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Maternal Health</h1>
            <p className={styles.heroSubtitle}>
              Compassionate, comprehensive care for you and your baby—before, during, and after pregnancy.
            </p>
            <br />
            <p className={styles.heroSubtitle}>
              Maternal Health Director - Sharrika Smith
            </p>
          </div>
        </section>
      </div>

      <div className="container">
        <div className="program-layout-grid">
          
          {/* Left Content Column */}
          <div className={styles.leftColumn}>
            <p className={styles.textParagraph}>
              At Delta Health Center, we are deeply committed to ensuring that every mother and baby in the Mississippi Delta has access to exceptional healthcare. We understand that navigating pregnancy and early motherhood can be an overwhelming journey, which is why our dedicated maternal health team provides a warm, trusting, and highly supportive environment.
            </p>
            <p className={styles.textParagraph}>
              Our board-certified physicians, nurse practitioners, and support staff work collaboratively to monitor the health of both mother and child. From early prenatal screenings to comprehensive postpartum recovery, we prioritize education, preventative care, and personalized birth planning to ensure the safest possible outcomes for your growing family.
            </p>

            <h3 className={styles.servicesHeading}>Our Maternal Health Services</h3>
            <div className={styles.servicesListContainer}>
              <ul>
                <li>Comprehensive Prenatal Care</li>
                <li>Routine Ultrasounds & Screenings</li>
                <li>High-Risk Pregnancy Management</li>
                <li>Family Planning & Contraception</li>
                <li>Postpartum Support & Recovery</li>
                <li>Lactation Consulting & Education</li>
                <li>Gestational Diabetes Management</li>
                <li>Newborn Care Guidance</li>
              </ul>
            </div>
            
            <p className={styles.textParagraph} style={{ marginTop: '30px' }}>
              We also seamlessly integrate with our WIC (Women, Infants, and Children) program to provide critical nutritional support. Whether you are planning a family, currently expecting, or navigating the early stages of motherhood, Delta Health Center is here to care for you.
            </p>
          </div>

          <ProgramContactSidebar />

        </div>
      </div>

    </main>
  );
}
