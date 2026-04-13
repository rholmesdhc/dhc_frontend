import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './ProviderDetail.module.css';

import { providersData } from '../../../data/providers';

export default async function ProviderDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const provider = providersData.find(p => p.id.toString() === resolvedParams.id) || providersData[0];
  if (!provider) {
    notFound();
  }

  const displayName = provider.name.replace('Dr. ', '');

  return (
    <main className={styles.pageWrapper}>
      {/* Top Gray Banner */}
      <div className={styles.topBanner}>
        <div className="container">
          <div className={styles.layoutGrid}>
            <div className={styles.headerContent}>
              <Link href="/find-a-provider" className={styles.backLink}>
                &larr; Find a Doctor
              </Link>
              <h1 className={styles.providerName}>{provider.name}</h1>
              <p className={styles.providerSubtitle}>
                {provider.specialty} &bull; {provider.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className={styles.bodySection}>
        <div className="container">
          <div className={styles.bodyGrid}>
            <div className={styles.mainContent}>
              <h2 className={styles.sectionTitle}>Getting to know {displayName}</h2>
              
              <div className={styles.quickFacts}>
                <span>Gender Identity: {provider.gender || 'TBA'}</span>
                <span>Pronouns: {provider.pronouns || 'TBA'}</span>
                <span>Spoken Languages: {provider.languages || 'TBA'}</span>
              </div>

              <div className={styles.bio}>
                {Array.isArray(provider.bio) ? (
                  provider.bio.map((paragraph, idx) => (
                    <p key={idx} style={{ marginBottom: '16px' }}>{paragraph}</p>
                  ))
                ) : (
                  <p>{provider.bio || 'Bio coming soon!'}</p>
                )}
              </div>

              <div className={styles.detailBlock}>
                <h4>Workdays</h4>
                <p className={styles.detailText}>{provider.workdays || 'TBA'}</p>
              </div>

              <div className={styles.detailBlock}>
                <h4>Education</h4>
                <ul className={styles.detailList}>
                  {provider.education?.map((item, i) => <li key={i}>{item}</li>) || <li>TBA</li>}
                </ul>
              </div>

              <div className={styles.detailBlock}>
                <h4>Professional Associations</h4>
                <ul className={styles.detailList}>
                  {provider.associations?.map((item, i) => <li key={i}>{item}</li>) || <li>TBA</li>}
                </ul>
              </div>
            </div>

            {/* Photo Column - floats right to overlap the banner */}
            <div className={styles.photoColumn}>
              <div className={styles.photoWrapper}>
                <img src={provider.image} alt={provider.name} className={styles.providerPhoto} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
