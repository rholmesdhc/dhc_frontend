import React from 'react';
import styles from './WellnessExams.module.css';
import ProgramContactSidebar from '../../components/ProgramContactSidebar';

export const metadata = {
  title: 'Annual Wellness Visits | Delta Health Center',
  description: 'Early and Periodic Screening, Diagnostic, and Treatment (EPSDT) wellness exams and services.',
};

export default function WellnessExams() {
  return (
    <main>
      <div className={styles.heroWrapper}>
        <section className={styles.hero}>
          <img src="/images/provider_hero.png" alt="Wellness Exams Hero" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Annual Wellness Visits</h1>
            <br />
            <p className={styles.heroSubtitle}>Annual Wellness Program Director - Tara Gallion</p>
          </div>
        </section>
      </div>

      <div className="container" style={{ marginTop: '40px', marginBottom: '60px' }}>
        <div className="program-layout-grid">
          <div className={styles.textContent}>
            <h2 className={styles.mainHeading}>EPSDT Services</h2>
            <p className={styles.introText}>
              Delta Health Center provides comprehensive Early and Periodic Screening, Diagnostic, and Treatment (EPSDT) services for Medicaid enrollees. 
              Our medically necessary care ensures your family&apos;s physical and developmental health across the following essential categories:
            </p>

            <div className={styles.serviceGrid}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Screening Services</h3>
                <p className={styles.serviceText}>Comprehensive screenings, including:</p>
                <ul className={styles.listItems}>
                  <li>Health and Developmental History</li>
                  <li>Complete Unclothed Physical Exam (only performed on newborns)</li>
                  <li>Appropriate Immunizations/Vaccinations (ACIP guidelines)</li>
                  <li>Laboratory Tests (including lead toxicity screening)</li>
                  <li>Health Education and Preventative Guidance</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Vision Services</h3>
                <p className={styles.serviceText}>
                  We only provide basic vision screenings. We do not perform diagnostic or therapeutic vision exams. Patients needing intensive testing are referred to specialists for further evaluation or eyeglasses if needed.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Dental Services</h3>
                <p className={styles.serviceText}>
                  Comprehensive dental access including the relief of pain, restoration, and routine maintenance elements—not limited strictly to emergencies.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Hearing Services</h3>
                <p className={styles.serviceText}>
                  We only provide basic hearing screenings. We do not perform diagnostic or therapeutic hearing exams. Patients needing intensive testing are referred to specialists for further evaluation or hearing aids if needed.
                </p>
              </div>

              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Diagnostic & Treatment Services</h3>
                <p className={styles.serviceText}>
                  When a screening indicates a need for further evaluation, complete diagnostic services and necessary treatments are swiftly coordinated, covering all physical and mental conditions mapped during screenings.
                </p>
              </div>

            </div>
          </div>

          <ProgramContactSidebar />
        </div>
      </div>
    </main>
  );
}
