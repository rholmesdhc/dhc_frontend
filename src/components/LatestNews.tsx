import Link from 'next/link';
import NewsCarouselClient from './NewsCarouselClient';

const GET_LATEST_POSTS = `
  query GetLatestPosts {
    posts(first: 15) {
      nodes {
        id
        title
        excerpt
        slug
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
  }
`;

export default async function LatestNews() {
  let posts: any[] = [];
  let error: string | null = null;

  try {
    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "http://dhc2.local/graphql";
    // We add a brief timeout using AbortController to prevent the request from hanging
    // if the endpoint is completely unresponsive locally.
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: GET_LATEST_POSTS }),
      cache: "no-store",
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const text = await res.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch (parseError) {
      throw new Error(`Unexpected non-JSON response from server (started with: ${text.substring(0, 15)}...)`);
    }

    if (json.errors) {
      throw new Error(json.errors[0].message);
    }

    posts = json.data?.posts?.nodes || [];
  } catch (e: any) {
    console.warn("Failed to fetch from WordPress WPGraphQL endpoint, falling back to mock data. Error:", e?.message);
    
    // Example blogs removed from fallback to prevent mock data display
    posts = [];
  }

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#f5f7f9' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '40px', textAlign: 'center', fontFamily: "'Outfit', serif" }}>
          Latest News & Updates
        </h2>
        
        {error && (
          <div style={{ padding: '16px', backgroundColor: 'rgba(255,0,0,0.1)', color: 'red', borderRadius: '8px', textAlign: 'center', marginBottom: '20px' }}>
            <p>Could not connect to WordPress backend: {error}</p>
            <p style={{ fontSize: '0.875rem', marginTop: '8px' }}>Make sure WPGraphQL is active at http://dhc2.local</p>
          </div>
        )}

        {!error && posts.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>No posts found. Add some posts in WordPress!</p>
        )}

        {posts.length > 0 && <NewsCarouselClient posts={posts} />}

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/news" style={{ display: 'inline-block', backgroundColor: 'var(--color-primary)', color: 'white', padding: '12px 30px', borderRadius: '30px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', transition: 'opacity 0.3s ease' }}>
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}
