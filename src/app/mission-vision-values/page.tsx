import React from 'react';
import styles from './MissionVisionValues.module.css';
import Newsletter from '../../components/Newsletter';

export const metadata = {
  title: 'Mission, Vision, & Values | Delta Health Center',
  description: 'Our mission is to provide high-quality, equitable, and accessible health services for our communities.',
};

export default function MissionVisionValues() {
  return (
    <>
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/provider_hero.png" alt="Mission Vision Values Hero" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Mission, Vision, & Values</h1>
            <p className={styles.heroSubtitle}>Get To Know Us</p>
          </div>
        </section>
      </div>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Mission */}
            <div className={styles.card}>
              <div className={styles.iconBox} style={{ background: 'var(--color-primary)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h2 className={styles.cardTitle}>Our Mission</h2>
              <p className={styles.cardText}>
                Delta Health Center provides high-quality, equitable, and accessible health services for our communities.
              </p>
            </div>

            {/* Vision */}
            <div className={styles.card}>
              <div className={styles.iconBox} style={{ background: 'var(--color-secondary)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
              </div>
              <h2 className={styles.cardTitle}>Our Vision</h2>
              <p className={styles.cardText}>
                Delta Health Center is recognized within the community as a model of excellence, innovation, and inclusivity.
              </p>
            </div>
          </div>

          <div className={styles.valuesSection}>
            <h2 className={styles.valuesTitle}>Our Core Values (C.A.R.E.S.)</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueItem}>
                <h3 className={styles.valueLabel}>Compassion</h3>
                <p className={styles.valueDesc}>We are kind, considerate, and caring.</p>
              </div>
              <div className={styles.valueItem}>
                <h3 className={styles.valueLabel}>Accountability</h3>
                <p className={styles.valueDesc}>We take ownership for each person’s experiences.</p>
              </div>
              <div className={styles.valueItem}>
                <h3 className={styles.valueLabel}>Respect</h3>
                <p className={styles.valueDesc}>We treat each person with dignity.</p>
              </div>
              <div className={styles.valueItem}>
                <h3 className={styles.valueLabel}>Excellence</h3>
                <p className={styles.valueDesc}>We seek the highest level of performance in all we do.</p>
              </div>
              <div className={styles.valueItem}>
                <h3 className={styles.valueLabel}>Stewardship</h3>
                <p className={styles.valueDesc}>We strive for racial and health equity, diversity, and inclusion by delivering quality health care and access for all.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
