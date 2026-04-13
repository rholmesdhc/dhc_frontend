import React from 'react';
import Link from 'next/link';
import styles from './Pharmacy.module.css';

export const metadata = {
  title: 'Pharmacy | Delta Health Center',
  description: 'Delta Health Center Pharmacy provides affordable, essential medications and counseling through the 340B Drug Discount Program.',
};

export default function PharmacyPage() {
  return (
    <main className={styles.pageWrapper}>
      
      {/* Banner Section */}
      <div className="container">
        <section className={styles.hero}>
          <img 
            src="/images/provider_hero.png" 
            alt="Pharmacy Banner" 
            className={styles.heroBg} 
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>PHARMACY</h1>
            <p className={styles.heroSubtitle}>Dispensing needed Medications.</p>
          </div>
        </section>
      </div>

      {/* Top Graphic Section (Pharmacists Cutout & Divider) */}
      <section className={styles.topSection}>
        <div className="container" style={{ textAlign: 'center' }}>
          <img 
            src="/images/pharmacy/pharmacists_cutout.png" 
            alt="DHC Pharmacists and Technicians" 
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
              Linking health sciences with chemicals sciences, our dedicated pharmacists and pharmacy technicians take special care to dispense needed medications to DHC's patients at very low prices. Our pharmacists, members of the American Pharmacists Association, provide education to ensure the safest and most effective use of pharmaceutical drugs. Pharmacy technicians are certified by the state of Mississippi and nationwide.
            </p>

            <p className={styles.textParagraph}>
              The 340B Drug Discount Program is a federal program created in 1992 that requires drug manufacturers to provide outpatient drugs to eligible health care organizations and covered entities at significantly reduced prices. The intent of the program is to allow covered entities to stretch scarce federal resources as far as possible, reaching more eligible patients and providing more comprehensive services.
            </p>

            <p className={styles.textParagraph}>
              Maintaining services and lowering medication costs for patients is consistent with the purpose of the program, which is named for the section authorizing it in the Public Health Service Act (PHSA)[4][5][6] It was enacted by Congress as part of a larger bill signed into law by President George HW Bush. DHC's pharmacy is located at Dr. H. Jack Geiger Medical Center in Mound Bayou and are distributed to all centers.
            </p>

            <h2 className={styles.servicesHeading}>PHARMACY</h2>
            
            <div className={styles.servicesListContainer}>
              <ul>
                <li>On-Staff Pharmacists</li>
                <li>Medication Counseling</li>
                <li>Discounted Medication Drug Lists</li>
                <li>340-B Programs</li>
              </ul>
            </div>

            <Link href="/find-a-provider" className={styles.providerLink}>
              CLICK HERE TO MEET OUR PHARMACISTS
            </Link>
          </div>

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
