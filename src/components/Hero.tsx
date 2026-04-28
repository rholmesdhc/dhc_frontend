import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background with Generated Composite Image */}
      <div className={styles.bgContainer}>
        <img 
          src="/images/hero-composite.png" 
          alt="Delta Health Center Caregiver" 
          className={styles.bgImage} 
        />
      </div>

      <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '5%', width: '100%' }}>
        <div className={`${styles.content} animate-fade-in-up`}>
          <div className={styles.badge}>Compassionate Care</div>
          <h1 className={styles.title}>
            Empowering Your <span>Health Journey</span>
          </h1>
          <p className={styles.description}>
            Caring. Experienced. Knowledgeable. Delta Health Center continues to build a world-class primary health care system committed to caring for vulnerable populations, from newborns to the elderly.
          </p>
          <div className={styles.actions}>
            <a href="/find-a-provider" className="btn btn-primary">Find a Provider</a>
            <a href="#services" className="btn btn-secondary">View Our Services</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
