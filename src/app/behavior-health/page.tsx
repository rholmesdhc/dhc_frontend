import React from 'react';
import styles from './BehaviorHealth.module.css';

export const metadata = {
  title: 'Behavior Health | Delta Health Center',
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
            <h1 className={styles.heroTitle}>Behavior Health</h1>
            <p className={styles.heroSubtitle}>
              Compassionate mental wellness care dedicated to supporting and healing our community.
            </p>
            <br />
            <p className={styles.heroSubtitle}>Behavior Health Director: Dr. Nadia Bethley</p>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <section className={styles.introSection}>
          <h2 className={styles.introTitle}>Dedicated Care for the Delta Region</h2>
          <p className={styles.introText}>
            At Delta Health Center, we recognize the unique socioeconomic and environmental factors that impact mental health in the Mississippi Delta. Our behavioral health specialists are trained to provide sensitive, trauma-informed care for the most prevalent conditions affecting our communities today. You are not alone, and healing is possible.
          </p>
        </section>

        <div className={styles.grid}>
          <div className={styles.conditionCard}>
            <h3 className={styles.conditionTitle}>Major Depressive Disorder</h3>
            <p className={styles.conditionDesc}>
              Depression is more than just feeling sad; it is a pervasive condition that affects how you think, feel, and handle daily activities. Economic stressors and isolation in rural areas can heavily exacerbate these symptoms.
            </p>
            <ul className={styles.treatmentList}>
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Medication Management</li>
              <li>Support Group Integration</li>
            </ul>
          </div>

          <div className={styles.conditionCard}>
            <h3 className={styles.conditionTitle}>Generalized Anxiety Disorder</h3>
            <p className={styles.conditionDesc}>
              Chronic, exaggerated worry and tension that disrupts everyday life is incredibly common. Our team provides tools to help you regain control over racing thoughts and severe physical stress responses.
            </p>
            <ul className={styles.treatmentList}>
              <li>Stress Management Techniques</li>
              <li>Mindfulness and Relaxation Training</li>
              <li>Targeted Therapy Sessions</li>
            </ul>
          </div>

          <div className={styles.conditionCard}>
            <h3 className={styles.conditionTitle}>Substance Use & Dependency</h3>
            <p className={styles.conditionDesc}>
              Substance dependency, particularly involving alcohol and opioids, is a critical health challenge in our region. We view addiction as a medical condition requiring compassionate, evidence-based intervention.
            </p>
            <ul className={styles.treatmentList}>
              <li>Addiction Counseling</li>
              <li>Medication-Assisted Treatment (MAT)</li>
              <li>Relapse Prevention Planning</li>
            </ul>
          </div>

          <div className={styles.conditionCard}>
            <h3 className={styles.conditionTitle}>Post-Traumatic Stress Disorder (PTSD)</h3>
            <p className={styles.conditionDesc}>
              Trauma can leave a lasting emotional imprint that makes daily living difficult. We practice trauma-informed care to help patients process traumatic events safely and respectfully.
            </p>
            <ul className={styles.treatmentList}>
              <li>Trauma-Focused Therapies</li>
              <li>EMDR Therapy Options</li>
              <li>Continuous Emotional Support</li>
            </ul>
          </div>
        </div>

        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Take the First Step Toward Wellness</h2>
          <p className={styles.ctaText}>
            Our compassionate mental health professionals are here to support you. Do not let distance or adversity prevent you from seeking the care you deserve. 
          </p>
          <a href="tel:6627418800" className={styles.contactBtn}>
            Call Us at 662.741.8800
          </a>
          <p className={styles.crisisLine}>
            If you are in immediate crisis, please call the National Suicide Prevention Lifeline at <strong>988</strong> immediately.
          </p>
        </section>
      </div>
    </main>
  );
}
