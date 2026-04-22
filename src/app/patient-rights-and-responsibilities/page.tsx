import React from 'react';
import styles from './Rights.module.css';

const patientRights = [
  {
    title: "Respect and Non-Discrimination",
    desc: "You have the right to considerate, respectful care from all our staff at all times and under all circumstances, without regard to race, religion, sex, sexual orientation, gender identity, national origin, age, disability, or your ability to pay."
  },
  {
    title: "Privacy and Confidentiality",
    desc: "You have the right to privacy during medical treatment and other care. Your medical records and all communications pertaining to your care will be kept strictly confidential."
  },
  {
    title: "Information and Communication",
    desc: "You have the right to receive clear, understandable information about your diagnosis, treatment options, and prognosis from your provider in a language you comprehend."
  },
  {
    title: "Participation in Care",
    desc: "You have the right to be involved in all decisions regarding your health care. You have the right to refuse treatment to the extent permitted by law and to be informed of the medical consequences of such refusal."
  },
  {
    title: "Access to Medical Records",
    desc: "You have the right to review your medical records and to obtain a copy of your records in a timely manner according to Delta Health Center policy and applicable state laws."
  },
  {
    title: "Quality Care and Safety",
    desc: "You have the right to receive safe, high-quality medical care that meets professional standards, in a clean, secure, and supportive environment."
  }
];

const patientResponsibilities = [
  {
    title: "Provide Accurate Information",
    desc: "You are responsible for providing complete and accurate information about your present complaints, past illnesses, hospitalizations, medications, and any other matters relating to your health."
  },
  {
    title: "Follow the Treatment Plan",
    desc: "You are responsible for following the treatment plan recommended by your primary care provider. If you choose not to follow it, you are responsible for the outcomes."
  },
  {
    title: "Show Respect and Consideration",
    desc: "You are responsible for being respectful and considerate of other patients, staff, and providers, and for assisting in the control of noise and the number of visitors."
  },
  {
    title: "Keep Appointments",
    desc: "You are responsible for keeping appointments and, when you are unable to do so for any reason, for notifying the clinic at least 24 hours in advance."
  },
  {
    title: "Meet Financial Obligations",
    desc: "You are responsible for ensuring that the financial obligations of your health care are fulfilled as promptly as possible, and for providing necessary insurance information."
  },
  {
    title: "Ask Questions",
    desc: "You are responsible for asking questions when you do not understand your care, what you are expected to do, or the information provided to you."
  }
];

export default function PatientRightsAndResponsibilities() {
  return (
    <main className={styles.pageWrapper}>
      {/* Hero Section */}
      <div className="container">
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Patient Rights & Responsibilities</h1>
            <p className={styles.heroSubtitle}>At Delta Health Center, we are committed to a partnership built on mutual trust and respect.</p>
          </div>
        </section>
      </div>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentGrid}>
            
            {/* Rights Card */}
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.iconRights}>✧</span> 
                Your Rights
              </h2>
              <ul className={styles.list}>
                {patientRights.map((right, idx) => (
                  <li key={idx} className={styles.listItem}>
                    <span className={styles.itemTitle}>{right.title}</span>
                    <span className={styles.itemDesc}>{right.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities Card */}
            <div className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.iconResponsibilities}>✧</span> 
                Your Responsibilities
              </h2>
              <ul className={styles.list}>
                {patientResponsibilities.map((resp, idx) => (
                  <li key={idx} className={`${styles.listItem} ${styles.listItemResponsibilities}`}>
                    <span className={styles.itemTitle}>{resp.title}</span>
                    <span className={styles.itemDesc}>{resp.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
