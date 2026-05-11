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
      const params = new URLSearchParams(window.location.search);
      const specialty = params.get('specialty');
      if (specialty && specialties.includes(specialty)) {
        setActiveFilter(specialty);
      }
    }
  }, []);

  console.log("Rendering FindAProvider, activeFilter:", activeFilter);

  const filteredProviders = activeFilter === 'All' 
    ? providersData 
    : providersData.filter(p => p.specialty === activeFilter);

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
            {filteredProviders.map(provider => (
              <Link key={provider.id} href={`/find-a-provider/${provider.id}`} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={provider.image} alt={provider.name} className={styles.providerImg} />
                </div>
                <h3 className={styles.providerName}>{provider.name}</h3>
                <p className={styles.providerTitle}>{provider.title}</p>
                {provider.certifications && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    {provider.certifications}
                  </p>
                )}
              </Link>
            ))}
          </div>
          {filteredProviders.length === 0 && (
            <p className={styles.noResults}>No providers found for this specialty.</p>
          )}
        </div>
      </section>
    </main>
  );
}
