# Media Placeholders Guide

This guide explains where to add images, videos, and GIFs to replace the current placeholders throughout the DeepFeat website.

## 📁 Media Directory Structure

```
public/
├── images/
│   ├── products/          # Product screenshots and demos
│   ├── applications/      # Industry application images
│   ├── team/             # Team member photos
│   ├── before-after/     # Comparison images
│   └── hero/             # Hero section media
├── videos/
│   ├── demos/            # Product demonstration videos
│   ├── case-studies/     # Customer case study videos
│   └── tutorials/        # How-to videos
└── gifs/
    └── animations/       # Animated demos and UI interactions
```

## 🎯 Priority Media Replacements

### 1. **Hero Section** (Homepage - Top)
**Location**: `src/components/home/Hero.tsx` or use `HeroWithMedia.tsx` for video
- **Type**: Video (MP4) or High-res Image (1920x1080)
- **Content**: Underwater footage, ROV in action, or SubFusion AI dashboard
- **Recommended**: 10-30 second looping video of subsea inspection

### 2. **Product Showcase** (Homepage - Mid)
**Location**: `src/components/home/ProductShowcase.tsx`
- **Type**: Screenshots or Demo Videos
- **Content**:
  - SubFusion AI interface showing multimodal data fusion
  - DeepInsights Dashboard with real-time monitoring
  - Data Acquisition interface with ROV integration
- **Dimensions**: 1200x900 (4:3 ratio) or square

### 3. **Gallery Items** (Homepage - Capabilities & Applications)
**Location**: `src/app/page.tsx` - capabilities and applications arrays
- **Type**: Images (JPG/PNG) or Videos
- **Content**:
  - Offshore windfarm underwater footage
  - Subsea cable inspection imagery
  - Bridge infrastructure underwater shots
- **Dimensions**: 1280x720 (16:9 ratio)

### 4. **Video Showcase** (Homepage - Demos)
**Location**: `src/components/home/VideoShowcase.tsx`
- **Type**: Videos (MP4, WebM)
- **Content**:
  - Offshore windfarm inspection (3-4 minutes)
  - Subsea cable monitoring demo (2-3 minutes)
  - AI training process visualization (GIF acceptable)
  - Full platform walkthrough (10-15 minutes)
- **Dimensions**: 1920x1080 (HD) preferred

### 5. **Before/After Comparisons**
**Location**: `src/components/home/BeforeAfter.tsx`
- **Type**: Side-by-side images
- **Content**:
  - Manual inspection vs AI analysis screenshots
  - Single modality sonar vs multimodal fusion
- **Dimensions**: 800x600 per image

### 6. **Team Member Photos**
**Location**: `src/app/team/page.tsx`
- **Type**: Professional headshots (JPG/PNG)
- **Dimensions**: 400x400 (square)
- **Style**: Consistent background, professional lighting

## 🔧 How to Replace Placeholders

### Option 1: Update Component Props
Add `image` property to data arrays:

```typescript
const capabilities = [
  {
    id: '1',
    title: 'SubFusion AI',
    description: '...',
    image: '/images/products/subfusion-dashboard.jpg', // Add this
  },
];
```

### Option 2: Replace MediaPlaceholder Component
Find `<MediaPlaceholder>` and replace with actual media:

```tsx
// Before
<MediaPlaceholder type="video" aspectRatio="video" label="Demo" />

// After - Image
<Image src="/images/products/demo.jpg" alt="Demo" fill className="object-cover" />

// After - Video
<video autoPlay loop muted playsInline className="w-full h-full object-cover">
  <source src="/videos/demos/subfusion.mp4" type="video/mp4" />
</video>
```

## 🎨 Image Specifications

### **Product Screenshots**
- Format: PNG (with transparency if needed) or JPG
- Resolution: Minimum 1920x1080
- Color Profile: sRGB
- Compression: Optimized for web (use tools like TinyPNG)

### **Videos**
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 (Full HD)
- Frame Rate: 30fps or 60fps
- Bitrate: 5-8 Mbps for high quality
- Length: 10-30 seconds for loops, 2-5 minutes for demos

### **GIFs**
- Format: GIF or WebP (for better compression)
- Resolution: Maximum 1280x720
- Frame Rate: 15-24fps
- Colors: Optimized palette
- File Size: Keep under 5MB

### **Team Photos**
- Format: JPG
- Resolution: 800x800 minimum
- Style: Professional, consistent lighting/background
- File Size: 100-200KB (optimized)

## 🌈 Color Palette for Graphics

When creating custom graphics, use these colors to match the military theme:

### Primary Colors
- **Military Cyan**: `#00e5ff` - Primary accent
- **Tactical Blue**: `#0099cc` - Secondary accent
- **Deep Ocean**: `#005f73` - Hover states

### Light Accents (NEW)
- **Silver**: `#c0c8d0` - Subtle highlights
- **Platinum**: `#e5e8eb` - Light text on dark
- **Steel**: `#a8b2bc` - Medium contrast text
- **White**: `#ffffff` - Maximum contrast

### Dark Colors
- **Deep Black**: `#000000` - Main background
- **Military Dark**: `#0a0f14` - Secondary background
- **Tactical Gray**: `#1a2128` - Tertiary background

## 📊 MediaPlaceholder Component Reference

The `MediaPlaceholder` component is used throughout the site. Props:

```tsx
<MediaPlaceholder
  type="image" | "video" | "gif" | "demo"
  aspectRatio="video" | "square" | "wide" | "portrait"
  label="Custom Label"
  className="additional-classes"
/>
```

### Where MediaPlaceholders Appear:
1. Product Showcase (3 instances)
2. Gallery Items (6 instances when no image provided)
3. Video Showcase (4 instances)
4. Before/After Comparisons (4 instances)
5. Hero with Media (1 instance)

## 🚀 Optimization Tips

1. **Compress Images**: Use ImageOptim, TinyPNG, or Sharp
2. **Lazy Load**: Next.js Image component handles this automatically
3. **Responsive Images**: Provide multiple sizes for different viewports
4. **Video Optimization**:
   - Use WebM for smaller file sizes
   - Provide poster images for video elements
   - Consider hosting large videos on Vimeo/YouTube
5. **CDN**: Consider using Cloudinary or similar for dynamic resizing

## 📝 Example Updates

### Adding Product Screenshot
```tsx
// src/components/home/ProductShowcase.tsx
// Replace the MediaPlaceholder section:
<div className="relative aspect-square rounded-sm overflow-hidden">
  <Image
    src="/images/products/subfusion-ai-dashboard.png"
    alt="SubFusion AI Dashboard"
    fill
    className="object-cover"
    priority
  />
</div>
```

### Adding Demo Video
```tsx
// src/components/home/VideoShowcase.tsx
<div className="relative aspect-video rounded-sm overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
    poster="/images/posters/windfarm-demo.jpg"
  >
    <source src="/videos/demos/offshore-windfarm.mp4" type="video/mp4" />
    <source src="/videos/demos/offshore-windfarm.webm" type="video/webm" />
  </video>
</div>
```

## ✅ Checklist

- [ ] Hero video or image
- [ ] 3 Product screenshots (SubFusion, DeepInsights, Data Acquisition)
- [ ] 3 Capability images
- [ ] 3 Application images
- [ ] 4 Demo videos
- [ ] 4 Before/After comparison images
- [ ] Team member photos (2 co-founders, 3 advisors)
- [ ] Company logo variations (already have transparent-logo.png)

---

**Need Help?** The MediaPlaceholder component will remain visible until you replace it with actual media, making it easy to see where content is still needed.
