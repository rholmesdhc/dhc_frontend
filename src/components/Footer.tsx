import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          
          {/* Column 1: Info & Social */}
          <div className={styles.col1}>
            <img 
              src="https://www.deltahealthcenter.org/wp-content/uploads/2024/11/deltahealthcenter_logo.png" 
              alt="Delta Health Center" 
              className={styles.logo}
            />
            <p className={styles.desc}>
              Delta Health Center is recognized within the community as a model of excellence and innovation.
            </p>
            <h4 className={styles.socialTitle}>Get Social</h4>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              <a href="#" aria-label="Twitter"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
              <a href="#" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className={styles.col2}>
            <h3 className={styles.colTitle}>Find a Provider</h3>
            <ul className={styles.linkList}>
              <li><Link href="/behavior-health">Behavioral Health</Link></li>
              <li><Link href="/dental-care">Dental Health</Link></li>
              <li><Link href="/family-medical-care">Family Medicine</Link></li>
              <li><Link href="/pediatric-care">Pediatrics</Link></li>
            </ul>
          </div>

          {/* Column 3: Careers */}
          <div className={styles.col3}>
            <h3 className={styles.colTitle}>Careers at DHC</h3>
            <Link href="/careers" className={styles.careerImageLink}>
              <img src="/images/executives/Myrtis_Small_Human_Resources_and_Credentialing_Director_Officer_Team_Photo_Box.png" alt="Careers at DHC" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
            </Link>
          </div>

          {/* Column 4: Badges */}
          <div className={styles.col4}>
            <h3 className={styles.colTitle}>Federally Qualified Health Center</h3>
            <div className={styles.badgesGrid}>
              <img src="/images/badges/national-quality-leader.png" alt="National Quality Leader 2025" className={styles.badgeImage} />
              <img src="/images/badges/high-value-care.png" alt="High-Value Care 2025" className={styles.badgeImage} />
              <img src="/images/badges/advancing-hit.png" alt="Advancing HIT for Quality 2025" className={styles.badgeImage} />
              <img src="/images/badges/aha-gold.png" alt="AHA Check Change Control Cholesterol Gold 2023" className={styles.badgeImage} />
              <img src="/images/badges/ftca-badge.png" alt="FTCA Deemed Health Center" className={styles.badgeImage} />
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p className="container">&copy; {new Date().getFullYear()} Delta Health Center. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
