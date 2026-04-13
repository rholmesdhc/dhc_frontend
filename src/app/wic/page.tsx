import React from 'react';
import styles from './WIC.module.css';

export const metadata = {
  title: 'WIC Services | Delta Health Center',
  description: 'WIC is a special supplemental food program for women, infants, and children provided by Delta Health Center.',
};

export default function WICPage() {
  return (
    <main className={styles.pageWrapper}>
      
      {/* Banner Section */}
      <div className="container">
        <section className={styles.hero}>
          <img 
            src="/images/provider_hero.png" 
            alt="WIC Banner" 
            className={styles.heroBg} 
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>WIC</h1>
            <p className={styles.heroSubtitle}>Special Supplemental Food Program.</p>
          </div>
        </section>
      </div>

      {/* Top Graphic Section (Grocery Cutout & Divider) */}
      <section className={styles.topSection}>
        <div className="container" style={{ textAlign: 'center' }}>
          <img 
            src="/images/wic/groceries_cutout.png" 
            alt="Groceries for WIC Program" 
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
              Delta Health Center has a contract with the Mississippi State Department of Health to provide Women, Infant, and Children (WIC) Services. WIC is a federal program through the United States Department of Agriculture's Food and Nutrition Services.
            </p>

            <p className={styles.textParagraph}>
              It is a special supplemental food program for pregnant, breastfeeding, and post-partum women, infants, and children under five years of age. WIC helps you and your baby get healthy foods and healthy advice in the first years of life. Delta Health Center provides WIC Certification and Nutrition Education at our Mound Bayou location.
            </p>
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
