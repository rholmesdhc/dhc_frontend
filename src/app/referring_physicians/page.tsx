"use client";

import React from 'react';
import styles from './BehaviorHealth.module.css';

export default function BehaviorHealth() {

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetUrl = e.target.value;
    if (targetUrl) {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
      // Reset the dropdown post-selection
      e.target.value = "";
    }
  };

  return (
    <main>
      <div className={styles.heroWrapper}>
        <section className={styles.hero}>
          <img src="/images/provider_hero.png" alt="Behavioral Health Hero" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Referring Internal Physicians</h1>
            <p className={styles.heroSubtitle}>
              Connecting you with the right specialists for exceptional, community-based care.
            </p>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Referring Internal Physicians Portal</h2>
          <p className={styles.formSubtitle}>
            Please select the specific behavioral health, psychology, or women's health practitioner you wish to refer or consult with via our secure ZipRefer system.
          </p>

          <div className={styles.formGroup}>
            <label htmlFor="referrer-select" className={styles.label}>SELECT A REFERRING INTERNAL PHYSICIAN</label>
            <select 
              id="referrer-select" 
              className={styles.select} 
              defaultValue="" 
              onChange={handleSelection}
            >
              <option value="" disabled>-- Select an Option --</option>
              <option value="https://ziprefer.com/directory/dhcpsychologymoundbayou">DHC Psychology Mound Bayou</option>
              <option value="https://ziprefer.com/directory/dhcobgynmoundbayou">DHC OBGYN Mound Bayou</option>
              <option value="https://ziprefer.com/directory/dhcbehavioralhealthleland">DHC Behavioral Health Leland</option>
            </select>
          </div>

        </div>
      </div>
    </main>
  );
}
