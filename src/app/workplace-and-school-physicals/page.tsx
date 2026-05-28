import React from 'react';
import styles from './WorkplacePhysicals.module.css';
import ProgramContactSidebar from '../../components/ProgramContactSidebar';

export const metadata = {
  title: 'Workplace & School Physicals | Delta Health Center',
  description: 'Delta Health Center offers comprehensive physical examinations for school, sports, pre-employment, and DOT requirements.',
};

export default function WorkplaceAndSchoolPhysicals() {
  return (
    <>
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/provider_hero.png" alt="Workplace & School Physicals Hero" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Workplace & School Physicals</h1>
            <p className={styles.heroSubtitle}>Comprehensive Examinations for All Your Needs</p>
          </div>
        </section>
      </div>

      <section className="container">
        <div className="program-layout-grid">
          <div>
            <div className={styles.contentSection}>
          <p className={styles.paragraph}>
            Whether you are starting a new job, going back to school, or preparing for the sports season, Delta Health Center provides comprehensive physical examinations to ensure you are healthy and ready to go. Our experienced providers offer a variety of physicals tailored to meet specific requirements.
          </p>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.headingWrapper}>
             <h2 className={styles.heading}>Types of Physicals Offered</h2>
          </div>
          
          <ul className={styles.list}>
            <li><strong>Pre-Employment Physicals:</strong> Ensure you are physically capable of performing the duties required for a new job.</li>
            <li><strong>D.O.T. Physicals:</strong> Department of Transportation certified physicals for commercial drivers.</li>
            <li><strong>School Physicals:</strong> Fulfill school district requirements for enrollment and student health tracking.</li>
            <li><strong>Sports Physicals:</strong> Prepare for the upcoming athletic season and ensure safe participation.</li>
            <li><strong>College/University Physicals:</strong> Meet the health prerequisites for your higher education institution.</li>
            <li><strong>Camp Physicals:</strong> Comprehensive health reviews for summer programs and camps.</li>
          </ul>

          <p className={styles.paragraph}>
            We also offer accompanying services such as drug screenings, alcohol testing, and necessary immunizations/vaccinations to complete your physical requirements.
          </p>

          <p className={styles.paragraph}>
            <strong>Action Step:</strong> Please contact your nearest Delta Health Center clinic to schedule your physical. Be sure to bring any specific forms provided by your employer, school, or organization.
          </p>
        </div>
          </div>
          <ProgramContactSidebar />
        </div>
      </section>
    </>
  );
}
