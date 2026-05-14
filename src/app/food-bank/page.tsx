"use client";

import React, { useState, useEffect } from 'react';
import styles from './FoodBank.module.css';

function ObfuscatedEmail({ user, domain, style }: { user: string, domain: string, style?: React.CSSProperties }) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  if (!email) return <span style={style}>Loading email...</span>;

  return <a href={`mailto:${email}`} style={style}>{email}</a>;
}

const pantriesByCity: Record<string, { name: string, phone: string, address: string, mapQuery: string, emailUser?: string, emailDomain?: string }[]> = {
  "Cleveland": [
    { name: "Covenant Presbyterian Church", phone: "662-719-1360", address: "110 Bishop Rd, Cleveland, MS 38732", mapQuery: "110+Bishop+Rd,+Cleveland,+MS+38732" },
    { name: "Helping Hands of Cleveland", phone: "662-719-4875", address: "404 North MLK Dr, Cleveland, MS 38732", mapQuery: "404+North+MLK+Dr,+Cleveland,+MS+38732" }
  ],
  "Greenville": [
    { name: "Ephesus SDA Church", phone: "662-347-7652", address: "1735 Spruce St, Greenville, MS 38704", mapQuery: "1735+Spruce+St,+Greenville,+MS+38704" },
    { name: "New Jerusalem MB Church", phone: "662-347-3621", address: "518 Gum St., Greenville, MS 38701", mapQuery: "518+Gum+St.,+Greenville,+MS+38701" },
    { name: "St. Vincent DePaul", phone: "662-335-5251", address: "711 Washington Ave, Greenville, MS 38701", mapQuery: "711+Washington+Ave,+Greenville,+MS+38701" },
    { name: "East Park Comm Outreach", phone: "662-820-4983", address: "2500 E. Alexander St., Greenville, MS 38704", mapQuery: "2500+E.+Alexander+St.,+Greenville,+MS+38704" },
    { name: "Hearty Helpings Food Pantry", phone: "662-335-5554", address: "310 Washington Ave, Greenville, MS 38704", mapQuery: "310+Washington+Ave,+Greenville,+MS+38704" }
  ],
  "Leland": [
    { name: "Leland Food Pantry", phone: "662-686-9910", address: "202 N. Broad St, Leland, MS 38756", mapQuery: "202+N.+Broad+St,+Leland,+MS+38756" },
    { name: "Endless Charities", phone: "662-686-2018", address: "202 Weston Ave, Leland, MS 38756", mapQuery: "202+Weston+Ave,+Leland,+MS+38756" },
    { name: "Jerusalem Temple COGIC", phone: "662-394-9042", address: "12 Elizabeth Rd, Leland, MS 38756", mapQuery: "12+Elizabeth+Rd,+Leland,+MS+38756" }
  ],
  "Mound Bayou": [
    { name: "Lampton Street Church of God", phone: "662-402-4798", address: "202 N. Edwards Ave., Mound Bayou, MS 38732", mapQuery: "202+N.+Edwards+Ave.,+Mound+Bayou,+MS+38732" }
  ],
  "Rosedale": [
    { name: "Riverside United Baptist Church", phone: "662-719-4234", address: "408 Brown St, Rosedale, MS 38769", emailUser: "marvinstro", emailDomain: "yahoo.com", mapQuery: "408+Brown+St,+Rosedale,+MS+38769" }
  ],
  "Anguilla": [
    { name: "Anguilla Methodist Church", phone: "662-873-7167", address: "631 Front St, Anguilla, MS 38721", mapQuery: "631+Front+St,+Anguilla,+MS+38721" }
  ]
};

export default function FoodBank() {
  return (
    <main className={styles.main}>
      <div className="container">
        <section className={styles.hero}>
          <img src="/images/hunger_relief_hero.png" alt="Hunger Relief Resources" className={styles.heroBg} style={{ objectPosition: 'center 20%' }} />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Hunger Relief Resources</h1>
            <p className={styles.heroSubtitle}>Connecting our community with essential nutrition and hope.</p>
          </div>
        </section>

        {/* DHC Blessing Boxes Feature */}
        <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', marginBottom: '60px', borderTop: '4px solid var(--color-secondary)' }}>
          <h2 style={{ fontFamily: "'Outfit', serif", color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '15px' }}>
            DHC Blessing Boxes
          </h2>
          <p style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-secondary)', fontStyle: 'italic', marginBottom: '20px' }}>
            “Take what you need, and leave what you can.”
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--color-text-main)', marginBottom: '30px' }}>
            Delta Health Center is proud to offer Blessing Boxes at <strong>all Delta Health Center locations</strong>.
            These boxes are a direct community resource providing non-perishable food items and essential supplies to those in need,
            available 24/7.
          </p>

          <div style={{ backgroundColor: '#f9fafb', padding: '25px', borderRadius: '12px', border: '1px solid #eaeaea' }}>
            <h3 style={{ fontFamily: "'Outfit', serif", color: 'var(--color-primary)', fontSize: '1.5rem', margin: '0 0 10px 0' }}>Support Our Mission</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-main)', marginBottom: '15px' }}>
              We are always accepting donations to keep our Blessing Boxes stocked. To contribute, please contact:
            </p>
            <div style={{ fontSize: '1.15rem', color: 'var(--color-text-main)', display: 'grid', gap: '5px' }}>
              <strong>Vatecia N. Spann</strong>
              <span>Director of Food is Medicine</span>
              <ObfuscatedEmail user="vspann" domain="deltahealthcenter.org" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }} />
              <a href="tel:6627418868" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>662.741.8868</a>
            </div>
          </div>
        </div>

        {/* Other Community Resources */}
        <h2 className={styles.title} style={{ fontSize: '2.5rem', borderBottom: '2px solid #eaeaea', paddingBottom: '15px', marginBottom: '40px' }}>
          Community Food Pantries
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px' }}>
          {Object.entries(pantriesByCity).map(([city, pantries]) => (
            <div key={city} style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontFamily: "'Outfit', serif", color: 'var(--color-secondary)', fontSize: '1.8rem', borderBottom: '1px solid #eaeaea', paddingBottom: '10px', marginBottom: '20px' }}>
                {city}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {pantries.map((pantry, idx) => (
                  <li key={idx} style={{ fontSize: '1.1rem', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                    <strong style={{ display: 'block', fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '5px' }}>
                      <a
                        href={`https://maps.google.com/?q=${pantry.mapQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                        onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                      >
                        {pantry.name}
                      </a>
                    </strong>
                    {pantry.address} <br />
                    <a href={`tel:${pantry.phone.replace(/-/g, '')}`} style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>{pantry.phone}</a>
                    {pantry.emailUser && pantry.emailDomain && (
                      <span style={{ display: 'block' }}>
                        <ObfuscatedEmail user={pantry.emailUser} domain={pantry.emailDomain} style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }} />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <a href="/documents/Food pantries with locations.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-block', padding: '12px 24px', textDecoration: 'none' }}>
            View / Download Original Directory (PDF)
          </a>
        </div>
      </div>
    </main>
  );
}
