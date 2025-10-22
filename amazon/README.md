# Amazon Affiliate Review Pages

This directory contains SEO-optimized Amazon affiliate review pages designed to rank highly on Google and drive conversions.

## 📁 Directory Structure

```
/amazon/
├── AMAZON_REVIEW_GUIDE.md    # Comprehensive SEO guide
├── CHECKLIST.md               # Quick checklist for new pages
├── TEMPLATE.html              # Reusable HTML template
├── README.md                  # This file
└── [product-slug]/            # Individual product review directories
    └── index.html             # Review page
```

## 🚀 Quick Start

**New to creating review pages?** Start with our [QUICK_START.md](./QUICK_START.md) guide - create your first review in 30 minutes!

### Creating a New Review Page (Overview)

1. **Prepare Product Information**
   - Use [PRODUCT_RESEARCH_TEMPLATE.md](./PRODUCT_RESEARCH_TEMPLATE.md) to gather all data
   - Get Amazon affiliate link
   - Collect product specs, ratings, and reviews
   - Download high-quality product images
   - Research target keywords

2. **Copy Template**
   ```bash
   # Create new directory for your product
   mkdir -p /amazon/[your-product-slug]/
   
   # Copy template
   cp /amazon/TEMPLATE.html /amazon/[your-product-slug]/index.html
   ```

3. **Customize Content**
   - Replace all placeholders (marked with `[BRACKETS]`)
   - Add unique product information
   - Write comprehensive pros, cons, and features
   - Create helpful FAQs
   - Update meta tags and schemas

4. **Validate & Test**
   - Run through CHECKLIST.md
   - Test with Google Lighthouse (target: Performance >90, SEO >95)
   - Validate HTML and structured data
   - Test on mobile devices

5. **Deploy**
   - Commit changes
   - Push to repository
   - Submit URL to Google Search Console

**📖 Detailed Instructions**: See [QUICK_START.md](./QUICK_START.md) for step-by-step guide

## 📚 Documentation

### Main Documents

1. **[QUICK_START.md](./QUICK_START.md)** ⭐ START HERE
   - Step-by-step guide for beginners
   - Create your first review in 30 minutes
   - Common mistakes to avoid
   - Time-saving tips

2. **[PRODUCT_RESEARCH_TEMPLATE.md](./PRODUCT_RESEARCH_TEMPLATE.md)**
   - Structured template for gathering product data
   - All fields needed for a complete review
   - Category-specific specifications
   - SEO keyword planning

3. **[AMAZON_REVIEW_GUIDE.md](./AMAZON_REVIEW_GUIDE.md)**
   - Complete SEO strategy guide
   - Keyword research tips
   - Content structure best practices
   - Performance optimization
   - Conversion optimization techniques

4. **[CHECKLIST.md](./CHECKLIST.md)**
   - Pre-writing checklist
   - Content checklist
   - Technical checklist
   - Testing checklist
   - Deployment checklist

5. **[TEMPLATE.html](./TEMPLATE.html)**
   - Ready-to-use HTML template
   - Embedded CSS (optimized for performance)
   - Structured data schemas
   - Responsive design
   - All placeholders clearly marked

## 🎯 SEO Targets

### Performance Goals
- **Lighthouse Performance**: >90
- **Lighthouse SEO**: >95
- **Lighthouse Accessibility**: >90
- **LCP** (Largest Contentful Paint): <2.5s
- **CLS** (Cumulative Layout Shift): <0.1
- **INP** (Interaction to Next Paint): <200ms

### SEO Elements (All Pages Must Have)
✅ Optimized title tag (50-60 chars)  
✅ Compelling meta description (≤155 chars)  
✅ Product schema (JSON-LD)  
✅ FAQ schema (JSON-LD)  
✅ Breadcrumb schema (JSON-LD)  
✅ Open Graph tags  
✅ Twitter Card tags  
✅ Canonical URL  
✅ Semantic HTML5 structure  
✅ Mobile-responsive design  
✅ Image optimization with alt text  

## 🔧 Template Placeholders

When using TEMPLATE.html, replace these placeholders:

### Required Replacements
| Placeholder | Description | Example |
|-------------|-------------|---------|
| `[PRODUCT_NAME]` | Full product name | "Green Soul Jupiter Pro" |
| `[CATEGORY]` | Product category | "ergonomic office chair" |
| `[SLUG]` | URL-friendly slug | "green-soul-jupiter-pro-review" |
| `[RATING]` | Star rating | "4.3" |
| `[REVIEW_COUNT]` | Number of reviews | "16000" |
| `[AFFILIATE_LINK]` | Amazon affiliate link | "https://amzn.to/XXXXX" |
| `[PRICE]` | Price in INR | "13999" |
| `[BRAND_NAME]` | Brand/manufacturer | "Green Soul" |
| `[PRODUCT_IMAGE_URL]` | Full image URL | "https://..." |
| `[PUBLISH_DATE]` | ISO date | "2025-01-15" |

See CHECKLIST.md for complete list of placeholders.

## 📋 Page Structure

Every review page follows this structure:

1. **Above the Fold**
   - Disclosure banner
   - Breadcrumb navigation
   - Hero badge
   - Product image
   - H1 heading with keyword
   - Rating display
   - Trust badges
   - Primary CTA button

2. **Quick Navigation**
   - Table of contents with anchor links

3. **Main Content**
   - Overview section
   - Pros & Cons grid
   - Key Features
   - Technical Specifications table
   - Alternatives comparison
   - FAQ section
   - Final Verdict

4. **Conversion Elements**
   - Final CTA section (gradient background)
   - Sticky CTA button (mobile-friendly)
   - Footer with disclosure

## 🎨 Design System

### Colors
```css
Primary Blue:    #2563eb
Secondary Green: #10b981
Accent Amber:    #f59e0b
Text Dark:       #1f2937
Text Light:      #6b7280
Background:      #f9fafb
```

### Typography
- Font: System font stack (fast loading)
- H1: 2.75rem (44px), weight 800
- H2: 2rem (32px), weight 700
- H3: 1.5rem (24px), weight 600
- Body: 1.0625rem (17px), line-height 1.75

### Responsive Breakpoints
- Mobile: 320px - 767px (default)
- Tablet: 768px - 1023px
- Desktop: 1024px+

## ✅ Quality Standards

### Content Requirements
- **Minimum Word Count**: 2000 words
- **Original Content**: 100% unique, no copying from Amazon
- **Keyword Density**: 1-2% for primary keyword
- **Readability**: Grade 8-10 reading level
- **Tone**: Helpful, informative, conversational

### SEO Requirements
- One H1 tag only
- 6-8 H2 sections
- Primary keyword in first 100 words
- Natural keyword distribution
- Internal links where relevant
- All images with descriptive alt text
- Proper heading hierarchy

### Affiliate Compliance
- Disclosure banner at top
- All affiliate links: `rel="nofollow sponsored"`
- All affiliate links: `target="_blank"`
- Footer disclosure
- Clear distinction between ads and content

## 🧪 Testing Process

Before deployment, every page must pass:

1. **Validation**
   - [ ] W3C HTML Validator
   - [ ] Google Rich Results Test
   - [ ] Schema.org validator

2. **Performance**
   - [ ] Google Lighthouse (all scores >90)
   - [ ] PageSpeed Insights (mobile & desktop)
   - [ ] Test on real mobile device

3. **Functionality**
   - [ ] All affiliate links work
   - [ ] Anchor links navigate correctly
   - [ ] Sticky CTA appears on scroll
   - [ ] Images load properly
   - [ ] Responsive on all breakpoints

4. **SEO**
   - [ ] Canonical URL correct
   - [ ] Meta tags complete
   - [ ] Structured data valid
   - [ ] No duplicate content
   - [ ] Mobile-friendly

## 📊 Existing Reviews

| Product | Slug | Status |
|---------|------|--------|
| Green Soul Jupiter Pro | green-soul-jupiter-pro-review | ✅ Live |

## 🛠️ Tools & Resources

### Validation & Testing
- [W3C Validator](https://validator.w3.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### SEO Tools
- [Google Search Console](https://search.google.com/search-console)
- [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/)

### Image Optimization
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

## 🔄 Maintenance

### Regular Updates
- Review and update product prices monthly
- Check affiliate links quarterly
- Update content if product changes
- Monitor keyword rankings
- Refresh publication dates for major updates

### Performance Monitoring
- Check Core Web Vitals monthly
- Monitor page load times
- Review bounce rates and engagement
- Track affiliate click-through rates
- Update based on user feedback

## 📞 Support

For questions or issues:
- Review the comprehensive guide: AMAZON_REVIEW_GUIDE.md
- Check the checklist: CHECKLIST.md
- Refer to existing example: green-soul-jupiter-pro-review/

## 📝 Changelog

### Version 1.0 (January 2025)
- Initial documentation created
- Template and guide finalized
- Checklist implemented
- First review page (Green Soul Jupiter Pro) published

---

**Last Updated**: January 2025  
**Maintained by**: Kaaviya SivaKumar  
**License**: Proprietary
