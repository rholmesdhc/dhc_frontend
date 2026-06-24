"use client";

import React, { useState } from 'react';
import styles from './Contact.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>
        Have a question or need to reach our administrative office? Fill out the form below, and we will get back to you shortly. For appointments, please call us directly.
      </p>

      {submitted ? (
        <div className={styles.successMessage}>
          Thank you! Your message has been sent successfully. One of our team members will respond to you shortly.
        </div>
      ) : (
        <form className={styles.formCard} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className={styles.input} 
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className={styles.input} 
              required 
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              className={styles.input} 
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>Reason for Inquiry</label>
            <select 
              id="subject" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              className={styles.select}
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Billing Question">Billing Question</option>
              <option value="Feedback or Suggestion">Feedback or Suggestion</option>
              <option value="Media Request">Media Request</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className={styles.textarea} 
              required 
            />
          </div>

          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>
      )}
    </main>
  );
}
