"use client";

import React from 'react';
import Link from 'next/link';
import styles from './DiabetesClinic.module.css';

export default function DiabetesClinicPage() {
  return (
    <main className={styles.pageWrapper}>
      
      {/* Banner Section */}
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/provider_hero.png" alt="Diabetes Clinic Banner" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Diabetes Clinic</h1>
            <p className={styles.heroSubtitle}>Taking control of this illness.</p>
          </div>
        </section>
      </div>

      {/* Top Graphic Section (Cutout & Divider) */}
      <section className={styles.topSection}>
        <div className="container">
          <img 
            src="/images/diabetes/Diabetes_Clinic_Fruit_Tray_Inside_Page_Body_Photo_HORIZONTAL.png" 
            alt="Glucose Monitor and healthy food portions" 
            className={styles.heroCutout} 
          />
        </div>
        <hr className={styles.blueDivider} />
      </section>

      {/* Main Content Grid */}
      <div className="container">
        <section className={styles.contentGrid}>
          
          {/* Left Text & Services Column */}
          <div className={styles.leftColumn}>
            <p className={styles.textParagraph}>
              Millions of adults and children have been diagnosed with diabetes. Delta Health Center helps patients take control of this serious illness. Necessary support and education of risk factors associated with diabetes such as kidney and heart disease, stroke, nerve problems, amputation, and depression are provided by:
            </p>
            
            <ul className={styles.supportTeamList}>
              <li>Certified Diabetes Educators</li>
              <li>Dietician</li>
              <li>Social Workers</li>
            </ul>

            <p className={styles.textParagraph}>
              Delta Health Center offers a Diabetes Self-Management Workshop for people diagnosed with diabetes. A new group begins on the first Monday of each month. See a Delta health Center Provider for a referral. Also, funded by a grant from the Mississippi Department of Health, Delta Health Center offers a Diabetes Prevention Program for patients who meet the eligibility risk factors for diabetes. Contact a Delta Health Center Provider to see if you are eligible for a referral.
            </p>

            <h2 className={styles.servicesHeading}>DIABETIC SERVICES</h2>
            
            <div className={styles.servicesListContainer}>
              <ul>
                <li>
                  Counseling <span style={{color: 'var(--color-accent)'}}>&</span> Education
                </li>
                <li>Gestational Diabetes for Pregnant Women</li>
                <li>Insulin Therapy</li>
                <li>Glucose Monitoring</li>
                <li>
                  Nutrition Counseling, Classes, <span style={{color: 'var(--color-accent)'}}>&</span> Recipes
                </li>
                <li>
                  Diabetes Self-Management Workshops
                  <span className={styles.orangeSubtext}>Starting August 1, 2023</span>
                </li>
                <li>
                  Diabetes Prevention Program
                  <span className={styles.orangeSubtext}>Starting August 1, 2023</span>
                </li>
                <li>
                  The Delta GREENS (Growing a Resilient, Enriching, Equitable, Nourishing food System) Food is Medicine Project
                </li>
              </ul>
            </div>

            <Link href="/find-a-provider" className={styles.providerLink}>
              CLICK HERE TO MEET OUR DIABETIC PROVIDERS
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
