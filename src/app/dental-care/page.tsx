"use client";

import React from 'react';
import styles from './DentalCare.module.css';

export default function DentalCarePage() {
  const dentalServices = [
    "Preventative Care Treatment",
    "Gum Disease Treatment",
    "Education",
    "Oral Hygiene",
    "Oral Health Conditions",
    "Oral Exams",
    "Fluoridation",
    "Age Specific Products",
    "Dental Procedure Techniques",
    "Sealants",
    "Varnishes",
    "Dentures",
    "Fillings",
    "Extractions",
    "Simple Oral Surgery",
    "Prophylaxes"
  ];

  return (
    <main className={styles.pageWrapper}>
      
      {/* Banner Section */}
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/provider_hero.png" alt="Dental Care Banner" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Dental Care</h1>
            <p className={styles.heroSubtitle}>Preventative & Restorative</p>
          </div>
        </section>
      </div>

      {/* Top Hero Section */}
      <section className={styles.topSection}>
        <img 
          src="/images/dental/dentist_inge_ford_working.png" 
          alt="Dr. Inge Ford working on patient" 
          className={styles.heroCutout} 
        />
        <hr className={styles.orangeDivider} />
      </section>

      {/* Main Content Grid */}
      <div className="container">
        <section className={styles.contentGrid}>
          
          {/* Left Text & Services Column */}
          <div className={styles.leftColumn}>
            <p className={styles.textParagraph}>
              The Centers for Disease Control and Prevention (CDC) reports that one-fourth of children (ages 2-5 years old) in the United States have tooth decay. Two-thirds of adolescents (ages 12-19 years old) have tooth decay and 20% of these adolescents are not treated.
            </p>
            <p className={styles.textParagraph}>
              Additionally, each year nearly eight thousand Americans die from oral and pharyngeal cancers. Delta Health Center offers a full complement or preventative and restorative care for a lifetime of healthy smiles. Our dental clinics are located in Mound Bayou and Hollandale, Mississippi. They see patients of all ages. Patients are also educated on proper dental hygiene in order to prevent future dental problems.
            </p>

            <h2 className={styles.servicesHeading}>DENTAL SERVICES</h2>
            
            <div className={styles.servicesListContainer}>
              <ul>
                {dentalServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Polaroid Photo Column */}
          <div className={styles.rightColumn}>
            <div className={styles.polaroidWrapper}>
              <img 
                src="/images/dental/Black_Dentist_and_Black_Child_in_Polaroid_Frame.png" 
                alt="Child receiving dental care" 
                className={styles.polaroidImage} 
              />
            </div>
          </div>

        </section>
      </div>

    </main>
  );
}
