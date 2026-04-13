"use client";

import React from 'react';
import styles from './NutritionalCounseling.module.css';

export default function NutritionalCounselingPage() {
  const nutritionalServices = [
    "Physical Activity",
    "Weight Tracking",
    "Eating Habits",
    "Prenatal High Risk Maternal Infant Service System",
    "WIC Certified",
    "Diabetic Counseling & Education",
    "Self-Management Education & Counseling",
    "Diabetic Education",
    "Referrals for High Risk"
  ];

  return (
    <main className={styles.pageWrapper}>
      
      {/* Banner Section matching CEO theme */}
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/provider_hero.png" alt="Nutritional Counseling Banner" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Nutritional Counseling</h1>
            <p className={styles.heroSubtitle}>Experts in Food and Nutrition</p>
          </div>
        </section>
      </div>

      {/* Main Content Sections (Secondary Headers Removed) */}
      <section className={styles.topSection}>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <img 
            src="/images/nutritional-counseling/vegetables.png" 
            alt="Fresh Vegetables Cutout" 
            className={styles.heroCutout} 
          />
          <hr className={styles.blueDivider} />
        </div>
      </section>


      {/* Main Content Grid */}
      <div className="container">
        <section className={styles.contentGrid}>
          
          {/* Left Text & Services Column */}
          <div className={styles.leftColumn}>
            <p className={styles.textParagraph}>
              At Delta Health Center, our dietician, experts in food and nutrition, help patients understand the role to take in preventing and treating illnesses through diet and food. Patients improve their overall health with education and making healthier lifestyle choices. They plan, prioritize, and achieve diet regulation.
            </p>
            <p className={styles.textParagraph}>
              Delta Health Center offers a Diabetes Self-Management Workshop for people diagnosed with diabetes. A new group begins on the first Monday of each month. See a Delta health Center Provider for a referral. Also, funded by a grant from the Mississippi Department of Health, Delta Health Center offers a Diabetes Prevention Program for patients who meet the eligibility risk factors for diabetes. Contact a Delta Health Center Provider to see if you are eligible for a referral.
            </p>

            <h2 className={styles.servicesHeading}>NUTRITIONAL COUNSELING</h2>
            
            <div className={styles.servicesListContainer}>
              <ul>
                {nutritionalServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>

            <a href="/find-a-provider" className={styles.dieticianLink}>
              CLICK HERE TO MEET OUR DIETICIAN.
            </a>
          </div>

          {/* Right Polaroid Photo Column */}
          <div className={styles.rightColumn}>
            <div className={styles.polaroidWrapper}>
              <img 
                src="/images/nutritional-counseling/polaroid_salad.png" 
                alt="Nutritional Plate" 
                className={styles.polaroidImage} 
              />
            </div>
          </div>

        </section>
      </div>

    </main>
  );
}
