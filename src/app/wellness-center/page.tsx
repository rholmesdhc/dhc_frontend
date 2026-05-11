import React from 'react';
import Link from 'next/link';
import styles from './WellnessCenter.module.css';

export const metadata = {
  title: 'Wellness Center | Delta Health Center',
  description: 'Delta Health Center offers comprehensive wellness and fitness programs designed to prevent chronic diseases and promote a healthy lifestyle.',
};

export default function WellnessCenterPage() {
  return (
    <main className={styles.pageWrapper}>
      
      {/* Hero Banner */}
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/wellness_hero.png" alt="Bright modern wellness center" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Wellness Center</h1>
            <p className={styles.heroSubtitle}>
              Empowering you to live a healthier, longer, and more vibrant life through holistic care and active lifestyle management.
            </p>
          </div>
        </section>
      </div>

      <div className="container">
        <div className={styles.contentGrid}>
          
          {/* Left Content Column */}
          <div className={styles.leftColumn}>
            <p className={styles.textParagraph}>
              At Delta Health Center, we believe that true healthcare goes far beyond treating illness—it’s about nurturing wellness and preventing disease before it starts. Our dedicated Wellness Center is designed to provide you with the tools, education, and support you need to achieve your personal health goals.
            </p>
            <p className={styles.textParagraph}>
              Whether you are looking to manage a chronic condition like diabetes or hypertension, improve your cardiovascular fitness, or simply adopt a healthier diet, our multidisciplinary team of clinicians, dietitians, and wellness coaches are here to partner with you every step of the way. We focus on treating the whole person, integrating physical fitness, nutritional counseling, and behavioral support into a unified approach to your well-being.
            </p>

            <h3 className={styles.servicesHeading}>Core Wellness Programs</h3>
            <div className={styles.servicesListContainer}>
              <ul>
                <li>Nutritional Counseling & Diet Planning</li>
                <li>Diabetes Prevention & Education</li>
                <li>Hypertension & Heart Health Management</li>
                <li>Supervised Fitness & Mobility Coaching</li>
                <li>Weight Management Programs</li>
                <li>Stress Reduction & Behavioral Wellness</li>
                <li>Senior Fitness & Fall Prevention</li>
                <li>Smoking Cessation Support</li>
              </ul>
            </div>
            
            <p className={styles.textParagraph} style={{ marginTop: '30px' }}>
              We are committed to making wellness accessible to everyone in the Mississippi Delta. Our programs are tailored to fit your unique lifestyle, physical abilities, and medical needs, ensuring a safe and effective path to better health.
            </p>
          </div>

          {/* Right Action Column */}
          <div className={styles.rightColumn}>
            <div className={styles.infoCard}>
              <h3>Start Your Journey</h3>
              <p>
                Ready to take control of your health? Schedule a comprehensive wellness consultation with our team today. We will assess your current health status and work with you to create a personalized action plan.
              </p>
              <a href="tel:6627418800" className={styles.callBtn}>Call (662) 741-8800</a>
            </div>

            <div className={styles.infoCard} style={{ borderLeftColor: 'var(--color-secondary)' }}>
              <h3>Location & Hours</h3>
              <p>
                Delta Health Center, Inc.<br/>
                702 Martin Luther King Road<br/>
                Post Office Box 900<br/>
                Mound Bayou, MS 38762
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Monday - Friday</strong><br/>
                8:00 AM - 5:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
