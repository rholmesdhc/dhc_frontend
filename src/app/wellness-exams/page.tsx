import React from 'react';
import styles from './WellnessExams.module.css';

export const metadata = {
  title: 'Wellness Exams | Delta Health Center',
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
            <h1 className={styles.heroTitle}>Wellness Exams</h1>
            <p className={styles.heroSubtitle}>
              Early and Periodic Screening, Diagnostic, and Treatment (EPSDT) services dedicated to comprehensive preventative care.
            </p>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <div className={styles.contentSplit}>
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
                  <li>Complete Unclothed Physical Exam</li>
                  <li>Appropriate Immunizations/Vaccinations (ACIP guidelines)</li>
                  <li>Laboratory Tests (including lead toxicity screening)</li>
                  <li>Health Education and Preventative Guidance</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>Vision Services</h3>
                <p className={styles.serviceText}>
                  Diagnosis and treatment for vision defects, including the provision of eyeglasses. Our care follows a rigorous and tailored periodicity schedule.
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
                  Complete diagnosis and therapeutic treatment for hearing defects, ensuring long-term auditory and communication health, including hearing aid support.
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

          <div className={styles.imageContent}>
            <img 
              src="/images/provider_hero.png" 
              alt="Medical Professional and Family" 
              className={styles.featuredImage}
            />
          </div>
        </div>

        <div className={styles.contactBanner}>
          <h2 className={styles.contactTitle}>Contact Us for an Appointment</h2>
          <div className={styles.contactDetails}>
            <p><strong>Primary Contact:</strong> 662.741.8800</p>
            <p><strong>Location:</strong><br/>
              Delta Health Center, Inc.<br/>
              702 Martin Luther King Road<br/>
              Post Office Box 900<br/>
              Mound Bayou, MS 38762
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
