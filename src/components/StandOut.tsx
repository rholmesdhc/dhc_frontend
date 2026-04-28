import React from 'react';
import styles from './StandOut.module.css';

const StandOut = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        {/* Left Content */}
        <div className={styles.content}>
          <h2 className={styles.title}>How do we stand out?</h2>
          <p className={styles.subtitle}>
            Delta Health Center offers personalized, high-quality care for you and your family, right in the heart of the Mississippi Delta.
          </p>

          <div className={styles.featureList}>
            {/* Feature 1 */}
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <span className={styles.featureText}>Accredited behavioral & mental health services.</span>
            </div>

            {/* Feature 2 */}
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
              </div>
              <span className={styles.featureText}>Provide a comprehensive range of dental services.</span>
            </div>

            {/* Feature 3 */}
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </div>
              <span className={styles.featureText}>On-site pharmacy for patients to pick up medications.</span>
            </div>

            {/* Feature 4 */}
            <div className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <span className={styles.featureText}>Full range of obstetrical and gynecology services for women in all stages of life.</span>
            </div>
          </div>

          <a href="#services" className={`btn btn-primary ${styles.btn}`}>View our Services</a>
        </div>

        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <img src="/images/elderly_couple.png" alt="Elderly African American couple smiling" className={styles.image} />
        </div>

      </div>
    </section>
  );
};

export default StandOut;
