'use client';

import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter: React.FC = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Join Our Newsletter</h2>
            <p className={styles.description}>
              Stay updated with the latest health news, community events, and wellness tips from Delta Health Center.
            </p>
          </div>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className={styles.input}
                required 
              />
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
