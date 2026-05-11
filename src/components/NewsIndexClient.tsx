"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './NewsIndex.module.css';

// SVGs for metadata
const UserIcon = () => (
  <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
  </svg>
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

export default function NewsIndexClient({ posts }: { posts: any[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const cats = new Set<string>();
    posts.forEach(post => {
      post.categories?.nodes?.forEach((cat: any) => {
        if (cat.name) {
          cats.add(cat.name);
        }
      });
    });
    return ['All', ...Array.from(cats)].sort();
  }, [posts]);

  // Filter posts based on active category
  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts;
    return posts.filter(post => 
      post.categories?.nodes?.some((cat: any) => cat.name === activeCategory)
    );
  }, [posts, activeCategory]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>News & Updates</h1>
      <p className={styles.subtitle}>
        Stay informed with the latest announcements, health tips, and community outreach efforts from Delta Health Center.
      </p>

      <div className={styles.filters}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <div className={styles.noResults}>No posts found in this category.</div>
      ) : (
        <div className={styles.grid}>
          {filteredPosts.map(post => {
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
                  <span className={styles.categoryBadge}>{categoryName}</span>
                  
                  <Link href={`/news/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                  </Link>
                  
                  <div className={styles.cardMeta}>
                    <div className={styles.metaItem}>
                      <UserIcon /> {authorName}
                    </div>
                    <div className={styles.metaItem}>
                      <CalendarIcon /> {new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>

                  <div 
                    className={styles.cardExcerpt}
                    dangerouslySetInnerHTML={{ __html: post.excerpt }} 
                  />

                  <Link href={`/news/${post.slug}`} className={styles.readMore}>
                    Read Article 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
