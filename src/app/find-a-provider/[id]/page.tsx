import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './ProviderDetail.module.css';

// Mocking the same data for now, ideally this would be fetched from WP GraphQL
const providersData = [
  { 
    id: 1, 
    name: 'Dr. Marketta Blue', 
    title: 'Chief Medical Officer', 
    certifications: 'Board Certified | Family Medicine', 
    specialty: 'Family Medicine', 
    image: '/images/Provider_CMO_Dr_Marketta_Blue.png',
    slug: '1',
    gender: 'Female',
    pronouns: 'She/Her',
    languages: 'English',
    bio: [
      'Born in Greenville, Mississippi, Dr. Marketta Blue is a proud native of the Mississippi Delta, a background that inspired her lifelong commitment to improving rural healthcare. She currently serves as the Chief Medical Officer for Delta Health Center, a leadership position she has held for over eight years. In this role, Dr. Blue combines strategic leadership with direct patient care, prioritizing the delivery of high-quality, accessible medical services to the community.',
      'Dr. Blue is deeply dedicated to combating the "Mississippi Big 3" illnesses: diabetes, hypertension, and heart disease. Her clinical focus is on providing comprehensive, compassionate care and empowering her patients through education and proactive disease management. A steadfast advocate for reducing regional health disparities, Dr. Blue works tirelessly to ensure that all residents of the Delta receive the exceptional care they deserve to live healthier, fuller lives.'
    ],
    workdays: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday',
    education: [
      'Doctor of Medicine',
      'Bachelor of Science'
    ],
    associations: [
      'American Board of Family Medicine',
      'American Academy of Family Physicians'
    ]
  },
  { 
    id: 2, 
    name: 'Dr. Simone Moore', 
    title: 'MD Pediatrics', 
    certifications: 'Board Certified', 
    specialty: 'Pediatrics', 
    image: '/images/Dr_Simone_Moore_MD_Pediatrics_Provider_Team_Photo_Box.png',
    slug: '2',
    gender: 'Female',
    pronouns: 'She/Her',
    languages: 'English',
    bio: [
      "Born and raised in the heart of New Orleans, Dr. Simone Moore brings the vibrant spirit and unwavering resilience of her hometown to her pediatric practice at the Delta Health Center. A board-certified pediatrician and the dedicated Director of the Delta Health Center Pediatric Ward, Dr. Moore has devoted her career to ensuring that the youngest members of the community receive world-class, compassionate healthcare.",
      "Her medical journey began with a deep-rooted desire to serve underserved populations, leading her to specialize in pediatrics. At DHC, she leads a multidisciplinary team focused on early childhood development, preventative care, and chronic illness management. Known for her warm bedside manner and infectious energy, Dr. Moore treats every patient like family, working closely with parents to build strong, healthy foundations for their children.",
      "When she's not walking the halls of the pediatric ward in her signature white coat, Dr. Moore is a diehard New Orleans Saints fan. Come football season, her office is often subtly decorated in black and gold, and she loves bonding with her patients over weekend game highlights. Dr. Moore is proud to serve the Delta region, combining her clinical expertise with a genuine, heartfelt commitment to the community's future."
    ],
    workdays: 'Monday, Tuesday, Wednesday, Thursday, Friday',
    education: [
      'Doctor of Medicine - Tulane University',
      'Bachelor of Science - Xavier University of Louisiana'
    ],
    associations: [
      'American Academy of Pediatrics',
      'Mississippi State Medical Association'
    ]
  },
  { 
    id: 3, 
    name: 'Dr. Braveen Ragunanthan M.D., MPH, FAAP', 
    title: 'Board Certified Pediatrician', 
    certifications: 'Pediatrics', 
    specialty: 'Pediatrics', 
    image: '/images/Braveen_Ragunanthan_M.D_Provider_Team_Photo_Box-1.png',
    slug: '3',
    gender: 'Male',
    pronouns: 'He/Him',
    languages: 'English',
    bio: [
      "Dr. Braveen Ragunanthan, M.D., MPH, FAAP, is a board-certified pediatrician deeply committed to providing comprehensive, compassionate care to children and families across the Delta region. A proud graduate of the Virginia Commonwealth University School of Medicine, Dr. Ragunanthan brings a wealth of specialized knowledge to the Delta Health Center in Mound Bayou. With a Master of Public Health degree alongside his medical doctorate, he approaches pediatric care holistically, focusing not just on treating illness, but on community health, preventative medicine, and healthy childhood development.",
      "Dr. Ragunanthan has a profound clinical focus on developmental and behavioral health. He is highly experienced in guiding families through complex diagnoses such as autism spectrum disorder, sensory processing disorder, and speech and language delays. He understands that every child's developmental journey is unique, and he works tirelessly to ensure his patients have access to the early interventions and supportive care they need to thrive.",
      "Known by his patients' families for his thorough communication and warm, reassuring bedside manner, Dr. Ragunanthan treats every child with the utmost dedication. Whether managing common pediatric conditions or supporting complex developmental needs, he is a steadfast advocate for the health, happiness, and future of his young patients."
    ],
    workdays: 'Monday, Tuesday, Wednesday, Thursday, Friday',
    education: [
      'Doctor of Medicine - Virginia Commonwealth University',
      'Master of Public Health'
    ],
    associations: [
      'Fellow of the American Academy of Pediatrics (FAAP)'
    ]
  },
  // Add fallback for others if accessed
];

export default async function ProviderDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const provider = providersData.find(p => p.id.toString() === resolvedParams.id) || providersData[0];
  if (!provider) {
    notFound();
  }

  const displayName = provider.name.replace('Dr. ', '');

  return (
    <main className={styles.pageWrapper}>
      {/* Top Gray Banner */}
      <div className={styles.topBanner}>
        <div className="container">
          <div className={styles.layoutGrid}>
            <div className={styles.headerContent}>
              <Link href="/find-a-provider" className={styles.backLink}>
                &larr; Find a Doctor
              </Link>
              <h1 className={styles.providerName}>{provider.name}</h1>
              <p className={styles.providerSubtitle}>
                {provider.specialty} &bull; {provider.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className={styles.bodySection}>
        <div className="container">
          <div className={styles.bodyGrid}>
            <div className={styles.mainContent}>
              <h2 className={styles.sectionTitle}>Getting to know {displayName}</h2>
              
              <div className={styles.quickFacts}>
                <span>Gender Identity: {provider.gender || 'TBA'}</span>
                <span>Pronouns: {provider.pronouns || 'TBA'}</span>
                <span>Spoken Languages: {provider.languages || 'TBA'}</span>
              </div>

              <div className={styles.bio}>
                {Array.isArray(provider.bio) ? (
                  provider.bio.map((paragraph, idx) => (
                    <p key={idx} style={{ marginBottom: '16px' }}>{paragraph}</p>
                  ))
                ) : (
                  <p>{provider.bio || 'Bio coming soon!'}</p>
                )}
              </div>

              <div className={styles.detailBlock}>
                <h4>Workdays</h4>
                <p className={styles.detailText}>{provider.workdays || 'TBA'}</p>
              </div>

              <div className={styles.detailBlock}>
                <h4>Education</h4>
                <ul className={styles.detailList}>
                  {provider.education?.map((item, i) => <li key={i}>{item}</li>) || <li>TBA</li>}
                </ul>
              </div>

              <div className={styles.detailBlock}>
                <h4>Professional Associations</h4>
                <ul className={styles.detailList}>
                  {provider.associations?.map((item, i) => <li key={i}>{item}</li>) || <li>TBA</li>}
                </ul>
              </div>
            </div>

            {/* Photo Column - floats right to overlap the banner */}
            <div className={styles.photoColumn}>
              <div className={styles.photoWrapper}>
                <img src={provider.image} alt={provider.name} className={styles.providerPhoto} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
