import React from 'react';
import styles from './Careers.module.css';

export const metadata = {
  title: 'Careers | Delta Health Center',
  description: 'Join the Delta Health Center team. Explore our current job openings and career opportunities.',
};

const jobOpenings = [
  {
    id: 1,
    title: 'Family Nurse Practitioner',
    department: 'Medical - Greenville',
    description: 'We are seeking an experienced FNP to provide comprehensive medical care to our community.',
  },
  {
    id: 2,
    title: 'Licensed Clinical Social Worker (LCSW)',
    department: 'Behavioral Health',
    description: 'Join our behavioral health team to offer counseling and support services to patients of all ages.',
  },
  {
    id: 3,
    title: 'General Dentist',
    department: 'Dental',
    description: 'Provide high-quality preventative and restorative dental services at our modern clinic.',
  },
  {
    id: 4,
    title: 'Medical Assistant',
    department: 'Clinical Support',
    description: 'Assist our providers with patient care, vitals, and administrative duties.',
  },
  {
    id: 5,
    title: 'Licensed Practical Nurse (LPN)',
    department: 'Nursing',
    description: 'Deliver compassionate patient care, administer medications, and assist in clinical operations.',
  },
  {
    id: 6,
    title: 'Front Desk Receptionist',
    department: 'Administration',
    description: 'Be the welcoming face of DHC, managing patient check-ins, scheduling, and phone inquiries.',
  }
];

export default function Careers() {
  return (
    <main>
      <div className={styles.heroWrapper}>
        <section className={styles.hero}>
          <img src="/images/provider_hero.png" alt="Careers Hero" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Careers at DHC</h1>
            <p className={styles.heroSubtitle}>
              Join a dedicated team committed to providing compassionate, community-based healthcare.
            </p>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <iframe 
            title="Delta Health Center- Pfizer Foundation (DHC/careers)" 
            width="742" 
            height="417" 
            src="https://www.youtube.com/embed/vpUeUcCdG90?feature=oembed" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>

        <div className={styles.embedJobsHead} style={{ maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <p className={styles.presentationDescription}>
            Learn more about our commitment to healthcare excellence, our team environment, and what makes us a great place to work. Download our presentation to get an insider's look at Delta Health Center.
          </p>
          <div className={styles.presentationDownload} style={{ justifyContent: 'center' }}>
            <a href="/documents/Career Presentation DHC - Primary Care.pdf" className={styles.downloadButton} target="_blank" rel="noopener noreferrer">
              Download Presentation
            </a>
          </div>
        </div>

        <section className={styles.introSection}>
          <h2 className={styles.introTitle}>Why Join Delta Health Center?</h2>
          <p className={styles.introText}>
            At Delta Health Center, we believe that access to quality healthcare is a fundamental right. 
            By joining our team, you become part of a legacy of care and empowerment that has served 
            the Mississippi Delta since 1965. We offer competitive benefits, a deeply rewarding work 
            environment, and the opportunity to make a tangible difference in the lives of our patients.
          </p>
        </section>

        <section>
          <h2 className={styles.introTitle} style={{ textAlign: 'left', marginBottom: '2rem' }}>Current Openings</h2>
          <div className={styles.grid}>
            {jobOpenings.map(job => (
              <div key={job.id} className={styles.jobCard}>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <div className={styles.jobDept}>{job.department}</div>
                <p className={styles.jobDesc}>{job.description}</p>
                <a href="https://deltahealthcenter.zohorecruit.com/jobs/Careers" target="_blank" rel="noopener noreferrer" className={styles.applyBtn}>
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.applicationInfo}>
          <h2 className={styles.infoTitle}>How to Apply</h2>
          <p className={styles.infoText}>
            Delta Health Center utilizes Zoho Recruit to seamlessly manage our application process. 
            Clicking "Apply Now" on any of the positions above will direct you to our official portal 
            where you can submit your resume and cover letter securely.
          </p>
          <p className={styles.infoText}>
            If you have questions regarding the application process or require accommodations, please 
            contact our Human Resources department at <a href="mailto:hr@deltahealthcenter.org" className={styles.emailLink}>hr@deltahealthcenter.org</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
