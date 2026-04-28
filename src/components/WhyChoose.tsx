'use client';

import React from 'react';
import styles from './WhyChoose.module.css';

const WhyChoose: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <h2 className={styles.heading}>Why Delta Health Center?</h2>
                    <p className={styles.subheading}>
                        Hear from community advocates, patients and providers on why you should 
                        choose Delta Health Center for your healthcare and wellness needs.
                    </p>
                    <div className={styles.divider}></div>
                    <p className={styles.paragraph}>
                        Delta Health Center prides itself on making sure we give our patients the attention 
                        they need when visiting one of our clinics. We make sure our providers have access 
                        to the technology and data needed to make sound decisions on the health of their patients.
                    </p>
                    <p className={styles.paragraph}>
                        So, if you're wondering about who we are, our impact on the community or need more 
                        information on our services, these testimonials will confirm that you or your family 
                        member(s) should visit one of our clinics and let us provide you with the excellent 
                        healthcare you deserve!
                    </p>
                    <p className={styles.paragraph}>
                        Listen to Pastor Darryl Johnson as he talks about the history of Delta Health Center 
                        and its long-lasting impact on the local community.
                    </p>

                </div>
                <div className={styles.visualContent}>
                    <div className={styles.imageWrapper}>
                        <img 
                            src="/images/dhc_entrance.jpg" 
                            alt="Delta Health Center Entrance" 
                            className={styles.image}
                        />
                    </div>
                    <p className={styles.footerText}>
                        Delta Health Center, Inc, is a FTCA deemed facility. This health center is a Health 
                        Center Program Grantee under 42 U.S.C 254b, and a deemed Public Health Service 
                        employee under 42. U.S.C. 233(g)-(n)
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
