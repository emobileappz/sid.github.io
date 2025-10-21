# Green Soul Jupiter Pro Review - Editing Instructions

This directory contains an SEO-optimized Amazon affiliate article for the Green Soul Jupiter Pro ergonomic office chair (2025 Edition).

## Files in This Directory

- **index.html** - Main review article page with full SEO optimization

## How to Edit the Article

### Updating the Affiliate Link

The affiliate link placeholder `https://amzn.to/49dPhMA` appears in multiple locations:

1. **Hero CTA Button** (line ~289)
2. **Final CTA Button** (line ~608)
3. **JSON-LD Schema** (line ~67)

**To update the affiliate link:**
1. Open `index.html` in a text editor
2. Use Find & Replace to replace all instances of `https://amzn.to/49dPhMA` with your actual Amazon affiliate link
3. Ensure the link includes your Amazon Associate tracking ID

### Updating Product Image

Currently using a placeholder gradient background. To add a real product image:

1. Upload your product image to an accessible location (e.g., `/assets/` folder)
2. Replace the `.hero-image` div content (line ~286) with:
   ```html
   <img src="/assets/green-soul-jupiter-pro.jpg" alt="Green Soul Jupiter Pro Ergonomic Office Chair" class="hero-image">
   ```
3. Update the `og:image` meta tag (line ~18) with the same image URL
4. Update the `twitter:image` meta tag (line ~27) with the same image URL

### Updating Review Content

The article is structured in sections:
- **Overview** - General introduction and key selling points
- **Pros & Cons** - Balanced list of advantages and disadvantages
- **Key Features** - Detailed feature explanations
- **Technical Specifications** - Specification table
- **Alternatives** - Competing products to consider
- **FAQ** - Common questions and answers
- **Final Verdict** - Summary and recommendations

To update any section, simply edit the corresponding HTML content while maintaining the existing HTML structure and classes.

### Updating SEO Meta Tags

Key SEO elements to customize:
- **Title tag** (line ~8): Update if you want to change the page title
- **Meta description** (line ~9): Keep under 160 characters
- **Canonical URL** (line ~13): Update if the final domain changes
- **Open Graph tags** (lines ~16-21): Update for social media sharing
- **JSON-LD Schema** (lines ~35-73): Update product details, ratings, and review info

### Updating Ratings and Reviews

The article references:
- **Overall Rating**: 4.3/5 stars
- **Review Count**: 16,000+ reviews

These appear in:
1. Hero section (line ~291)
2. JSON-LD schema (lines ~49-54)

Update these values if Amazon shows different statistics.

## Compliance Notes

### Amazon Affiliate Disclosure

The page includes Amazon Associate disclosure in three locations:
1. **Top banner** (line ~281) - Highly visible yellow banner
2. **Final CTA section** (line ~613) - Below the call-to-action button
3. **Footer** (line ~622) - Standard disclosure text

**Important:** Do not remove these disclosures. They are required by Amazon's Operating Agreement and FTC guidelines.

### Rel Attributes

All affiliate links include `rel="nofollow sponsored"` attributes (lines ~289, 608) as required by Google's guidelines for affiliate/paid links.

## Testing Checklist

Before publishing changes:
- [ ] Verify all affiliate links work correctly
- [ ] Test page on mobile devices (responsive design)
- [ ] Check that images load properly
- [ ] Validate HTML using [W3C Validator](https://validator.w3.org/)
- [ ] Test social media sharing (Open Graph tags)
- [ ] Verify structured data using [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Ensure all disclosures are visible and prominent

## SEO Optimization

This page includes:
- ✅ Proper meta tags (title, description, keywords, robots)
- ✅ Open Graph tags for social media
- ✅ Twitter Card tags
- ✅ JSON-LD Product schema with ratings
- ✅ Canonical URL
- ✅ Semantic HTML5 structure
- ✅ Responsive design with mobile-first approach
- ✅ Fast-loading embedded CSS (no external stylesheets)
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Alt text for images (when you add real images)

## Support

For questions or issues with this page, contact the site administrator or refer to:
- [Amazon Associates Program Policies](https://affiliate-program.amazon.com/help/operating/policies)
- [FTC Guidelines on Disclosures](https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers)
- [Google Webmaster Guidelines](https://developers.google.com/search/docs/essentials)
