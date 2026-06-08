"use client";

import React from 'react';
import styles from './DentalCare.module.css';
import ProgramContactSidebar from '../../components/ProgramContactSidebar';

export default function DentalCarePage() {
  const dentalServices = [
    "Preventative Care Treatment",
    "Gum Disease Treatment",
    "Education",
    "Oral Hygiene",
    "Oral Exams",
    "Fluoridation",
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
            <br />
            <p className={styles.heroSubtitle}>Dental Services Director: Dr. Inge Ford</p>
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
        <section className="program-layout-grid">
          
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
            <div className={styles.polaroidWrapper} style={{ marginBottom: '30px' }}>
              <img 
                src="/images/dental/Black_Dentist_and_Black_Child_in_Polaroid_Frame.png" 
                alt="Child receiving dental care" 
                className={styles.polaroidImage} 
              />
            </div>
            <ProgramContactSidebar 
              title="Schedule An Appointment" 
              description="Ready to take control of your oral health? Schedule a dental consultation with our team today." 
              phoneDisplay="662-741-8857" 
              phoneHref="tel:6627418857" 
              customLocations={[
                {
                  name: "Mound Bayou - Dr. Warren Inge Dental Center",
                  address: (
                    <>
                      Delta Health Center<br />
                      702 Martin Luther King Road<br />
                      Mound Bayou, MS 38762
                    </>
                  ),
                  hours: (
                    <>
                      <strong>Monday - Thursday:</strong> 8:00am &ndash; 6:00pm<br />
                      <strong>Friday:</strong> 8:00am &ndash; 12:00pm
                    </>
                  )
                },
                {
                  name: "Hollandale Clinic",
                  address: (
                    <>
                      Delta Health Center<br />
                      100 E. Washington St.<br />
                      Hollandale, MS 38748
                    </>
                  ),
                  hours: (
                    <>
                      <strong>Monday - Thursday:</strong> 7:30am &ndash; 5:30pm<br />
                      <strong>Friday:</strong> 7:30am &ndash; 11:30am
                    </>
                  )
                }
              ]}
            />
          </div>

        </section>
      </div>

    </main>
  );
}
