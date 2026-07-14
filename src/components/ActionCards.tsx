import React from 'react';
import styles from './ActionCards.module.css';

const ActionCards = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.greenArch}></div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <img src="/images/services_family_new.png" alt="Family" className={styles.image} />
            <div className={styles.content}>
              <h3 className={styles.title}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Services
              </h3>
              <p className={styles.desc}>Explore Delta Health Center services across our locations.</p>
              <div className={styles.btnWrapper}>
                <a href="/#services" className={styles.btn}>View Services</a>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className={styles.card}>
            <img src="/images/provider_marketta_blue.png" alt="Doctor" className={styles.image} />
            <div className={styles.content}>
              <h3 className={styles.title}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                Our Providers
              </h3>
              <p className={styles.desc}>Our compassionate and highly skilled providers are ready to see you.</p>
              <div className={styles.btnWrapper}>
                <a href="/find-a-provider" className={styles.btn}>Find a Provider</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <img src="/images/clinic_lobby_new.png" alt="Locations" className={styles.image} />
            <div className={styles.content}>
              <h3 className={styles.title}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Hours & Locations
              </h3>
              <p className={styles.desc}>Our team is ready to help you book your appointment. Contact us today.</p>
              <div className={styles.btnWrapper}>
                <a href="/our-locations" className={styles.btn}>Our Locations</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ActionCards;
