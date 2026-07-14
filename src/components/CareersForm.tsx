"use client";

import React, { useState } from 'react';
import styles from './CareersForm.module.css';

interface JobOpening {
  id: number;
  title: string;
  department: string;
}

interface CareersFormProps {
  jobOpenings: JobOpening[];
}

export default function CareersForm({ jobOpenings }: CareersFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: ''
      });
    } catch (err: any) {
      setError(err.message || 'Failed to submit form. Please check your connection.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.successCard}>
        <h3 className={styles.successTitle}>Inquiry Submitted Successfully!</h3>
        <p className={styles.successText}>
          Thank you for your interest in joining the Delta Health Center team. 
          Your contact information and message have been sent to our Human Resources department. 
          We will review your inquiry and get back to you if your qualifications match our needs.
        </p>
        <button 
          onClick={() => setSubmitted(false)} 
          className={styles.submitBtn} 
          style={{ maxWidth: '200px', margin: '1.5rem auto 0 auto' }}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.title}>Careers & HR Inquiry Form</h3>
      <p className={styles.subtitle}>
        Interested in working with us but have questions, or want to introduce yourself directly to HR? 
        Fill out the form below and we will route your details to our recruitment team.
      </p>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Full Name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
              disabled={submitting}
              placeholder="John Doe"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address<span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
              disabled={submitting}
              placeholder="johndoe@example.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              disabled={submitting}
              placeholder="(662) 555-0199"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="position" className={styles.label}>
              Position of Interest<span className={styles.required}>*</span>
            </label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className={styles.select}
              required
              disabled={submitting}
            >
              <option value="">Select a position...</option>
              {jobOpenings.map(job => (
                <option key={job.id} value={job.title}>
                  {job.title} ({job.department})
                </option>
              ))}
              <option value="General Careers Inquiry">Other / General Inquiry</option>
            </select>
          </div>

          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label htmlFor="message" className={styles.label}>
              Cover Letter / Message<span className={styles.required}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              required
              disabled={submitting}
              placeholder="Tell us about yourself, your experience, and why you want to join DHC..."
            />
          </div>
        </div>

        {error && <div className={styles.errorText}>{error}</div>}

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={submitting}
        >
          {submitting ? 'Sending Inquiry...' : 'Submit HR Inquiry'}
        </button>
      </form>
    </div>
  );
}
