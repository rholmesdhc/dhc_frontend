"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="glass-header" style={{ display: 'flex', flexDirection: 'column', paddingTop: 0, paddingBottom: 0 }}>
      
      {/* Top Utility Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.phoneWrapper}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>Appointments: <a href="tel:6627418800" className={styles.phoneLink}>(662) 741-8800</a></span>
          </div>
          <div className={styles.langWrapper}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <select className={styles.langSelect} aria-label="Select Language">
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '12px', paddingBottom: 0 }}>
        <div className={styles.header}>
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <img 
              src="/images/dhc_logo_official.png" 
              alt="Delta Health Center Logo" 
              className={styles.logo}
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button 
            className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation and Actions Wrapper */}
          <div className={`${styles.menuWrapper} ${isMobileMenuOpen ? styles.menuOpen : ''}`}>
            {/* Navigation with Dropdowns */}
            <nav className={styles.nav}>

            {/* About Dropdown */}
            <div className={styles.dropdown}>
              <button className={styles.dropbtn} aria-haspopup="true" aria-expanded="false">
                About DHC <span className={styles.arrow}>▼</span>
              </button>
              <div className={styles.dropdownContent} role="menu">
                <Link href="/mission-vision-values">Mission, Vision, and Values</Link>
                <Link href="/find-a-provider">Providers</Link>
                <Link href="/leadership">Leadership</Link>
                <Link href="/our-ceo">Our CEO</Link>
                <Link href="/our-history">Our Legacy</Link>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className={styles.dropdown}>
              <button className={styles.dropbtn} aria-haspopup="true" aria-expanded="false">
                Locations <span className={styles.arrow}>▼</span>
              </button>
              <div className={styles.dropdownContent} role="menu">
                <Link href="/our-locations#moundbayou">Mound Bayou Geiger</Link>
                <Link href="/our-locations#moundbayou-dental">Mound Bayou Dental</Link>
                <Link href="/our-locations#greenville-south">Greenville South</Link>
                <Link href="/our-locations#greenville-central">Greenville Central</Link>
                <Link href="/our-locations#indianola">Indianola</Link>
                <Link href="/our-locations#cleveland">Cleveland</Link>
                <Link href="/our-locations#hollandale">Hollandale</Link>
                <Link href="/our-locations#leland">Leland</Link>
                <Link href="/our-locations#moorhead">Moorhead</Link>
                <Link href="/our-locations#rollingfork">Rolling Fork</Link>
                <Link href="/our-locations#rosedale">Rosedale</Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className={styles.dropdown}>
              <button className={styles.dropbtn} aria-haspopup="true" aria-expanded="false">
                Services <span className={styles.arrow}>▼</span>
              </button>
              <div className={styles.dropdownContent} role="menu">
                <Link href="/dental-care">Dental Care</Link>
                <Link href="/family-medical-care">Family Medical Care</Link>
                <Link href="/laboratory-x-rays">Laboratory & X-Rays</Link>
                <Link href="/pediatric-care">Pediatric Care</Link>
                <Link href="/pharmacy">Pharmacy</Link>
                <Link href="/behavioral-health">Behavioral Health</Link>
                <Link href="/physical-therapy">Physical Therapy</Link>
              </div>
            </div>

            {/* Programs Dropdown */}
            <div className={styles.dropdown}>
              <button className={styles.dropbtn} aria-haspopup="true" aria-expanded="false">
                Programs <span className={styles.arrow}>▼</span>
              </button>
              <div className={styles.dropdownContent} role="menu">
                <Link href="/social-services">Social Services</Link>
                <Link href="/wellness-center">Wellness Center</Link>
                <Link href="/nutritional-counseling">Nutritional Counseling</Link>
                <Link href="/food-bank">Hunger Relief Resources</Link>
                <Link href="/ryan-white-hiv-program">Ryan White HIV/AIDS</Link>
                <Link href="/maternal-health">Maternal Health</Link>
                <Link href="/wic">WIC</Link>
                <Link href="/womens-health">Women's Health</Link>
                <Link href="/wellness-exams">Annual Wellness Visits</Link>
                <Link href="/workplace-and-school-physicals">Workplace & School Physicals</Link>
              </div>
            </div>

            {/* Patients Dropdown */}
            <div className={styles.dropdown}>
              <button className={styles.dropbtn} aria-haspopup="true" aria-expanded="false">
                Your Visit <span className={styles.arrow}>▼</span>
              </button>
              <div className={styles.dropdownContent} role="menu">
                <Link href="/patient-faqs">FAQs</Link>
                <Link href="/patient-registration">Registration</Link>
                <Link href="/patient-rights-and-responsibilities">Rights & Responsibilities</Link>
                <Link href="/news">Events and News</Link>
              </div>
            </div>

          </nav>

          {/* Action Buttons */}
          <div className={styles.actions}>
            <Link href="/patient-payment" className={`btn btn-secondary ${styles.actionBtn}`} onClick={closeMenu}>Make A Payment</Link>
            <a href="https://pxpportal.nextgen.com/deltahealthcenter-27679/portal/#/user/login" target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.actionBtn}`} onClick={closeMenu}>Patient Portal</a>
            <a href="https://www.deltahealthcenter.org/donate-today-to-the-patient-assistance-fund/" target="_blank" rel="noopener noreferrer" className={`btn ${styles.actionBtn}`} style={{ background: 'var(--color-accent)', color: 'var(--color-text-main)', boxShadow: '0 4px 14px rgba(255, 193, 7, 0.3)' }} onClick={closeMenu}>Donate Today</a>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
