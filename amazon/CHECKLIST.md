# Amazon Review Page - Quick Checklist

Use this checklist before publishing any new Amazon affiliate review page.

## Pre-Writing Checklist

- [ ] Product research completed
- [ ] Amazon affiliate link obtained (https://amzn.to/...)
- [ ] Product slug decided (lowercase-with-hyphens)
- [ ] Target keywords identified (primary + 5-10 LSI)
- [ ] Product images downloaded/sourced (600x600px minimum)
- [ ] Current price and rating from Amazon verified
- [ ] Review count from Amazon verified

## Content Checklist

### Meta Tags (Head Section)
- [ ] `<title>` tag: 50-60 chars, includes year + primary keyword
- [ ] Meta description: ≤155 chars, compelling with rating
- [ ] Meta keywords: 10+ relevant keywords
- [ ] Canonical URL set correctly
- [ ] Open Graph tags complete (title, description, image, URL)
- [ ] Twitter Card tags complete
- [ ] Favicon links added

### Structured Data (JSON-LD)
- [ ] Product schema with all required fields
- [ ] AggregateRating included
- [ ] Offers section with affiliate link
- [ ] Review object with author and date
- [ ] Breadcrumb schema
- [ ] FAQ schema (minimum 4 Q&As)

### Content Structure
- [ ] One H1 tag only (includes primary keyword)
- [ ] Primary keyword in first 100 words
- [ ] 6-8 H2 sections:
  - [ ] Overview
  - [ ] Pros & Cons
  - [ ] Key Features
  - [ ] Technical Specifications
  - [ ] Alternatives
  - [ ] FAQ
  - [ ] Final Verdict
- [ ] H3 subheadings where appropriate
- [ ] Minimum 2000 words total
- [ ] Natural keyword distribution (not stuffed)

### Visual Elements
- [ ] Hero image with proper alt text
- [ ] Image dimensions specified (width/height)
- [ ] Hero image uses loading="eager"
- [ ] Other images use loading="lazy"
- [ ] Trust badges section
- [ ] Rating stars visible
- [ ] Pros/cons grid styled correctly
- [ ] Specifications table formatted

### CTAs & Affiliate Links
- [ ] Hero section CTA (above fold)
- [ ] Mid-page CTA (after pros/cons)
- [ ] Final CTA section (gradient background)
- [ ] Sticky CTA button (appears on scroll)
- [ ] All affiliate links have `rel="nofollow sponsored"`
- [ ] All affiliate links open in new tab (`target="_blank"`)
- [ ] Disclosure banner at top of page
- [ ] Footer disclosure present

### SEO Elements
- [ ] Breadcrumb navigation
- [ ] Quick navigation (table of contents)
- [ ] Internal links to related reviews (if applicable)
- [ ] Alt text on all images (descriptive + keyword)
- [ ] Anchor links working (#overview, #faq, etc.)
- [ ] Meta robots tag: "index, follow"
- [ ] Semantic HTML5 tags used

### Trust & Conversion
- [ ] Amazon ratings and review count displayed
- [ ] Trust badges (warranty, delivery, etc.)
- [ ] Social proof mentioned (X,XXX+ buyers)
- [ ] "Who should buy" list
- [ ] "Who might want alternatives" list
- [ ] Clear, actionable CTA text
- [ ] Urgency/scarcity element (optional)

### FAQ Section
- [ ] Minimum 4-6 FAQs
- [ ] Natural language questions
- [ ] Comprehensive answers
- [ ] Matches FAQ schema exactly
- [ ] Common user concerns addressed

## Technical Checklist

### Performance
- [ ] HTML validated (W3C validator)
- [ ] Images optimized (< 200KB each)
- [ ] CSS embedded (not external)
- [ ] Minimal JavaScript (or inline)
- [ ] No blocking resources
- [ ] System fonts used (fast loading)

### Responsive Design
- [ ] Mobile viewport meta tag
- [ ] Mobile breakpoints: 480px, 768px
- [ ] Touch-friendly buttons (44x44px minimum)
- [ ] Readable text on mobile (16px minimum)
- [ ] Images scale properly
- [ ] Tables responsive or scrollable

### Accessibility
- [ ] Alt text on all images
- [ ] Proper heading hierarchy (H1→H2→H3)
- [ ] Sufficient color contrast
- [ ] Links are distinguishable
- [ ] Focus states visible
- [ ] Breadcrumb has aria-label

## Testing Checklist

### Validation
- [ ] W3C HTML Validator - Pass
- [ ] Google Rich Results Test - Pass
- [ ] Schema.org validator - Pass
- [ ] No console errors

### Performance Testing
- [ ] Google Lighthouse - Performance > 90
- [ ] Google Lighthouse - SEO > 95
- [ ] Google Lighthouse - Accessibility > 90
- [ ] Google Lighthouse - Best Practices > 90
- [ ] PageSpeed Insights - Mobile > 90

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] INP (Interaction to Next Paint) < 200ms

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Functional Testing
- [ ] All affiliate links work
- [ ] Sticky CTA appears on scroll
- [ ] Smooth scroll to anchors works
- [ ] Images load correctly
- [ ] No broken links
- [ ] Breadcrumb navigation works
- [ ] Quick navigation links work

### Mobile Testing
- [ ] Test on 390px viewport (iPhone 12 size)
- [ ] Test on 360px viewport (Android common)
- [ ] Test on tablet (768px)
- [ ] Touch targets adequate size
- [ ] Text readable without zoom
- [ ] No horizontal scrolling

## Deployment Checklist

### File Setup
- [ ] Create directory: `/amazon/[slug]/`
- [ ] Save file as: `index.html`
- [ ] Upload product images to `/assets/`
- [ ] Update internal paths correctly

### Git & Version Control
- [ ] Branch: `feature/[slug]-seo-optimized`
- [ ] Commit message descriptive
- [ ] No unnecessary files committed
- [ ] `.gitignore` respected

### Post-Deployment
- [ ] Page accessible at correct URL
- [ ] Canonical URL matches live URL
- [ ] Update sitemap.xml if needed
- [ ] Submit to Google Search Console
- [ ] Test live page on mobile device
- [ ] Share on social media (test OG tags)

## Post-Launch Monitoring

### Week 1
- [ ] Check Google Search Console for errors
- [ ] Verify page indexed by Google
- [ ] Monitor affiliate link clicks
- [ ] Check page load times on real devices

### Month 1
- [ ] Review keyword rankings
- [ ] Analyze user behavior (bounce rate, time on page)
- [ ] Check conversion rate
- [ ] Gather user feedback if possible
- [ ] Update content if price/specs changed

## Quick Reference: Replace These Placeholders

When using TEMPLATE.html, find and replace:

```
[PRODUCT_NAME] - Full product name
[CATEGORY] - Product category (e.g., "office chair", "smartphone")
[BENEFIT] - Primary benefit (e.g., "ergonomic", "fast charging")
[RATING] - Star rating (e.g., "4.3")
[REVIEW_COUNT] - Number of reviews (e.g., "16000")
[KEY_BENEFIT] - Main selling point
[SLUG] - URL-friendly slug
[BRAND_NAME] - Manufacturer/brand
[AFFILIATE_LINK] - Your Amazon affiliate link
[PRODUCT_IMAGE_URL] - Full URL to product image
[PRODUCT_IMAGE_PATH] - Local path to product image
[PRICE] - Current price in INR
[PUBLISH_DATE] - ISO date format (YYYY-MM-DD)
[DETAILED_ALT_TEXT] - Descriptive image alt text
[COMPELLING_SUBTITLE] - Engaging subtitle for hero
[BADGE_TEXT_HERE] - Hero badge text
[TRUST_BADGE_X] - Trust signal text
[FAQ_QUESTION_X] - FAQ question text
[FAQ_ANSWER_X] - FAQ answer text
[PRO_X_TITLE] - Pro point title
[CON_X_TITLE] - Con point title
[FEATURE_CATEGORY_X] - Feature section heading
[SPEC_X_NAME] - Specification label
[SPEC_X_VALUE] - Specification value
[ALTERNATIVE_X_NAME] - Competitor product name
[TARGET_AUDIENCE_X] - Ideal buyer description
[FINAL_VERDICT_SUMMARY] - Concluding statement
[ACTION_VERB] - CTA verb (e.g., "Upgrade", "Buy")
[COMPELLING_FINAL_CTA_TEXT] - Final persuasive text
```

## Common Mistakes to Avoid

❌ **Critical Errors:**
- Missing rel="nofollow sponsored" on affiliate links
- Forgetting disclosure banner
- Keyword stuffing
- Duplicate content from Amazon
- Missing structured data
- No mobile optimization
- Slow page load times
- Broken affiliate links

✅ **Best Practices:**
- Original, unique content
- Natural keyword usage
- Fast loading (< 3s)
- Mobile-first design
- Clear value proposition
- Honest pros and cons
- Comprehensive information
- Strong CTAs

## Resources & Tools

### Validation
- W3C HTML Validator: https://validator.w3.org/
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema Markup Validator: https://validator.schema.org/

### Performance
- Google Lighthouse: Built into Chrome DevTools
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/

### SEO
- Google Search Console: https://search.google.com/search-console
- Google Keyword Planner: https://ads.google.com/home/tools/keyword-planner/
- Ahrefs Keyword Generator: https://ahrefs.com/keyword-generator

### Images
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- Remove.bg: https://www.remove.bg/

### Testing
- BrowserStack: https://www.browserstack.com/
- Responsive Design Checker: https://responsivedesignchecker.com/

---

**Checklist Version**: 1.0  
**Last Updated**: January 2025  
**For**: Amazon Affiliate Review Pages
