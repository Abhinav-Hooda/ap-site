# SEO Implementation Plan for Abhinav Properties

This document outlines a structured, task-by-task plan to improve the Search Engine Optimization (SEO) of the Abhinav Properties React/Vite website. 

---

## Phase 1: `<head>` Metadata & Open Graph Tags
*The goal is to provide search engines and social platforms with clear, concise, and structured information about your website.*

### Tasks
- [ ] **Update Title Tag**
  - Location: `index.html`
  - Action: Change `<title>` to something more keyword-rich like `<title>Abhinav Properties | Real Estate Consultant in Rohtak, Haryana</title>`.
- [ ] **Enhance Meta Description**
  - Location: `index.html`
  - Action: Update the `<meta name="description">` to include primary keywords (plots, flats, commercial). Example: *"Abhinav Properties offers 25+ years of trusted real estate consulting in Rohtak, Haryana. Find your perfect residential plot, flat, or commercial property with us."*
- [ ] **Add Open Graph (OG) Tags**
  - Location: `index.html` (inside `<head>`)
  - Action: Add `og:title`, `og:description`, `og:type` (website), `og:url` (your production URL), and `og:image` (link to a banner image, e.g., your hero background or a dedicated OG image).
- [ ] **Add Twitter Card Tags**
  - Location: `index.html` (inside `<head>`)
  - Action: Add `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, and `twitter:image`.
- [ ] **Add Canonical URL**
  - Location: `index.html`
  - Action: Add `<link rel="canonical" href="https://www.yourdomain.com" />` to prevent duplicate content issues.

---

## Phase 2: Technical SEO & Discoverability
*Ensure search engines can easily crawl, understand, and index the website.*

### Tasks
- [ ] **Create `robots.txt`**
  - Location: `public/robots.txt`
  - Action: Create the file to allow search engines to crawl your site.
    ```text
    User-agent: *
    Allow: /
    Sitemap: https://www.yourdomain.com/sitemap.xml
    ```
- [ ] **Create `sitemap.xml`**
  - Location: `public/sitemap.xml`
  - Action: Since it's a single-page site, create a basic XML sitemap pointing to your main URL and last modification date.
- [ ] **Add Local Business Schema (JSON-LD)**
  - Location: `index.html` (inside `<head>`)
  - Action: Add a `<script type="application/ld+json">` block containing your business Name, Address, Phone Number (NAP data from `src/data/site.ts`), and geo-coordinates to boost local SEO in Rohtak.

---

## Phase 3: Semantic HTML & Accessibility
*Help screen readers and search engine bots better understand the content structure.*

### Tasks
- [ ] **Review Heading Hierarchy**
  - Location: All components (`Hero.tsx`, `About.tsx`, `Projects.tsx`, `Services.tsx`)
  - Action: Ensure there is exactly **one** `<h1>` tag (currently in `Hero.tsx`). Subsequent section titles should be `<h2>`, and sub-items/cards should be `<h3>`. Do not skip heading levels.
- [ ] **Add Descriptive `alt` Attributes to Images**
  - Location: `Hero.tsx`, `About.tsx`, `Projects.tsx`
  - Action: Replace empty `alt=""` attributes with descriptive text. For example, in `Hero.tsx`, use `alt="Abhinav Properties modern residential building in Rohtak"`.
- [ ] **Enhance ARIA Labels on Buttons/Links**
  - Location: `Footer.tsx`, `Navbar.tsx`, `Hero.tsx`
  - Action: Add `aria-label` to social media icons, WhatsApp float buttons, or any icon-only links so search engines and screen readers know where they lead.

---

## Phase 4: Performance & Core Web Vitals
*Site speed is a direct ranking factor for Google.*

### Tasks
- [ ] **Optimize Images**
  - Location: `public/` directory images
  - Action: Ensure large images like `/bg-image-ap.png` and `/img-bg-dark.png` are compressed. Consider converting them to `.webp` format and updating the references in `Hero.tsx`.
- [ ] **Implement Lazy Loading for Below-the-Fold Images**
  - Location: `About.tsx`, `Projects.tsx` (Any image not visible on initial load)
  - Action: Add `loading="lazy"` attribute to `<img>` tags in these components. (Do NOT add this to the Hero background image).
- [ ] **Lighthouse Audit**
  - Action: Run a Google Lighthouse audit in Chrome DevTools to check for any remaining performance, accessibility, or best practices issues.
