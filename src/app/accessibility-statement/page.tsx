import React from 'react';
import Link from 'next/link';
import styles from './AccessibilityStatement.module.css';

export const metadata = {
  title: 'Accessibility Statement | Delta Health Center',
  description: 'Delta Health Center is committed to ensuring digital accessibility for people with disabilities.',
};

export default function AccessibilityStatement() {
  return (
    <>
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/provider_hero.png" alt="Accessibility Statement Hero" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Accessibility Statement</h1>
            <p className={styles.heroSubtitle}>Commitment to Inclusion and Universal Access</p>
          </div>
        </section>
      </div>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.containerBox}>
            <h2 className={styles.sectionTitle}>General Statement</h2>
            <p className={styles.paragraph}>
              Delta Health Center strives to ensure that its services are accessible to people with disabilities. Delta Health Center has invested a significant amount of resources to help ensure that its website is made easier to use and more accessible for people with disabilities, with the strong belief that every person has the right to live with dignity, equality, comfort, and independence.
            </p>

            <h2 className={styles.sectionTitle}>Accessibility Standards</h2>
            <p className={styles.paragraph}>
              Delta Health Center continues its efforts to constantly improve the accessibility of its site and services in the belief that it is our collective moral obligation to allow seamless, accessible, and unhindered use also for those of us with disabilities.
            </p>
            <p className={styles.paragraph}>
              We aim to adhere as closely as possible to the Web Content Accessibility Guidelines (WCAG 2.1) at Level AA. These guidelines outline best practices to ensure web content is accessible to users with visual, auditory, motor, and cognitive impairments.
            </p>

            <h2 className={styles.sectionTitle}>Accessibility Features on Our Website</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>Keyboard Navigation:</strong> Logical heading structures and focus indicators to assist users navigating without a mouse.
              </li>
              <li className={styles.listItem}>
                <strong>Text Alternatives:</strong> Alt text on images and descriptive labels for interactive icons and navigation components.
              </li>
              <li className={styles.listItem}>
                <strong>Color Contrast & Responsive Design:</strong> Formatted layouts designed for high contrast and readability across desktop, tablet, and mobile devices.
              </li>
              <li className={styles.listItem}>
                <strong>Form Accessibility:</strong> Explicit input labels and helper texts to guide users through form completion and submission.
              </li>
            </ul>

            <h2 className={styles.sectionTitle}>Third-Party Portals & Content</h2>
            <p className={styles.paragraph}>
              Despite our efforts to make all pages and content on Delta Health Center’s website fully accessible, some content or external third-party services (such as patient portals, external payment processors, or embedded media) may not yet fully conform to the strictest accessibility standards. We continually work with our partners to enhance accessibility across all integrated platforms.
            </p>

            <div className={styles.contactBox}>
              <h3>Here For You</h3>
              <p>
                If you are experiencing difficulty with any content on Delta Health Center’s website or require assistance with any part of our site, please contact us during normal business hours and we will be happy to assist.
              </p>
              <p style={{ marginTop: '16px' }}>
                <strong>Phone:</strong> <a href="tel:6627418800" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>(662) 741-8800</a>
              </p>
              <p>
                <strong>Address:</strong> 702 Martin Luther King Road, Mound Bayou, MS 38762
              </p>
              <p>
                <strong>Online Assistance:</strong> You may also reach out via our <Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}>Contact Form</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
