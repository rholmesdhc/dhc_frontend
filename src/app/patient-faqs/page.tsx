"use client";

import React, { useState } from 'react';
import styles from './PatientFaqs.module.css';

const faqs = [
  {
    question: "What are your hours of operation?",
    answer: "Our main clinic is open Monday through Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 1:00 PM. We are closed on Sundays and major holidays."
  },
  {
    question: "Do I need an appointment or do you accept walk-ins?",
    answer: "While we highly recommend scheduling an appointment to minimize your wait time, we do accept walk-in patients for urgent but non-life-threatening conditions based on provider availability."
  },
  {
    question: "What insurance plans do you accept?",
    answer: "We accept Medicare, Medicaid, and most major private health insurance plans. Please contact our billing department before your visit to verify that your specific plan is accepted."
  },
  {
    question: "What if I do not have health insurance?",
    answer: "As a community health center, we believe everyone deserves access to quality care. We offer a sliding fee discount program based on family size and income for uninsured and underinsured patients."
  },
  {
    question: "How can I get a refill on my prescription?",
    answer: "The fastest way to get a prescription refill is to contact your pharmacy directly. They will send a refill request to our office. Please allow 48 hours for our providers to process refill requests."
  },
  {
    question: "Do you offer telemedicine or virtual appointments?",
    answer: "Yes! We offer secure telemedicine appointments for many types of visits, including follow-ups, medication management, and minor illnesses. You can request a telehealth visit when scheduling your appointment."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring a valid photo ID, your current insurance card, a list of all medications you are currently taking (including over-the-counter supplements), and any relevant past medical records."
  },
  {
    question: "How can I access my medical records?",
    answer: "Patients can easily access their test results, upcoming appointments, and medical records through our secure online Patient Portal. You can also request physical copies from our Medical Records department."
  },
  {
    question: "Is there parking available at the clinic?",
    answer: "Yes, we have free, dedicated parking available for our patients directly adjacent to the main entrance, including several designated handicap parking spaces."
  },
  {
    question: "Do you offer services in languages other than English?",
    answer: "Yes. Many of our staff are bilingual (English/Spanish), and we provide professional interpretation services for over 50 other languages at no cost to our patients."
  },
  {
    question: "How do I pay my bill?",
    answer: "You can pay your bill securely online via our Patient Portal, over the phone by calling our billing department, or in person at the front desk during your visit."
  },
  {
    question: "What do I do in case of a medical emergency after hours?",
    answer: "If you are experiencing a life-threatening medical emergency, please call 911 or go to the nearest hospital emergency room immediately. For non-urgent matters, you can leave a message with our answering service."
  }
];

export default function PatientFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className={styles.pageWrapper}>
      {/* Hero Section */}
      <div className="container">
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Patient FAQs</h1>
            <p className={styles.heroSubtitle}>Find answers to the most commonly asked questions by our patients</p>
          </div>
        </section>
      </div>

      {/* FAQs Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={styles.faqItem}
                data-active={openIndex === index}
              >
                <button 
                  className={styles.faqQuestion} 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  {faq.question}
                  <span className={styles.icon}>+</span>
                </button>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
