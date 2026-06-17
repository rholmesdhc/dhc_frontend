import React from 'react';
import styles from './BehaviorHealth.module.css';

export const metadata = {
  title: 'Behavioral Health | Delta Health Center',
  description: 'Comprehensive behavioral health services and treatment for conditions prevalent in the Mississippi Delta Region.',
};

export default function BehaviorHealth() {
  return (
    <main>
      <div className={styles.heroWrapper}>
        <section className={styles.hero}>
          <img 
            src="/images/behavior_health_hero_woman.png" 
            alt="Behavioral Health Hero" 
            className={styles.heroBg} 
            style={{ objectPosition: 'center 20%' }}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Behavioral Health</h1>
            <p className={styles.heroSubtitle}>
              Compassionate mental wellness care dedicated to supporting and healing our community.
            </p>
            <br />
            <p className={`${styles.heroSubtitle} ${styles.directorLabel}`}>Behavioral Health Director: Dr. Nadia Bethley</p>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          {/* Left Column: Description & Services */}
          <div className={styles.mainContent}>
            <h2 className={styles.orangeHeading}>Dedicated Care for the Delta Region</h2>
            <p className={styles.textParagraph}>
              At Delta Health Center, we recognize the unique socioeconomic and environmental factors that impact mental health in the Mississippi Delta. Our behavioral health specialists are trained to provide sensitive, trauma-informed care for the most prevalent conditions affecting our communities today. You are not alone, and healing is possible.
            </p>

            <h2 className={styles.orangeHeading}>Conditions We Treat</h2>
            <ul className={styles.featuresList}>
              <li>
                <strong>Major Depressive Disorder:</strong> Depression is more than just feeling sad; it is a pervasive condition that affects how you think, feel, and handle daily activities. Economic stressors and isolation in rural areas can heavily exacerbate these symptoms.
              </li>
              <li>
                <strong>Generalized Anxiety Disorder:</strong> Chronic, exaggerated worry and tension that disrupts everyday life is incredibly common. Our team provides tools to help you regain control over racing thoughts and severe physical stress responses.
              </li>
              <li>
                <strong>Substance Use & Dependency:</strong> Substance dependency, particularly involving alcohol and opioids, is a critical health challenge in our region. We view addiction as a medical condition requiring compassionate, evidence-based intervention.
              </li>
              <li>
                <strong>Post-Traumatic Stress Disorder (PTSD):</strong> Trauma can leave a lasting emotional imprint that makes daily living difficult. We practice trauma-informed care to help patients process traumatic events safely and respectfully.
              </li>
            </ul>
          </div>

          {/* Right Column: Info Cards */}
          <div>
            <div className={styles.infoCard}>
              <h3>What to Expect</h3>
              <p>
                Our services include Cognitive Behavioral Therapy (CBT), Medication Management, Support Group Integration, and Trauma-Focused Therapies (including EMDR).
              </p>
              <p>
                We work collaboratively with you to design a personalized treatment plan focused on your emotional, psychological, and social well-being.
              </p>
            </div>

            <div className={styles.infoCard} style={{ marginTop: '30px', borderLeftColor: 'var(--color-secondary)' }}>
              <h3>Location & Hours</h3>
              <p>
                Delta Health Center, Inc.<br/>
                702 Martin Luther King Road<br/>
                Post Office Box 900<br/>
                Mound Bayou, MS 38762
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Monday - Friday:</strong> 8:00am - 5:00pm
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Take the First Step?</h2>
          <p className={styles.ctaText}>
            Our compassionate mental health professionals are here to support you. Do not let distance or adversity prevent you from seeking the care you deserve.
          </p>
          <a href="tel:6627418800" className={styles.ctaButton}>
            Call Us at 662.741.8800
          </a>
          <p style={{ marginTop: '20px', fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
            If you are in immediate crisis, please call the National Suicide Prevention Lifeline at <strong>988</strong> immediately.
          </p>
        </div>
      </div>
    </main>
  );
}
