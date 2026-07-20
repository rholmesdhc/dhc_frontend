import React from 'react';
import styles from './WellnessExams.module.css';
import ProgramContactSidebar from '../../components/ProgramContactSidebar';

export const metadata = {
  title: 'Annual Wellness Visits | Delta Health Center',
  description: 'Annual wellness exams and preventative health services for the whole family.',
};

export default function WellnessExams() {
  return (
    <main className={styles.pageWrapper}>
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/wellness_exams_hero.png" alt="Wellness Exams Hero" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Annual Wellness Visits</h1>
            <p className={styles.heroSubtitle}>Program Director: Tara Gallion</p>
          </div>
        </section>
      </div>

      <div className="container" style={{ marginTop: '40px', marginBottom: '60px' }}>
        <div className="program-layout-grid">
          <div className={styles.textContent}>
            <h2 className={styles.mainHeading}>Annual Wellness Services</h2>
            <p className={styles.introText}>
              Delta Health Center provides comprehensive annual wellness exams and preventative health services. 
              Our care ensures your family&apos;s physical and developmental health across the following essential categories:
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

          <ProgramContactSidebar 
            title="Annual Wellness Visits"
            description={
              <>
                <strong>Program Director:</strong> Tara Gallion<br/><br/>
                Ready to take control of your health? Schedule a comprehensive wellness consultation with our team today. We will assess your current health status and work with you to create a personalized action plan.
              </>
            }
            hideLocationHours={true}
          />
        </div>
      </div>
    </main>
  );
}
