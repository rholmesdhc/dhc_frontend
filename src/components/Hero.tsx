import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        {/* Background/Layout Grid */}
        <div className={styles.gridContainer}>
          {/* Left Side: Content Column */}
          <div className={styles.contentColumn}>
            <div className={styles.content}>
              <div className={styles.badge}>Compassionate Care</div>
              <h1 className={styles.title}>
                Empowering <br />
                Your <span>Health <br /> Journey</span>
              </h1>
              <p className={styles.description}>
                Caring. Experienced. Knowledgeable. Delta Health Center continues to build a world-class primary health care system committed to caring for vulnerable populations, from newborns to the elderly.
              </p>
              <div className={styles.actions}>
                <Link href="/find-a-provider" className="btn btn-primary">
                  Find a Provider
                </Link>
                <Link href="#services" className="btn btn-secondary">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Portrait or Hero Image Column */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <img 
                src="/images/hero-composite.png" 
                alt="Delta Health Center Caregiver" 
                className={styles.providerImg} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

