import React from 'react';
import styles from './SocialServices.module.css';

export const metadata = {
  title: 'Social Services | Delta Health Center',
  description: 'Delta Health Center offers social services, counseling, and daily referrals to essential resources to improve quality of life.',
};

export default function SocialServices() {
  return (
    <>
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/provider_hero.png" alt="Social Services Hero" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Social Services</h1>
            <p className={styles.heroSubtitle}>Advocating for Patients and Improving Quality of Life</p>
          </div>
        </section>
      </div>

      <section className={styles.container}>
        <div className={styles.contentSection}>
          <p className={styles.paragraph}>
            Social workers at Delta Health Center (DHC) serve as patient advocates. The licensed social workers aim to improve the quality of life for individuals, couples, and families by:
          </p>
          
          <ul className={styles.list}>
            <li>Providing and arranging counseling and education.</li>
            <li>Identifying and addressing basic necessities.</li>
            <li>Making daily referrals to essential resources.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.headingWrapper}>
            <h2 className={styles.heading}>Social Services Provided</h2>
          </div>
          
          <p className={styles.paragraph}>
            The following services are available through the Social Services program:
          </p>
          
          <ul className={styles.list}>
            <li>Health, Housing, Clothing, and Food assistance</li>
            <li>Health Care Coverage & Prescription Assistance</li>
            <li>Domestic Violence support</li>
            <li>Medicaid Specialists for uninsured and under-insured patients</li>
            <li>Health Education & Other Programs</li>
            <li>Buckle Down Project (car seat safety)</li>
            <li>Alcohol & Drug Treatment (In-patient and Out-patient)</li>
            <li>Crisis Intervention</li>
            <li>Case Management Services</li>
          </ul>
        </div>
      </section>
    </>
  );
}
