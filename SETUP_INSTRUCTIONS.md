# Setup Instructions for Local Assets

## Image Asset Setup

The Green Soul Jupiter Pro review page has been updated to use locally hosted images instead of hotlinking from Amazon's CDN. This improves performance, reliability, and SEO.

### Required Action: Download Hero Image

**Important:** You need to manually download the hero image and place it in the assets directory.

#### Steps:

1. **Download the image:**
   - Open your browser and navigate to: https://m.media-amazon.com/images/I/71ClGjocCKL._SL1500_.jpg
   - Save the image to your computer

2. **Optimize the image (Recommended):**
   - For optimal social media sharing (Open Graph), resize the image to 1200x630 pixels
   - Use tools like:
     - Online: TinyPNG (https://tinypng.com/), Squoosh (https://squoosh.app/)
     - Desktop: GIMP, Photoshop, or Preview (Mac)
   - Keep the file size under 300KB for best performance

3. **Place the image:**
   - Rename the downloaded/optimized image to: `green-soul-jupiter-pro.jpg`
   - Move it to the `/assets/` directory in the repository root
   - The final path should be: `/assets/green-soul-jupiter-pro.jpg`

4. **Commit and push:**
   ```bash
   git add assets/green-soul-jupiter-pro.jpg
   git commit -m "Add hero image for Green Soul Jupiter Pro review"
   git push
   ```

### Why This Change?

- **Performance:** Hosting images locally eliminates external HTTP requests and potential Amazon CDN latency
- **Reliability:** No risk of broken links if Amazon changes their CDN structure
- **Control:** Ability to optimize image dimensions and file size for your needs
- **SEO:** Better control over image metadata and loading behavior
- **CORS:** Avoids potential Cross-Origin Resource Sharing issues

### Verification

After adding the image, verify it displays correctly by:
1. Opening the review page locally or on the deployed site
2. Checking browser DevTools Network tab to confirm the image loads from `/assets/`
3. Testing social sharing previews on Facebook Debugger and Twitter Card Validator

## Additional SEO Improvements Made

The following SEO and accessibility improvements have been implemented:

✅ **Image alt attribute:** Hero image already had descriptive alt text
✅ **Canonical URL:** Added trailing slash for consistency (`/amazon/green-soul-jupiter-pro-review/`)
✅ **Structured data:** Breadcrumb schema already existed
✅ **Image loading:** Changed from `eager` to `lazy` loading for better performance
✅ **Image dimensions:** Width and height attributes already present to prevent layout shift
✅ **Local hosting:** Updated all image references to use local path instead of Amazon CDN
✅ **URL consistency:** All URLs now consistently use trailing slashes

## Next Steps (Optional)

Consider these additional optimizations:
- Run Lighthouse audit in Chrome DevTools to identify further improvements
- Test mobile responsiveness on various devices
- Validate structured data using Google's Rich Results Test
- Check page speed with PageSpeed Insights
- Add alternative chair images with thumbnails in the alternatives section
