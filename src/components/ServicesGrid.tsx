import React from 'react';
import styles from './ServicesGrid.module.css';

const services = [
  { title: 'Family Medical Care', desc: 'Comprehensive healthcare for individuals and families across all ages.', link: '/family-medical-care', image: '/images/medical_care_family.png' },
  { title: 'Dental Care', desc: 'Full-range dental services to keep your smile healthy and bright.', link: '/dental-care', image: '/images/dental_care_clinic.png' },
  { title: 'Pediatric Care', desc: 'Expert care for your little ones, from newborns to adolescents.', link: '/pediatric-care', image: '/images/pediatric_care_child.png' },
  { title: 'Behavioral Health', desc: 'Accredited mental health services providing support and counseling.', link: '/behavioral-health', image: '/images/behavioral_health_therapy.png' },
  { title: 'Womens Health', desc: 'Obstetrical and gynecology services for women in all stages of life.', link: '/womens-health', image: '/images/womens_health_clinic.png' },
  { title: 'Pharmacy', desc: 'Convenient on-site pharmacy for patients to easily pick up medications.', link: '/pharmacy', image: '/images/pharmacy_counter.png' },
];

const ServicesGrid = () => {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.description}>
            Delta Health Center provides our community with a comprehensive, full-range of health care services, and services aimed at promoting a healthier lifestyle.
          </p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, idx) => (
            <div key={idx} className={styles.card}>
              <img src={service.image} alt={service.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.desc}</p>
                <a href={service.link} className={styles.cardLink}>
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
