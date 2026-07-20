import React from 'react';
import styles from './RyanWhite.module.css';
import ProgramContactSidebar from '../../components/ProgramContactSidebar';

export const metadata = {
  title: 'Ryan White HIV/AIDS Program | Delta Health Center',
  description: 'Delta Health Center provides STD and HIV testing and care through the Ryan White HIV/AIDS Program.',
};

export default function RyanWhiteProgram() {
  return (
    <>
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/ryan_white_hero.png" alt="Ryan White HIV/AIDS Program Hero" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Ryan White HIV/AIDS Program</h1>
            <p className={styles.heroSubtitle}>Providing Comprehensive STD and HIV Testing and Care</p>
            <br />
            <p className={styles.heroSubtitle}>Ryan White Program Director - Joanna Cannon</p>
          </div>
        </section>
      </div>

      <section className="container">
        <div className="program-layout-grid">
          <div>
            <div className={styles.contentSection}>
          <div className={styles.headingWrapper}>
             <h2 className={styles.heading}>Providing STD and HIV Testing</h2>
          </div>

          <p className={styles.paragraph}>
            <strong>Prevalence in Mississippi:</strong> In 2016, there were 20,112 cases of Chlamydia, 7,157 cases of Gonorrhea, and 326 cases of Syphilis in Mississippi. Mississippi has the highest rate of Gonorrhea in the United States and is the third highest in Chlamydia cases. One out of every 85 persons in Mississippi will contract HIV in their lifetime.
          </p>

          <p className={styles.paragraph}>
            <strong>Testing and Care:</strong> Mississippi is #2 in the country for AIDS diagnosis, indicating that many individuals are not tested until the disease has progressed to AIDS. Bolivar, Sunflower, and Washington counties have higher rates of HIV than the state average. Delta Health Center provides STD and HIV testing with trained providers to manage care and treatment.
          </p>

          <p className={styles.paragraph}>
            <strong>Program Services:</strong> Delta Health Center holds a Ryan White Part B contract with the Mississippi State Department of Health. Services include HIV Care and Treatment, Medical Case Management, Oral Health Care, Behavioral Health Care, and transportation assistance for people living with HIV.
          </p>

          <p className={styles.paragraph}>
            <strong>Medication Assistance:</strong> Under the Ryan White HIV/AIDS Program (RWHAP) Part B, ADAP provides FDA-approved medications to low-income people with HIV. These people have limited or no health insurance. Financial assistance is also available for those with insurance who need help covering medication costs.
          </p>

          <p className={styles.paragraph}>
            <strong>Action Step:</strong> Patients are encouraged to call any Delta Health Center clinic to schedule an appointment.
          </p>
        </div>
          </div>
          <ProgramContactSidebar 
            title="For More Information" 
            description="To learn more about the Ryan White HIV/AIDS Program, testing services, case management, or medication assistance, please contact our team." 
          />
        </div>
      </section>
    </>
  );
}
