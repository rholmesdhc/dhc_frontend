import NewsIndexClient from '../../components/NewsIndexClient';

export const metadata = {
  title: 'News & Updates | Delta Health Center',
  description: 'Stay informed with the latest announcements, health tips, and community outreach efforts from Delta Health Center.',
};

const GET_ALL_POSTS = `
  query GetAllPosts {
    posts(first: 50) {
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

export default async function NewsIndexPage() {
  let posts: any[] = [];
  let error: string | null = null;

  try {
    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "http://dhc2.local/graphql";
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: GET_ALL_POSTS }),
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
    
    // Expanded mock data with images and authors
    posts = [
      {
        id: "mock0",
        title: "Why Delta Health Center?",
        excerpt: "<p>Hear from community advocates, patients and providers on why you should choose Delta Health Center for your healthcare and wellness needs.</p><p>Delta Health Center prides itself on making sure we give our patients the attention they need when visiting one of our clinics. We make sure our providers have access to the technology and data needed to make sound decisions on the health of their patients.</p><p>Listen to Pastor Darryl Johnson as he talks about the history of Delta Health Center and its long-lasting impact on the local community.</p>",
        slug: "why-delta-health-center",
        date: new Date().toISOString(),
        author: { node: { name: "Pastor Darryl Johnson" } },
        featuredImage: { node: { sourceUrl: "/images/dhc_entrance.jpg" } },
        categories: { nodes: [{ name: "Community" }] }
      },
      {
        id: "mock1",
        title: "Delta Health Center Recognized for Community Excellence",
        excerpt: "<p>We are incredibly honored to receive this year's regional award for outstanding community health impact and expanded patient care services.</p>",
        slug: "recognized-community-excellence",
        date: new Date().toISOString(),
        author: { node: { name: "Marketta Blue" } },
        featuredImage: { node: { sourceUrl: "/images/dhc_entrance_new.png" } },
        categories: { nodes: [{ name: "Outreach" }] }
      },
      {
        id: "mock2",
        title: "Upcoming Community Health Fair details",
        excerpt: "<p>Join us this weekend for our annual health fair! We will be providing complimentary health screenings, wellness consultations, and family activities.</p>",
        slug: "community-health-fair",
        date: new Date(Date.now() - 86400000 * 5).toISOString(),
        author: { node: { name: "Nadia Bethley" } },
        featuredImage: { node: { sourceUrl: "/images/provider_hero.png" } },
        categories: { nodes: [{ name: "Outreach" }] }
      },
      {
        id: "mock3",
        title: "Welcoming New Pediatricians to Our Team",
        excerpt: "<p>Delta Health Center is proud to introduce three new pediatric specialists who will help us continue providing top-tier medical care to youths.</p>",
        slug: "welcoming-new-pediatricians",
        date: new Date(Date.now() - 86400000 * 14).toISOString(),
        author: { node: { name: "John Smith" } },
        featuredImage: { node: { sourceUrl: "/images/pediatric_care_child.png" } },
        categories: { nodes: [{ name: "Announcements" }] }
      },
      {
        id: "mock4",
        title: "New Behavioral Health Clinic Opens",
        excerpt: "<p>Our new dedicated behavioral health facility is now open to the public, offering expanded counseling and therapy services.</p>",
        slug: "new-behavioral-health-clinic",
        date: new Date(Date.now() - 86400000 * 20).toISOString(),
        author: { node: { name: "Jane Doe" } },
        categories: { nodes: [{ name: "News" }] }
      },
      {
        id: "mock5",
        title: "Nutrition Tips for the Summer",
        excerpt: "<p>Stay healthy this summer with these top nutrition tips from our registered dietitians. Hydration and seasonal fruits are key!</p>",
        slug: "nutrition-tips-summer",
        date: new Date(Date.now() - 86400000 * 25).toISOString(),
        author: { node: { name: "Alice Johnson" } },
        categories: { nodes: [{ name: "Health Tips" }] }
      },
      {
        id: "mock6",
        title: "Understanding Your Patient Rights",
        excerpt: "<p>Every patient deserves to know their rights and responsibilities. Here is a comprehensive guide to navigating your healthcare experience.</p>",
        slug: "understanding-patient-rights",
        date: new Date(Date.now() - 86400000 * 30).toISOString(),
        author: { node: { name: "Legal Team" } },
        categories: { nodes: [{ name: "Outreach" }] }
      }
    ];
  }

  return (
    <main>
      <NewsIndexClient posts={posts} />
    </main>
  );
}
