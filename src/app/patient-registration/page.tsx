import React from 'react';
import styles from './Registration.module.css';

export default function PatientRegistration() {
  return (
    <main className={styles.pageWrapper}>
      {/* Hero Section */}
      <div className="container">
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Patient Registration Process</h1>
            <p className={styles.heroSubtitle}>Your guide to a smooth, efficient, and technologically advanced healthcare experience at Delta Health Center.</p>
          </div>
        </section>
      </div>

      {/* Process Timeline Section */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.timeline}>
            
            {/* Step 1 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>1</div>
              <div className={styles.timelineContent}>
                <h2 className={styles.stepTitle}>Scheduling Your Appointment</h2>
                <p className={styles.stepDesc}>
                  Your journey with Delta Health Center begins by scheduling an appointment. You can do this by calling our central scheduling line or requesting an appointment online. Our friendly staff will gather your initial demographic and insurance information over the phone to start your file.
                </p>
                <div className={styles.highlightBox}>
                  <div className={styles.highlightTitle}>Pre-Registration Tip</div>
                  <div className={styles.highlightText}>
                    Have your current insurance card and a list of your current medications ready when you call to schedule. This helps us ensure your provider has everything they need prior to your visit.
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>2</div>
              <div className={styles.timelineContent}>
                <h2 className={styles.stepTitle}>Patient Check-In & Phreesia</h2>
                <p className={styles.stepDesc}>
                  Upon arriving at Delta Health Center, you will be warmly greeted by our registration staff members. We utilize the innovative <strong>Phreesia</strong> software platform to make your check-in process as seamless as possible.
                </p>
                <p className={styles.stepDesc}>
                  You may receive a secure text message or email prior to your visit allowing you to complete your intake forms from the comfort of your home using Mobile Check-In. If you prefer to check in at the clinic, our staff will provide you with a PhreesiaPad tablet.
                </p>
                <div className={styles.highlightBox}>
                  <div className={styles.highlightTitle}>Benefits of Phreesia Registration</div>
                  <div className={styles.highlightText}>
                    • Private, secure, and easy-to-use digital forms.<br/>
                    • Quickly verify your demographic and insurance data.<br/>
                    • Conveniently sign consent forms and pay copays digitally.
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>3</div>
              <div className={styles.timelineContent}>
                <h2 className={styles.stepTitle}>Patient Check-Out & NextGen Portal</h2>
                <p className={styles.stepDesc}>
                  After your visit with your provider, you will proceed to the check-out desk. Our staff will help you schedule any necessary follow-up appointments, provide you with printed after-visit summaries, and process any remaining balances.
                </p>
                <p className={styles.stepDesc}>
                  Before you leave, we highly encourage you to enroll in the <strong>NextGen Patient Portal</strong>. Our check-out staff can send you a direct invitation link to set up your account in minutes.
                </p>
                <div className={styles.highlightBox}>
                  <div className={styles.highlightTitle}>Why use the NextGen Patient Portal?</div>
                  <div className={styles.highlightText}>
                    • 24/7 access to your medical records and lab results.<br/>
                    • Request prescription refills and appointments online.<br/>
                    • Send secure, direct messages to your care team.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
