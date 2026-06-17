"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './RequestAppointment.module.css';

export default function RequestAppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    patientType: '',
    appointmentType: '',
    desiredDate: '',
    desiredTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className={styles.pageWrapper}>
      
      {/* Hero Header Banner */}
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/provider_hero.png" alt="Request an Appointment Hero" className={styles.heroBg} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Request an Appointment</h1>
            <p className={styles.heroSubtitle}>Submit your appointment request online, and our scheduler will get back to you within 48 hours.</p>
          </div>
        </section>
      </div>

      <div className="container">
        <div className={styles.contentGrid}>
          
          {/* Left Column: Warning & Form */}
          <div className={styles.leftColumn}>
            <p className={styles.warningText}>
              <strong>Please do not use this form if you have an urgent medical problem or you need to reschedule an existing appointment.</strong> Instead, contact our office at <a href="tel:6627418800">662-741-8800</a>. After you submit your request, our appointment scheduler will respond within 48 hours. <a href="#forms">See below for forms to complete</a>. Established patients may log in to the <a href="https://pxpportal.nextgen.com/deltahealthcenter-27679/portal/#/user/login" target="_blank" rel="noopener noreferrer">patient portal</a> to request appointments and update forms.
            </p>

            {submitted ? (
              <div className={styles.successMessage}>
                <h2>Request Submitted Successfully!</h2>
                <p>Thank you for submitting your request. Our appointment scheduler will contact you within 48 hours to confirm your appointment details.</p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      phone: '',
                      email: '',
                      streetAddress: '',
                      city: '',
                      state: '',
                      zipCode: '',
                      patientType: '',
                      appointmentType: '',
                      desiredDate: '',
                      desiredTime: ''
                    });
                  }} 
                  className={styles.submitBtn} 
                  style={{ marginTop: '20px' }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                
                {/* First Name & Last Name */}
                <div className={`${styles.row} ${styles.row2}`}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName" className={styles.label}>
                      First Name<span className={styles.required}>*</span>
                    </label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange} 
                      className={styles.input} 
                      required 
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName" className={styles.label}>
                      Last Name<span className={styles.required}>*</span>
                    </label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange} 
                      className={styles.input} 
                      required 
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className={`${styles.row} ${styles.row2}`}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>
                      Phone Number<span className={styles.required}>*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className={styles.input} 
                      required 
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className={styles.input} 
                    />
                  </div>
                </div>

                {/* Street Address */}
                <div className={styles.formGroup}>
                  <label htmlFor="streetAddress" className={styles.label}>
                    Street Address<span className={styles.required}>*</span>
                  </label>
                  <input 
                    type="text" 
                    id="streetAddress" 
                    name="streetAddress" 
                    value={formData.streetAddress} 
                    onChange={handleChange} 
                    className={styles.input} 
                    required 
                  />
                </div>

                {/* City, State, Zip */}
                <div className={`${styles.row} ${styles.row3}`}>
                  <div className={styles.formGroup}>
                    <label htmlFor="city" className={styles.label}>
                      City<span className={styles.required}>*</span>
                    </label>
                    <input 
                      type="text" 
                      id="city" 
                      name="city" 
                      value={formData.city} 
                      onChange={handleChange} 
                      className={styles.input} 
                      required 
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="state" className={styles.label}>
                      State<span className={styles.required}>*</span>
                    </label>
                    <select 
                      id="state" 
                      name="state" 
                      value={formData.state} 
                      onChange={handleChange} 
                      className={styles.select} 
                      required
                    >
                      <option value=""></option>
                      <option value="AL">Alabama</option>
                      <option value="AR">Arkansas</option>
                      <option value="LA">Louisiana</option>
                      <option value="MS">Mississippi</option>
                      <option value="TN">Tennessee</option>
                      {/* Add other states as fallback options */}
                      <option value="TX">Texas</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="zipCode" className={styles.label}>
                      Zip Code<span className={styles.required}>*</span>
                    </label>
                    <input 
                      type="text" 
                      id="zipCode" 
                      name="zipCode" 
                      value={formData.zipCode} 
                      onChange={handleChange} 
                      className={styles.input} 
                      required 
                    />
                  </div>
                </div>

                {/* Patient Type */}
                <div className={styles.formGroup}>
                  <span className={styles.label}>
                    Type of Patient<span className={styles.required}>*</span>
                  </span>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input 
                        type="radio" 
                        name="patientType" 
                        value="New Patient" 
                        checked={formData.patientType === 'New Patient'}
                        onChange={handleChange} 
                        className={styles.radioInput}
                        required
                      />
                      New Patient
                    </label>
                    <label className={styles.radioLabel}>
                      <input 
                        type="radio" 
                        name="patientType" 
                        value="Existing Patient" 
                        checked={formData.patientType === 'Existing Patient'}
                        onChange={handleChange} 
                        className={styles.radioInput}
                      />
                      Existing Patient
                    </label>
                  </div>
                </div>

                {/* Appointment Type */}
                <div className={styles.formGroup}>
                  <span className={styles.label}>
                    Type of Appointment<span className={styles.required}>*</span>
                  </span>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input 
                        type="radio" 
                        name="appointmentType" 
                        value="Follow-up" 
                        checked={formData.appointmentType === 'Follow-up'}
                        onChange={handleChange} 
                        className={styles.radioInput}
                        required
                      />
                      Follow-up
                    </label>
                    <label className={styles.radioLabel}>
                      <input 
                        type="radio" 
                        name="appointmentType" 
                        value="New Problem" 
                        checked={formData.appointmentType === 'New Problem'}
                        onChange={handleChange} 
                        className={styles.radioInput}
                      />
                      New Problem
                    </label>
                  </div>
                </div>

                {/* Desired Date & Time */}
                <div className={`${styles.row} ${styles.row2}`}>
                  <div className={styles.formGroup}>
                    <label htmlFor="desiredDate" className={styles.label}>
                      Desired Day/Date<span className={styles.required}>*</span>
                    </label>
                    <input 
                      type="date" 
                      id="desiredDate" 
                      name="desiredDate" 
                      value={formData.desiredDate} 
                      onChange={handleChange} 
                      className={styles.input} 
                      required 
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="desiredTime" className={styles.label}>
                      Desired Time
                    </label>
                    <input 
                      type="text" 
                      id="desiredTime" 
                      name="desiredTime" 
                      placeholder="e.g. 10:00 AM"
                      value={formData.desiredTime} 
                      onChange={handleChange} 
                      className={styles.input} 
                    />
                  </div>
                </div>

                {/* Privacy disclaimer */}
                <p className={styles.disclaimer}>
                  <strong>Please Note:</strong> Any information submitted using this form is transmitted securely and held in the strictest of confidence, protecting your privacy.
                </p>

                <p className={styles.requiredLegend}>
                  * = Input is required
                </p>

                {/* Submit button */}
                <div className={styles.submitWrapper}>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Image & Stacked Action Buttons */}
          <div className={styles.rightColumn}>
            <div className={styles.imageWrapper}>
              <img 
                src="/images/appointment_receptionist_dhc.png" 
                alt="Appointment Receptionist wearing Delta Health Center polo shirt in office" 
                className={styles.image} 
              />
            </div>

            <div className={styles.buttonStack}>
              {/* Find a Provider Button */}
              <Link href="/find-a-provider" className="btn btn-primary" style={{ width: '100%' }}>
                Find a Provider
              </Link>

              {/* Our Locations Button */}
              <Link href="/our-locations" className="btn btn-secondary" style={{ width: '100%' }}>
                Our Locations
              </Link>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
