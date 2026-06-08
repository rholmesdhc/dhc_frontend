import React from 'react';
import styles from './LaboratoryXRays.module.css';

export const metadata = {
  title: 'Laboratory & X-Rays | Delta Health Center',
  description: 'Delta Health Center provides state-of-the-art laboratory and diagnostic X-ray services with certified technicians.',
};

export default function LaboratoryXRaysPage() {
  return (
    <main className={styles.pageWrapper}>
      
      {/* Banner Section */}
      <div className="container">
        <section className={styles.hero}>
          <img 
            src="/images/provider_hero.png" 
            alt="Laboratory & X-Rays Banner" 
            className={styles.heroBg} 
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>LABORATORY <span>&</span> X-RAYS</h1>
            <p className={styles.heroSubtitle}>Understanding the importance of Testing.</p>
          </div>
        </section>
      </div>

      {/* Top Graphic Section (Microscope Cutout & Divider) */}
      <section className={styles.topSection}>
        <div className="container">
          <img 
            src="/images/laboratory-x-rays/microscope_cutout.png" 
            alt="Modern Laboratory Microscope" 
            className={styles.heroCutout} 
          />
        </div>
        <hr className={styles.blueDivider} />
      </section>

      {/* Main Content Grid */}
      <div className="container">
        <section className={styles.contentGrid}>
          
          {/* Left Text Column */}
          <div className={styles.leftColumn}>
            <p className={styles.textParagraph}>
              Well trained, certified phlebotomists and licensed staff members at Delta Health Center perform a broad range of laboratory testing. Delta Health Center offers many internal CLIA waived laboratory tests as well as more advanced external laboratory testing. Routine laboratory testing aids in the diagnosis, maintenance and selection of appropriate treatment in many acute as well as chronic health conditions.
            </p>

            <p className={styles.textParagraph}>
              At Delta Health Center, x-rays are performed using state-of-the-art equipment that helps cater to the needs of our patients. Our digital systems minimize wait time and allow for easier access and more affordable solutions in the event x-rays are needed to manage care.
            </p>

            <h2 className={styles.servicesHeading}>LABORATORY <span>&</span> X-RAYS</h2>
            
            <div className={styles.servicesListContainer}>
              <ul>
                <li>Internal Lab Testing</li>
                <li>External Lab Testing</li>
              </ul>
            </div>
          </div>

        </section>
      </div>

    </main>
  );
}
