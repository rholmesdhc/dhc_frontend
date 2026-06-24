import React from 'react';
import Link from 'next/link';
import styles from './Leadership.module.css';

// Load Data
import executivesDataRaw from '../../../public/images/executives/executives.json';
import boardData from '../../../public/images/board/board.json';

interface LeaderItem {
  name: string;
  title: string;
  image: string;
  link?: string;
}

const executivesData = executivesDataRaw as LeaderItem[];

export const metadata = {
  title: 'Leadership | Delta Health Center',
  description: 'Meet the Executive Leadership Team and Board of Directors guiding Delta Health Center.',
};

export default function LeadershipPage() {
  return (
    <main className={styles.pageWrapper}>
      
      {/* Hero Section */}
      <div className="container">
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Leadership</h1>
          </div>
          <div className={styles.heroImageWrapper}>
            <img src="/images/provider_hero.png" alt="Leadership Elements" />
          </div>
        </section>
      </div>

      {/* Intro Text */}
      <div className="container">
        <div className={styles.introText}>
          <p>Delta Health Center is guided by a team of dedicated professionals committed to providing equitable, high-quality, and community-based healthcare. Our leadership team ensures that we stay true to our mission of serving the medically under-served counties of the Mississippi Delta.</p>
        </div>
      </div>

      {/* Executive Leadership Section */}
      <section>
        <div className="container">
          <div className={styles.sectionBanner}>
            <h2 className={styles.sectionBannerTitle}>Staff Leadership</h2>
          </div>
        </div>
        <div className="container" style={{ marginTop: '40px' }}>
          <h3 className={styles.subHeading}>Executive Team</h3>
          <div className={styles.execGrid}>
            {executivesData.map((e, index) => (
              <div key={index} className={styles.profileCard}>
                {e.link ? (
                  <Link href={e.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className={styles.imageWrapper}>
                      <img src={e.image} alt={e.name} className={styles.profileImg} />
                    </div>
                    <h4 className={styles.profileName}>{e.name}</h4>
                    <p className={styles.profileTitle}>{e.title}</p>
                  </Link>
                ) : (
                  <>
                    <div className={styles.imageWrapper}>
                      <img src={e.image} alt={e.name} className={styles.profileImg} />
                    </div>
                    <h4 className={styles.profileName}>{e.name}</h4>
                    <p className={styles.profileTitle}>{e.title}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section>
        <div className="container">
          <div className={styles.sectionBanner}>
            <h2 className={styles.sectionBannerTitle}>Board of Directors</h2>
          </div>
        </div>
        <div className="container" style={{ marginTop: '40px' }}>
          <div className={styles.boardGrid}>
            {boardData.map((b, index) => (
              <div key={index} className={styles.profileCard}>
                <div className={styles.imageWrapper}>
                  <img src={b.image} alt={b.name} className={styles.profileImg} />
                </div>
                <h4 className={styles.profileName}>{b.name}</h4>
                <p className={styles.profileTitle}>{b.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
