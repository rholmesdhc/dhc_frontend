"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Providers.module.css';

const providersData = [
  { id: 1, name: 'Dr. Marketta Blue', title: 'Chief Medical Officer', certifications: 'Board Certified | Family Medicine', specialty: 'Family Medicine', image: '/images/Provider_CMO_Dr_Marketta_Blue.png' },
  { id: 2, name: 'Dr. Simone Moore', title: 'MD Pediatrics', certifications: 'Board Certified', specialty: 'Pediatrics', image: '/images/Dr_Simone_Moore_MD_Pediatrics_Provider_Team_Photo_Box.png' },
  { id: 3, name: 'Dr. Braveen Ragunanthan M.D., MPH, FAAP', title: 'Board Certified Pediatrician', certifications: 'Pediatrics', specialty: 'Pediatrics', image: '/images/Braveen_Ragunanthan_M.D_Provider_Team_Photo_Box-1.png' },
  { id: 4, name: 'Tomika Johnson-Flowers, MPH, BSDH, PHDH', title: 'Dental Hygienist', specialty: 'Dentistry', image: '/images/provider_4.png' },
  { id: 5, name: 'Dr. Marcus Vance, DDS', title: 'Cosmetic Dentist', specialty: 'Dentistry', image: '/images/provider_5.png' },
  { id: 6, name: 'Sarah Lincoln, LCSW', title: 'Therapist', specialty: 'Behavioral Health', image: '/images/provider_6.png' },
  { id: 7, name: 'Dr. Elena Rodriguez, OBGYN', title: 'Obstetrician', specialty: 'Obstetrics & Gynecology', image: '/images/provider_7.png' },
  { id: 8, name: 'Corey Miller, PMHNP', title: 'Psychiatric Nurse', specialty: 'Behavioral Health', image: '/images/provider_8.png' },
  { id: 9, name: 'Dr. James Okafor, MD', title: 'Pediatric Specialist', specialty: 'Pediatrics', image: '/images/provider_9.png' },
  { id: 10, name: 'Dr. Angela Smith, MD', title: 'Gynecologist', specialty: 'Obstetrics & Gynecology', image: '/images/provider_10.png' },
];

const specialties = [
  'All',
  'Behavioral Health',
  'Dentistry',
  'Family Medicine',
  'Obstetrics & Gynecology',
  'Pediatrics'
];

export default function FindAProvider() {
  const [activeFilter, setActiveFilter] = useState('All');

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
                className={`${styles.filterBtn} ${activeFilter === spec ? styles.active : ''}`}
                onClick={() => setActiveFilter(spec)}
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
