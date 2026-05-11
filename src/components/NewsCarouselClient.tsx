"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import styles from './NewsCarousel.module.css';

// SVGs for metadata
const UserIcon = () => (
  <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
  </svg>
);

const FolderIcon = () => (
  <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
  </svg>
);

export default function NewsCarouselClient({ posts }: { posts: any[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector(`.${styles.card}`)?.clientWidth || 300;
      carouselRef.current.scrollBy({ left: -(cardWidth + 20), behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector(`.${styles.card}`)?.clientWidth || 300;
      carouselRef.current.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
    }
  };

  // Split posts into carousel (first 4) and list (outreach category only)
  const carouselPosts = posts.slice(0, 4);
  const listPosts = posts.filter(post => 
    post.categories?.nodes?.some((c: any) => c.name.toLowerCase() === 'outreach')
  );

  // Hardcoded image mapping for demo posts that lack a WP featured image attachment
  const fallbackImages: Record<string, string> = {
    'how-ai-is-revolutionizing-healthcare-at-delta-health-center': '/images/blog/ai_healthcare.png',
    'understanding-your-patient-rights': '/images/blog/patient_rights.png',
    'nutrition-tips-for-the-summer': '/images/blog/nutrition_summer.png',
    'new-behavioral-health-clinic-opens': '/images/blog/behavioral_health.png',
    'welcoming-new-pediatricians-to-our-team': '/images/blog/pediatricians.png',
    'upcoming-community-health-fair-details': '/images/blog/health_fair.png',
    'delta-health-center-recognized-for-community-excellence': '/images/blog/community_excellence.png',
    'why-delta-health-center': '/images/blog/why_dhc.png',
  };

  const getFallbackImage = (slug: string) => {
    return fallbackImages[slug] || "/images/dhc_entrance_new.png";
  };

  return (
    <div className={styles.carouselWrapper}>
      
      {/* Left Column: Carousel */}
      <div className={styles.carouselArea}>
        <button className={`${styles.navButton} ${styles.prev}`} onClick={scrollPrev} aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className={styles.carouselContainer} ref={carouselRef}>
          {carouselPosts.map((post) => {
            const firstName = post.author?.node?.firstName;
            const lastName = post.author?.node?.lastName;
            const fullAuthorName = (firstName && lastName) ? `${firstName} ${lastName}` : null;
            const authorName = fullAuthorName || post.author?.node?.name || "Delta Health Center";
            const imageUrl = post.featuredImage?.node?.sourceUrl || getFallbackImage(post.slug);
            const categoryName = post.categories?.nodes?.[0]?.name || "News";

            return (
              <article key={post.id} className={styles.card}>
                <img src={imageUrl} alt={post.title} className={styles.cardImage} />
                <div className={styles.cardContent}>
                  <Link href={`/news/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                  </Link>
                  
                  <div className={styles.cardMeta}>
                    <div className={styles.metaItem}>
                      <UserIcon /> {authorName}
                    </div>
                    <div className={styles.metaItem}>
                      <CalendarIcon /> {new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}
                    </div>
                  </div>

                  <div 
                    className={styles.cardExcerpt}
                    dangerouslySetInnerHTML={{ __html: post.excerpt }} 
                  />

                  <div style={{ marginTop: 'auto' }}>
                    <Link href={`/news/${post.slug}`} className={styles.readMore}>
                      Read Article 
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <button className={`${styles.navButton} ${styles.next}`} onClick={scrollNext} aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Right Column: Vertical List */}
      {listPosts.length > 0 && (
        <div className={styles.listArea}>
          <h3 className={styles.listHeader}>OutReach</h3>
          <div>
            {listPosts.map((post) => {
              const firstName = post.author?.node?.firstName;
              const lastName = post.author?.node?.lastName;
              const fullAuthorName = (firstName && lastName) ? `${firstName} ${lastName}` : null;
              const authorName = fullAuthorName || post.author?.node?.name || "Delta Health Center";
              const categoryName = post.categories?.nodes?.[0]?.name || "News";
              
              return (
                <article key={post.id} className={styles.listItem}>
                  <Link href={`/news/${post.slug}`} className={styles.listTitle}>
                    {post.title}
                  </Link>
                  <div className={styles.listMeta}>
                    <div className={styles.metaItem}>
                      <UserIcon /> {authorName}
                    </div>
                    <div className={styles.metaItem}>
                      <CalendarIcon /> {new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}
                    </div>
                    <div className={styles.metaItem}>
                      <FolderIcon /> {categoryName}
                    </div>
                  </div>
                  <div 
                    className={styles.listExcerpt}
                    dangerouslySetInnerHTML={{ __html: post.excerpt }} 
                  />
                </article>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
