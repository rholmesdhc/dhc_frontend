const GET_LATEST_POSTS = `
  query GetLatestPosts {
    posts(first: 3) {
      nodes {
        id
        title
        excerpt
        slug
        date
      }
    }
  }
`;

export default async function LatestNews() {
  let posts: any[] = [];
  let error: string | null = null;

  try {
    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "http://www.dhc2.local/graphql";
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: GET_LATEST_POSTS }),
      cache: "no-store",
    });

    const json = await res.json();
    if (json.errors) {
      throw new Error(json.errors[0].message);
    }

    posts = json.data?.posts?.nodes || [];
  } catch (e: any) {
    error = e?.message || 'Unknown error occurred';
  }

  return (
    <section style={{ padding: '80px 0', backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '40px', textAlign: 'center' }}>
          Latest News & Updates
        </h2>
        
        {error && (
          <div style={{ padding: '16px', backgroundColor: 'rgba(255,0,0,0.1)', color: 'red', borderRadius: '8px', textAlign: 'center' }}>
            <p>Could not connect to WordPress backend: {error}</p>
            <p style={{ fontSize: '0.875rem', marginTop: '8px' }}>Make sure WPGraphQL is active at http://www.dhc2.local</p>
          </div>
        )}

        {!error && posts.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>No posts found. Add some posts in WordPress!</p>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {posts.map((post: any) => (
            <article key={post.id} style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-tertiary)', marginBottom: '8px', fontWeight: 'bold' }}>
                {new Date(post.date).toLocaleDateString()}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-primary)' }}>
                {post.title}
              </h3>
              <div 
                style={{ color: 'var(--color-text-muted)', marginBottom: '24px', fontSize: '0.95rem' }} 
                dangerouslySetInnerHTML={{ __html: post.excerpt }} 
              />
              <a href={`/news/${post.slug}`} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
