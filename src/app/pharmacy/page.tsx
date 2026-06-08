import React from 'react';
import Link from 'next/link';
import styles from './Pharmacy.module.css';
import ProgramContactSidebar from '../../components/ProgramContactSidebar';

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
            <br />
            <p className={styles.heroSubtitle}>Pharmacy Director - Remonica Jackson PharmD</p>
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

            <Link href="/find-a-provider?specialty=Pharmacy" className={styles.providerLink}>
              CLICK HERE TO MEET OUR PHARMACISTS
            </Link>
          </div>

          <ProgramContactSidebar 
            title="Prescription Refills & Appointments" 
            description="Need to request a prescription refill or have questions about your medication? Contact our pharmacy department directly or schedule a consultation." 
            phoneDisplay="662-741-8800" 
            phoneHref="tel:6627418800" 
            customLocations={[
              {
                name: "Mound Bayou Clinic (Pharmacy)",
                address: (
                  <>
                    Delta Health Center<br />
                    702 Martin Luther King Road<br />
                    Mound Bayou, MS 38762
                  </>
                ),
                hours: (
                  <>
                    <strong>Monday - Thursday:</strong> 8:00 AM - 6:00 PM<br />
                    <strong>Friday:</strong> 8:00 AM - 12:00 PM
                  </>
                )
              },
              {
                name: "Indianola Clinic (Pharmacy)",
                address: (
                  <>
                    Delta Health Center<br />
                    118 Front Avenue<br />
                    Indianola, MS 38751
                  </>
                ),
                hours: (
                  <>
                    <strong>Monday - Thursday:</strong> 7:30 AM - 5:30 PM<br />
                    <strong>Friday:</strong> 7:30 AM - 11:30 AM
                  </>
                )
              }
            ]}
          />

        </section>
      </div>

    </main>
  );
}
