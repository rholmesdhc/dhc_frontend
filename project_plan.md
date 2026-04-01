# Delta Health Center Website Redesign Plan

## 1. Executive Summary
The goal of this project is to complete the modernization of the Delta Health Center website using a Next.js frontend (headless WordPress architecture). The project focuses on a premium, responsive design, improved patient user experience, and seamless content management.

## 2. Current State Analysis
**Completed Foundation:**
- Next.js `app` router setup with Apollo Client integration for GraphQL.
- Core UI components built: `Header`, `Footer`, `Hero`, `ServicesGrid`, `StandOut`, `LatestNews`, `ActionCards`.
- Initial `/find-a-provider` route foundation.

**Unfinished Homepage Work:**
- The "Why Choose Delta Health Center?" section is currently heavily hardcoded inline and needs to be componentized.
- `ActionCards` component exists but is not yet integrated into the `page.tsx`.
- Placeholder images and text need to be swapped with actual production assets.

---

## 3. Project Phases & Tasks

### Phase 1: Asset Migration & Content Integration (Critical Path)
- [ ] **Audit Legacy Assets:** Identify all required photos, icons, and documents from the old WordPress media library.
- [ ] **Export & Optimize:** Download structural images (hero backgrounds, facility photos, provider headshots, service icons) and optimize them for the web (WebP/AVIF formats).
- [ ] **Move to Next.js:** Place all optimized assets into the `public/images/` directory.
- [ ] **Implement Next `Image`:** Refactor existing components (`Hero`, `ServicesGrid`, `StandOut`) to use the Next.js `<Image>` component for automatic optimization, replacing generic `<img>` tags and placeholder URLs.

### Phase 2: Homepage Completion (Critical Path)
- [ ] **Componentize "Why Choose Us":** Extract the hardcoded inline section into a reusable `WhyChooseUs` component.
- [ ] **Integrate ActionCards:** Add the `ActionCards.tsx` component to the homepage for quick patient actions (e.g., Patient Portal, Request Appointment, Bill Pay).
- [ ] **Responsive Polish:** Conduct a thorough review of the homepage on mobile, tablet, and desktop viewports to ensure grid alignments and typography scale correctly.

### Phase 3: Core Subpages & Routing (Critical Path)
- [ ] **Service Pages:** Create route templates for core services (`/behavior-health`, `/dental-care`, `/family-medical-care`, `/womens-health`, `/pediatric-care`).
- [ ] **Provider Directory:** Build out the `/find-a-provider` search interface with filtering by location and specialty.
- [ ] **Location & Contact:** Implement an interactive `/locations` page with maps and contact forms.

### Phase 4: Headless Data Integration 
- [ ] **Dynamic Content Linking:** Wire up remaining Apollo GraphQL queries to fetch Page content, Team members (Providers), and Services directly from the local WordPress backend.
- [ ] **Fallback States:** Add loading skeletons and error boundaries for all data-fetching components.

### Phase 5: Production Readiness 
- [ ] **SEO Setup:** Implement dynamic Next.js Metadata API (`generateMetadata`) for title tags, meta descriptions, and OpenGraph tags per page.
- [ ] **Accessibility (a11y):** Audit color contrast, ARIA labels, semantic HTML tags, and keyboard navigation.
- [ ] **Performance Audit:** Run Lighthouse scores targetting 90+ for Performance, Accessibility, Best Practices, and SEO.
- [ ] **Environment Configuration:** Set up `.env.production` with live WordPress GraphQL endpoints and analytics keys.
- [ ] **Platform Deployment:** Deploy the optimized build to a production hosting platform (e.g., Vercel) and map the custom domain.

---

## 4. Critical Path Schedule

This schedule focuses strictly on the tasks required to launch a functional, minimum viable product (MVP) of the redesign.

| Milestone | Timeframe | Focus Area | Key Deliverables |
| :--- | :--- | :--- | :--- |
| **Week 1** | Days 1-5 | Asset Migration & Homepage | Optimized images moved to `public/`, Homepage UI fully complete & responsive. |
| **Week 2** | Days 6-10 | Subpages & Data Integration | `/find-a-provider` functional, standard service pages built, Apollo queries fetching live WP data. |
| **Week 3** | Days 11-14 | Production Polish & Launch | SEO metadata configured, Lighthouse audit passed, deployed to production hosting. |

> [!IMPORTANT]
> To stay on the Critical Path, defer migrating non-essential blog posts and secondary pages until after the MVP launch. Focus purely on Homepage, Services, and Providers.
