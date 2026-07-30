# 🛒 Copilot Instructions for Amazon Affiliate Product Reviews

This repository hosts static HTML pages for Amazon Affiliate product reviews, optimized for SEO, speed, and compliance with Amazon Associates policies.

## 🎯 Primary Goal
Generate high-quality **product review pages** under `/amazon/<product-slug>/index.html` that:
- Rank well on Google for target keywords
- Convert visitors to Amazon purchases
- Comply with Amazon Associates Program Operating Agreement
- Pass Core Web Vitals assessments
- Provide genuine value to readers

## 📁 File Structure
Each product review should be organized as:
```
/amazon/
  └── <product-slug>/
      ├── index.html    (Main review page)
      └── README.md     (Optional: Editing instructions)
```

## 🧩 Required Page Sections

Every product review page **MUST** include these sections in order:

### 1. Complete `<head>` Section
- **Title Tag**: `<Product Name> Review (2025) — <Benefit/Category>` (55-60 chars)
- **Meta Description**: Include rating, review count, key benefits (150-160 chars)
- **Keywords**: Product name variations, category, "review", "India", "price", "2025"
- **Canonical URL**: `https://ksk-apps.xyz/amazon/<product-slug>/`
- **Open Graph Tags**: title, description, image, url, type, site_name
- **Twitter Card Tags**: card (summary_large_image), title, description, image
- **Favicon**: Link to `/favicon.svg`

### 2. JSON-LD Structured Data
Include TWO schema types:

**a) Product Schema** (`@type: "Product"`):
- name, description, image (Amazon product image URL)
- brand (with @type: "Brand")
- aggregateRating (ratingValue, reviewCount, bestRating: 5, worstRating: 1)
- offers (url with affiliate link, priceCurrency: "INR", price, priceValidUntil, availability, seller)
- review (reviewRating, author, datePublished, reviewBody)

**b) BreadcrumbList Schema** (`@type: "BreadcrumbList"`):
- Home → Amazon Reviews → [Product Name] Review

**c) FAQPage Schema (Optional)** (`@type: "FAQPage"`):
- Include if page has FAQ section
- mainEntity array with Question/Answer pairs

### 3. Affiliate Disclosure Banner
Place at the top of the page (before hero section):
```html
<div class="affiliate-disclosure">
  ⓘ As an Amazon Associate I earn from qualifying purchases. This means I may earn a small commission if you purchase through my links at no extra cost to you.
</div>
```
**Style**: Yellow/amber background, prominent but not intrusive, dismissible optional

### 4. Hero Section
- Product name as `<h1>` (e.g., "Green Soul Jupiter Pro Review (2025)")
- Product image (use Amazon product image URL from schema)
- Star rating display (e.g., ⭐ 4.3/5 | 16,000+ Reviews)
- Primary CTA button: "Check Price on Amazon ➜"
  - Link to Amazon affiliate URL
  - Include `rel="nofollow sponsored"` attribute
  - Target: `_blank`
- Brief tagline (1-2 sentences about the product)

### 5. Quick Navigation (Optional but Recommended)
- Jump links to major sections (Overview, Pros & Cons, Features, Specs, FAQ, Verdict)
- Improves user experience and dwell time

### 6. Overview Section
- 2-3 paragraphs introducing the product
- Who it's for (target audience)
- Key selling points and unique features
- Price range mention (without exact price due to fluctuation)
- Include naturally: product name, category, key benefits

### 7. Pros & Cons Section
- **Layout**: 2-column grid (responsive: 1 column on mobile)
- **Pros**: Minimum 5 points with ✅ icon
- **Cons**: Minimum 3 points with ❌ icon
- **Honest**: Include real drawbacks, don't oversell

### 8. Key Features Section
- Minimum 4-6 feature subsections
- Each feature with:
  - Icon or emoji
  - Feature name as `<h3>`
  - 2-4 sentences explaining the feature
  - Real-world benefits, not just specifications

### 9. Technical Specifications Section
- HTML `<table>` with specifications
- Minimum rows: Dimensions, Weight, Material, Color options, Warranty
- Format: Two columns (Specification | Details)
- Clean, readable styling

### 10. Alternatives Section (Optional but Recommended)
- 2-3 competing products
- Each with:
  - Product name and brief description
  - Key differentiator from main product
  - Price comparison
  - Link to review or Amazon page

### 11. FAQ Section
- Minimum 5-8 questions
- Format: `<h3>` for question, `<p>` for answer
- Questions should be:
  - Actually frequently asked
  - Include target keywords naturally
  - Provide genuine value
- Examples: "Is it worth the price?", "How long does it last?", "What's the warranty?"

### 12. Final Verdict Section
- Summary paragraph (3-5 sentences)
- Who should buy this product
- Who should skip it
- Overall recommendation
- Final rating restatement

### 13. Final CTA Section
- Similar to hero CTA but with urgency
- Secondary disclosure: "As an Amazon Associate, I earn from qualifying purchases."
- Button: "Buy Now on Amazon ➜" with affiliate link and `rel="nofollow sponsored"`

### 14. Footer
- Copyright notice
- Full affiliate disclosure
- Links to Privacy Policy, Terms (if available)
- Sitemap link

## 🎨 Design & Styling Requirements

### CSS Approach
- **Embedded CSS**: All styles in `<style>` tag (no external stylesheet for speed)
- **Mobile-First**: Responsive design using media queries
- **Performance**: Minimal CSS, no unnecessary frameworks

### Color Scheme
```css
--primary: #2563eb;      /* Blue */
--secondary: #10b981;    /* Green */
--accent: #f59e0b;       /* Amber */
--text: #1f2937;         /* Dark gray */
--bg: #ffffff;           /* White */
--bg-light: #f9fafb;     /* Light gray */
```

### Typography
- **Font**: System font stack or Google Fonts (Inter, Roboto, or Open Sans)
- **H1**: 2.5rem (mobile: 2rem)
- **H2**: 2rem (mobile: 1.5rem)
- **H3**: 1.5rem (mobile: 1.25rem)
- **Body**: 1.125rem line-height: 1.7

### Buttons
- **Primary CTA**: Bold color, rounded corners, hover effects
- **Shadow**: Subtle box-shadow for depth
- **Padding**: Generous (1rem 2rem)
- **Transitions**: Smooth (0.3s ease)

### Spacing
- **Section padding**: 4rem 0 (mobile: 2rem 0)
- **Container max-width**: 1200px
- **Content max-width**: 800px (for readability)

## 🔍 SEO Requirements

### Target Keywords
For each product, target these keyword patterns:
1. `<product name> review`
2. `<product name> price India`
3. `best <category> 2025`
4. `<product name> vs <competitor>`
5. `<product name> features`
6. `is <product name> worth it`

### Keyword Usage
- **Title tag**: Primary keyword at start
- **H1**: Exact match or close variant
- **First paragraph**: Primary keyword in first 100 words
- **H2/H3**: Include secondary keywords naturally
- **Alt text**: Descriptive with product name
- **URL slug**: Primary keyword (lowercase, hyphens)

### Content Quality
- **Length**: 2000-3000 words minimum
- **Readability**: Use short paragraphs (3-4 sentences max)
- **Formatting**: Use bullet points, tables, bold text for scannability
- **Unique**: 100% original content, no copying from Amazon or other sources
- **Helpful**: Answer user intent, provide real value

### Technical SEO
- **Semantic HTML5**: Use proper tags (`<article>`, `<section>`, `<header>`, `<footer>`)
- **Heading Hierarchy**: Single H1, logical H2/H3 structure
- **Internal Links**: Link to homepage, other reviews, category pages
- **External Links**: Only to Amazon (with proper rel attributes)
- **Image Optimization**: Descriptive alt text, appropriate dimensions
- **Loading Speed**: Aim for <2s First Contentful Paint

## ⚡ Core Web Vitals Targets

### Largest Contentful Paint (LCP)
- **Target**: < 2.5 seconds
- **How**: Minimize CSS, optimize images, inline critical CSS

### First Input Delay (FID)
- **Target**: < 100 milliseconds
- **How**: Minimize JavaScript, use async/defer

### Cumulative Layout Shift (CLS)
- **Target**: < 0.1
- **How**: Set explicit dimensions for images, avoid injected content

### Implementation Tips
- Use embedded CSS (no external stylesheet requests)
- Lazy load images below fold (optional)
- Minimize DOM size
- Use Amazon CDN URLs for product images (already optimized)

## 📜 Amazon Associates Compliance

### Required Disclosures
Include disclosure in **THREE locations**:
1. **Top banner** (prominent, above fold)
2. **Before/after CTA buttons**
3. **Footer** (standard disclosure)

### Disclosure Text (Required)
> "As an Amazon Associate I earn from qualifying purchases."

### Link Requirements
- Use proper Amazon affiliate links with your tracking ID
- Include `rel="nofollow sponsored"` on ALL affiliate links
- Open in new tab (`target="_blank"`)
- Include `rel="noopener noreferrer"` for security

### Content Rules
- Don't copy Amazon content verbatim
- Don't display exact prices (use ranges or "Check price")
- Update ratings/reviews count if Amazon data changes
- Don't make false claims about products
- Don't pressure or mislead visitors

## 📊 Rating & Review Display

### If Product Has Reviews
- Display aggregate rating (e.g., ⭐ 4.3/5)
- Show review count (e.g., "16,000+ Reviews")
- Include in hero section and schema
- Update periodically from Amazon

### If No Reviews Yet
- Omit rating display
- Use "Newly Launched" or similar designation
- Exclude aggregateRating from schema
- Focus on features and specifications

## 🛠️ File Naming Conventions

### Product Slug
- Lowercase only
- Use hyphens (not underscores)
- Include brand and model
- Keep concise (5-7 words max)
- Examples:
  - `green-soul-jupiter-pro-review`
  - `boat-airdopes-141-review`
  - `mi-power-bank-20000mah-review`

### Amazon Image URLs
- Use direct Amazon CDN URLs (m.media-amazon.com)
- Choose high-resolution images (1500x1500 or larger)
- Prefer white background product shots

## 📝 Content Writing Style

### Tone
- **Conversational**: Write like talking to a friend
- **Honest**: Include real pros and cons
- **Helpful**: Focus on answering questions
- **Professional**: No slang, proper grammar

### Perspective
- Use **second person** ("you") when addressing reader
- Use **first person** ("I") for personal opinions/testing
- Avoid passive voice where possible

### Sentences
- Vary length for rhythm
- Average 15-20 words
- One idea per sentence
- Use transition words

### Paragraphs
- 2-4 sentences maximum
- Single topic per paragraph
- Use whitespace generously

## 🔄 Template Variables to Customize

When creating a new review, replace these:
- `{{PRODUCT_NAME}}` - Full product name
- `{{BRAND}}` - Brand name
- `{{CATEGORY}}` - Product category
- `{{SLUG}}` - URL slug
- `{{PRICE}}` - Current price range
- `{{RATING}}` - Aggregate rating (1-5)
- `{{REVIEW_COUNT}}` - Number of reviews
- `{{AFFILIATE_URL}}` - Amazon affiliate link
- `{{IMAGE_URL}}` - Amazon product image URL
- `{{PUBLICATION_DATE}}` - Review date (YYYY-MM-DD)

## ✅ Pre-Publication Checklist

Before considering a review complete:
- [ ] All 13 required sections present
- [ ] Title tag 55-60 characters
- [ ] Meta description 150-160 characters
- [ ] Canonical URL set correctly
- [ ] JSON-LD schemas valid (test with Google Rich Results Test)
- [ ] Affiliate disclosure visible in 3 places
- [ ] All affiliate links have `rel="nofollow sponsored"`
- [ ] Product image loads correctly
- [ ] Responsive on mobile (320px+) and desktop
- [ ] No broken links
- [ ] Content is 2000+ words
- [ ] Proper heading hierarchy (single H1)
- [ ] FAQ section has 5+ questions
- [ ] Pros & Cons section included
- [ ] Technical specs table included
- [ ] No spelling/grammar errors
- [ ] Content is unique (not copied)

## 🚫 Things to AVOID

- ❌ Copying Amazon product descriptions verbatim
- ❌ Displaying exact current prices (they fluctuate)
- ❌ Making health/safety claims without evidence
- ❌ Comparing to products you haven't reviewed
- ❌ Using competitor affiliate links (only Amazon)
- ❌ Keyword stuffing (maintain natural flow)
- ❌ Auto-generated or AI-obvious content
- ❌ Missing affiliate disclosures
- ❌ External JavaScript libraries (for speed)
- ❌ Multiple H1 tags
- ❌ Broken or incorrect affiliate links

## 🎓 Example Reference

See `/amazon/green-soul-jupiter-pro-review/index.html` for a complete example implementing all these guidelines.

## 🔧 Maintenance

### Regular Updates
- Review pages quarterly
- Update ratings/review counts if significantly changed
- Check affiliate links are working
- Refresh publication date if major updates made
- Add new FAQ questions based on user queries

### Performance Monitoring
- Use Google Search Console for ranking
- Monitor Core Web Vitals in PageSpeed Insights
- Track affiliate click-through rates
- Analyze user behavior (time on page, bounce rate)

---

**Remember**: The goal is to create genuinely helpful content that serves the reader first, while maintaining compliance with Amazon Associates policies and optimizing for search engines. Quality always trumps quantity.
