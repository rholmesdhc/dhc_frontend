import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './NewsArticle.module.css';

// SVG Icons
const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const GET_POST_BY_SLUG = `
  query GetPostBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      content
      date
      author {
        node {
          name
          firstName
          lastName
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`;

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

// Fallback Mock Data for Demo Resilience
const mockData: Record<string, any> = {
  'how-ai-is-revolutionizing-healthcare-at-delta-health-center': {
    title: 'How AI is Revolutionizing Healthcare at Delta Health Center',
    content: '<p>Artificial Intelligence (AI) is transforming the way we deliver patient care. At Delta Health Center, we are exploring cutting-edge AI diagnostic tools to help our providers make faster, more accurate decisions.</p><p>From predictive analytics in maternal health to AI-assisted dental imaging, technology is allowing us to reach more patients and improve outcomes across our Mississippi clinics.</p>',
    date: new Date().toISOString(),
    authorName: 'Dr. Marketta Blue',
    categoryName: 'Technology'
  },
  'why-delta-health-center': {
    title: 'Why Delta Health Center?',
    content: '<p>Hear from community advocates, patients and providers on why you should choose Delta Health Center for your healthcare and wellness needs.</p><p>Delta Health Center prides itself on making sure we give our patients the attention they need when visiting one of our clinics. We make sure our providers have access to the technology and data needed to make sound decisions on the health of their patients.</p><p>Listen to Pastor Darryl Johnson as he talks about the history of Delta Health Center and its long-lasting impact on the local community.</p>',
    date: new Date().toISOString(),
    authorName: 'Pastor Darryl Johnson',
    categoryName: 'Community'
  },
  'delta-health-center-recognized-for-community-excellence': {
    title: 'Delta Health Center Recognized for Community Excellence',
    content: '<p>We are incredibly honored to receive this year\'s regional award for outstanding community health impact and expanded patient care services.</p><p>This award highlights our continued dedication to providing essential medical care to vulnerable populations across the Mississippi Delta.</p>',
    date: new Date().toISOString(),
    authorName: 'Delta Health Center',
    categoryName: 'Awards'
  }
};

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post = null;

  try {
    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "http://dhc2.local/graphql";
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        query: GET_POST_BY_SLUG,
        variables: { id: slug }
      }),
      cache: "no-store",
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      post = json.data?.post;
    }
  } catch (e) {
    console.warn("Failed to fetch specific post from WPGraphQL. Falling back to mock data.");
  }

  // Fallback to Mock if WP is unreachable or post not found
  if (!post && mockData[slug]) {
    post = mockData[slug];
  }

  if (!post) {
    notFound();
  }

  // Format Data
  const title = post.title;
  const content = post.content;
  const dateOptions: Intl.DateTimeFormatOptions = { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric', 
    hour: 'numeric', 
    minute: '2-digit' 
  };
  const date = new Date(post.date).toLocaleDateString(undefined, dateOptions);
  
  const firstName = post.author?.node?.firstName;
  const lastName = post.author?.node?.lastName;
  const fullAuthorName = (firstName && lastName) ? `${firstName} ${lastName}` : null;
  const authorName = fullAuthorName || post.author?.node?.name || post.authorName || "Delta Health Center";
  const categoryName = post.categories?.nodes?.[0]?.name || post.categoryName || "News";
  
  // Resolve Image
  const imageUrl = post.featuredImage?.node?.sourceUrl || fallbackImages[slug] || "/images/dhc_entrance_new.png";

  return (
    <main className={styles.articlePage}>
      
      {/* Hero Header */}
      <section className={styles.hero}>
        <img src="/images/hero-composite.png" alt="Background" className={styles.heroBg} />
        <div className={styles.heroContent}>
          <div className={styles.categoryBadge}>{categoryName}</div>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <UserIcon /> {authorName}
            </div>
            <div className={styles.metaItem}>
              <CalendarIcon /> {date}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className={styles.contentContainer}>
        
        <div className={styles.featuredImageWrapper}>
          <img src={imageUrl} alt={title} className={styles.featuredImage} />
        </div>

        <div className={styles.articleBody} dangerouslySetInnerHTML={{ __html: content }} />

      </section>

      <div className={styles.backLinkWrapper}>
        <Link href="/" className={styles.backLink}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Homepage
        </Link>
      </div>

    </main>
  );
}
