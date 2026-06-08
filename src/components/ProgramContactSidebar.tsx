import React from 'react';
import styles from './ProgramContactSidebar.module.css';

interface ProgramContactSidebarProps {
  title?: string;
  description?: React.ReactNode;
  phoneDisplay?: string;
  phoneHref?: string;
  customLocations?: Array<{
    name: string;
    address: React.ReactNode;
    hours: React.ReactNode;
  }>;
  hideLocationHours?: boolean;
}

export default function ProgramContactSidebar({
  title = "Schedule An Appointment",
  description = "Ready to take control of your health? Schedule a comprehensive wellness consultation with our team today. We will assess your current health status and work with you to create a personalized action plan.",
  phoneDisplay = "(662) 741-8800",
  phoneHref = "tel:6627418800",
  customLocations,
  hideLocationHours = false
}: ProgramContactSidebarProps) {
  return (
    <div className={styles.rightColumn}>
      <div className={styles.infoCard}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={phoneHref} className={styles.callBtn}>Call {phoneDisplay}</a>
      </div>

      {!hideLocationHours && (
        customLocations ? (
          customLocations.map((loc, idx) => (
            <div key={idx} className={styles.infoCard} style={{ borderLeftColor: 'var(--color-secondary)', marginTop: '20px' }}>
              <h3>{loc.name}</h3>
              <p>{loc.address}</p>
              <p style={{ marginBottom: 0 }}>
                {loc.hours}
              </p>
            </div>
          ))
        ) : (
          <div className={styles.infoCard} style={{ borderLeftColor: 'var(--color-secondary)' }}>
            <h3>Location & Hours</h3>
            <p>
              Delta Health Center<br/>
              702 Martin Luther King Road<br/>
              Mound Bayou, MS 38762
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>Monday - Thursday</strong><br/>
              8:00 AM - 6:00 PM<br/>
              <strong>Friday</strong><br/>
              8:00 AM - 12:00 PM
            </p>
          </div>
        )
      )}
    </div>
  );
}
