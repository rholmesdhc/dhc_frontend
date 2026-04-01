"use client";

import React from 'react';
import Link from 'next/link';
import styles from './History.module.css';

export default function OurHistory() {
  return (
    <main className={styles.pageWrapper}>
      <div className="container">
        
        {/* Header Hero */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Our Legacy</h1>
        </section>

        {/* Video Embed */}
        <section className={styles.videoWrapper}>
          <iframe 
            src="https://player.vimeo.com/video/852163648?badge=0&autopause=0&player_id=0&app_id=58479" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
            title="Delta Health Center History"
          ></iframe>
        </section>

        {/* Content Body */}
        <section className={styles.contentGrid}>
          
          <div className={styles.leftColumn}>
            <p className={styles.historyText}>
              For more than 60 years Delta Health Center, Inc. (DHC) has provided health care for some of the most vulnerable communities in the Mississippi Delta. Delta Health Center was co-founded by Tufts University physicians, Dr. H. Jack Geiger and Dr. Count Gibson. Influenced by their work in the south during the civil rights era, they witnessed firsthand the extreme poverty and ill health that plagued rural communities in the region.
            </p>
            <p className={styles.historyText}>
              This inspired them to create a new model of health care for under-served vulnerable populations — the federally funded community health center — and bring the first one to Mississippi. With a grant from the federal Office of Economic Opportunity, Delta Health Center was established in 1965 in the historic all African American town of Mound Bayou, Mississippi. Delta Health Center has the historic distinction of being the first rural Community Health Center and the first Federally Qualified Community Health Center in the United States.
            </p>
            <p className={styles.historyText}>
              Their model was aimed at intervening in the cycle of extreme poverty, ill health, unemployment and illiteracy through comprehensive health care. Dr. Geiger served as the project director, and Dr. John Hatch, also of Tufts University, served as the director of community health action. Delta Health Center provided a number of services aimed at remedying poor social, economic and environmental conditions that caused many health problems.
            </p>
            <p className={styles.historyText}>
              The Delta Health Center staff dug wells, installed pumps built privies, dug drainage ditches and provided screens for homes. Under the leadership of Dr. Andrew B. James and Dr. L.C. Dorsey, a cooperative farm was established to provide food and economic stability to local communities. Later the cooperative included a cannery and a bookstore. In addition, educational activities were introduced to train local residents as community health assistants and researchers. Delta Health Center also provided transportation, nutrition and supplemental food programs as well as summer internships for medical students to work in Coahoma, Sunflower and Washington Counties.
            </p>
            <p className={styles.historyText}>
              Delta Health Center continues to fill critical gaps in health care by serving and empowering more than 10,383 individuals and families who might otherwise have no access to health care services. Delta Health Center’s success has led to the establishment of 1,300 community health centers which serve as the primary medical home for more than 28 million people in over 11,000 rural and urban communities across America.
            </p>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.polaroidWrapper}>
              <img 
                src="/images/Dr_H_Jack_Geiger_and_Dr_Count-Gibson_in_Polaroid_Frame.png" 
                alt="Dr. H. Jack Geiger and Dr. Count Gibson" 
                className={styles.polaroidImage} 
              />
            </div>
            
            <Link href="/contact" className={styles.contactBtn}>
              Contact Us
            </Link>
          </div>

        </section>

        {/* Footer Note */}
        <div className={styles.footerNote}>
          "We continue to build a world class primary health care system committed to caring for vulnerable populations from newborns to the elderly."
        </div>

      </div>
    </main>
  );
}
