import React from 'react';
import styles from './OurCEO.module.css';
import ceoData from '../../../public/images/ceo/ceo.json';

export const metadata = {
  title: 'Our CEO | Delta Health Center',
  description: 'Learn more about John A. Fairman, the Chief Executive Officer of Delta Health Center, Inc.',
};

export default function OurCEO() {
  const paragraphs = ceoData.biography.split('\n\n');

  return (
    <>
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/provider_hero.png" alt="Our CEO Hero" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our CEO</h1>
            <p className={styles.heroSubtitle}>Community Based Experience</p>
          </div>
        </section>
      </div>

      <section className={styles.container}>
        <div className={styles.profileWrapper}>
          <div className={styles.imageSection}>
            <div className={styles.imageCard}>
              <img 
                src={ceoData.image} 
                alt={`${ceoData.name} - ${ceoData.title}`} 
                className={styles.image}
              />
              <div className={styles.nameBadge}>
                <h2 className={styles.name}>John A. Fairman</h2>
                <p className={styles.title}>Chief Executive Officer</p>
              </div>
            </div>
          </div>
          
          <div className={styles.bioSection}>
            <h3 className={styles.bioHeading}>Executive Biography</h3>
            {paragraphs.map((para, index) => (
              <p key={index} className={styles.bioParagraph}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
