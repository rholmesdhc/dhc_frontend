import React from 'react';
import styles from './ProgramContactSidebar.module.css';

interface ProgramContactSidebarProps {
  title?: string;
  description?: React.ReactNode;
  phoneDisplay?: string;
  phoneHref?: string;
}

export default function ProgramContactSidebar({
  title = "Start Your Journey",
  description = "Ready to take control of your health? Schedule a comprehensive wellness consultation with our team today. We will assess your current health status and work with you to create a personalized action plan.",
  phoneDisplay = "(662) 741-8800",
  phoneHref = "tel:6627418800"
}: ProgramContactSidebarProps) {
  return (
    <div className={styles.rightColumn}>
      <div className={styles.infoCard}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={phoneHref} className={styles.callBtn}>Call {phoneDisplay}</a>
      </div>

      <div className={styles.infoCard} style={{ borderLeftColor: 'var(--color-secondary)' }}>
        <h3>Location & Hours</h3>
        <p>
          Delta Health Center, Inc.<br/>
          702 Martin Luther King Road<br/>
          Post Office Box 900<br/>
          Mound Bayou, MS 38762
        </p>
        <p style={{ marginBottom: 0 }}>
          <strong>Monday - Friday</strong><br/>
          8:00 AM - 5:00 PM
        </p>
      </div>
    </div>
  );
}
