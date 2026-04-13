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
              Well-trained, licensed phlebotomists, lab technicians, and other laboratory staff at Delta Health Center understand the importance of testing. Samples of blood, urine, or body tissues are taken to identify substances within body fluids, assist in organ evaluation, aid in disease management, and establish the nature of conditions and diseases. Both simple and complex tests are performed.
            </p>

            <p className={styles.textParagraph}>
              At Delta Health Center, x-rays are performed using state-of-the-art equipment that helps cater to the needs of individuals. Our digital systems minimize wait time and allow for electronic copies and digital downloads to be sent to pathologists and other specialists within minutes.
            </p>

            <p className={styles.textParagraph}>
              X-ray technicians are certified by the Mississippi Society of Radiologic Technologists Education Foundation. X-rays pass easily through air and soft tissue of the body. When they encounter more dense material, such as a tumor, bone, or a metal fragment, they are stopped. Diagnostic X-rays are performed by positioning the part of the body to be examined between a focused beam of X-rays and a plate containing film. This process is painless.
            </p>

            <h2 className={styles.servicesHeading}>LABORATORY <span>&</span> X-RAYS</h2>
            
            <div className={styles.servicesListContainer}>
              <ul>
                <li>Internal Lab Testing</li>
                <li>External Lab Testing</li>
                <li>HIV/AIDS Testing</li>
                <li>Urinalysis</li>
                <li>Vaccines Lipid Panel</li>
                <li>Strep Testing</li>
                <li>Venipuncture</li>
                <li>Pregnancy & OBGYN Testing</li>
              </ul>
            </div>
          </div>

          {/* Right Logo Column */}
          <div className={styles.rightColumn}>
            <div className={styles.sidebarGraphic}>
              <img 
                src="/images/dhc_logo_official.png" 
                alt="Delta Health Center Logo" 
                className={styles.logoImage} 
              />
            </div>
          </div>

        </section>
      </div>

    </main>
  );
}
