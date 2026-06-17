"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Providers.module.css';

import { providersData, specialties } from '../../data/providers';

export default function FindAProvider() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const handlePopState = () => {
        const params = new URLSearchParams(window.location.search);
        const specialty = params.get('specialty');
        if (specialty && specialties.includes(specialty)) {
          setActiveFilter(specialty);
        } else {
          setActiveFilter('All');
        }
      };

      // Set initial state
      handlePopState();

      // Listen for history changes
      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }
  }, []);

  console.log("Rendering FindAProvider, activeFilter:", activeFilter);

  const filteredProviders = activeFilter === 'All' 
    ? providersData 
    : providersData.filter(p => p.specialty.includes(activeFilter));

  return (
    <main className={styles.pageWrapper}>
      {/* Hero Header */}
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/provider_hero.png" alt="Find a Provider Hero" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Find a Provider</h1>
            <p className={styles.heroSubtitle}>Providing our local communities with a variety of experienced medical professionals</p>
          </div>
        </section>
      </div>

      {/* Filter Row */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar}>
            {specialties.map(spec => (
              <button 
                key={spec}
                type="button"
                className={`${styles.filterBtn} ${activeFilter === spec ? styles.active : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Button clicked:", spec);
                  setActiveFilter(spec);
                  const newUrl = new URL(window.location.href);
                  if (spec === 'All') {
                    newUrl.searchParams.delete('specialty');
                  } else {
                    newUrl.searchParams.set('specialty', spec);
                  }
                  window.history.pushState({}, '', newUrl);
                }}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Grid */}
      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {filteredProviders.map(provider => {
              let credential = '';
              if (provider.title.includes('|')) {
                credential = provider.title.split('|')[0].trim();
              } else if (provider.name.includes('Marketta Blue')) {
                credential = 'MD';
              } else if (provider.name.includes('Alyssa Simmons')) {
                credential = 'FNP';
              } else {
                const credentialPatterns = ['FNP', 'NP', 'PMHNP', 'DNP', 'MD', 'PhD', 'PharmD', 'PA', 'R.Ph.'];
                if (credentialPatterns.some(pat => provider.title.includes(pat))) {
                  credential = provider.title;
                }
              }

              return (
                <div key={provider.id} className={styles.card}>
                  <Link href={`/find-a-provider/${provider.id}`} className={styles.cardLink}>
                    <div className={styles.imageWrapper}>
                      <img src={provider.image} alt={provider.name} className={styles.providerImg} />
                    </div>
                    <h3 className={styles.providerName}>
                      {provider.name.replace(/^Dr\.\s+/, '')}{credential ? `, ${credential}` : ''}
                    </h3>
                  </Link>
                  <p className={styles.providerTitle}>
                    <strong style={{ color: '#6ea454' }}>Specialty:</strong> {provider.specialty}
                  </p>
                  
                  <div className={styles.cardButtons}>
                    <Link href={`/find-a-provider/${provider.id}`} className={styles.btnViewProfile}>
                      View Profile
                    </Link>
                    <Link href="/request-appointment" className={styles.btnSchedule}>
                      Schedule an Appointment
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          {filteredProviders.length === 0 && (
            <p className={styles.noResults}>No providers found for this specialty.</p>
          )}
        </div>
      </section>
    </main>
  );
}
