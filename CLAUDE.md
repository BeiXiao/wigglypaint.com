# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WigglyPaint is a free online drawing tool with animated wiggly lines built with Astro 5. This is a marketing website for the WigglyPaint drawing application, available as both a web app and iPad app. The site supports 4 languages (English, Chinese, Japanese, Korean) and features a retro Mac-style UI design.

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Astro CLI commands
npm run astro [command]
```

## Architecture & Structure

### Core Framework
- **Astro 5** - Static site generator with island architecture
- **TypeScript** - Strict mode enabled
- **System.css** - Retro Mac UI framework (@sakun/system.css)

### Internationalization (i18n)
- **4 supported languages**: English (default), Chinese (zh-CN), Japanese (ja), Korean (ko)
- **File-based routing**: `/[lang]/page.astro` for localized versions
- **Translation system**: Custom implementation using `src/i18n/utils.ts` and `src/i18n/ui.ts`
- **SEO optimized**: hreflang tags, localized meta descriptions, structured data

### Directory Structure
```
src/
├── components/          # Reusable Astro components
│   ├── Navigation.astro
│   ├── AnnouncementBanner.astro
│   └── CommunityGrid.astro
├── layouts/            # Base layouts
│   └── Layout.astro    # Main layout with SEO, analytics, styling
├── pages/              # File-based routing
│   ├── index.astro     # English homepage (default)
│   ├── [lang]/         # Localized versions
│   ├── about.astro
│   ├── community.astro
│   ├── privacy.astro
│   └── changelog.astro
├── i18n/               # Internationalization
│   ├── utils.ts        # Language detection & translation helpers
│   └── ui.ts          # Translation content (large file ~39KB)
└── data/              # Static data
    └── gallery-index.json  # Community artwork data

public/
├── wiggly.html        # Main drawing app demo (559KB)
├── *.png              # Icons, screenshots, OG images
├── ads.txt           # Google AdSense
└── robots.txt        # SEO directives
```

## Key Features

### Drawing App Integration
- **Demo embedded**: `wiggly.html` contains the actual drawing application
- **Fullscreen mode**: JavaScript controls for iframe expansion
- **iPad app**: Promotes iOS app version with Apple Pencil support

### SEO & Analytics
- **Google Analytics**: gtag.js with GA4 tracking (G-C8PMPYJE85)
- **Google AdSense**: Integrated for monetization
- **Structured data**: JSON-LD for SoftwareApplication schema
- **Sitemap**: Automatic generation with i18n support

### Styling System
- **Retro Mac UI**: System.css for classic Mac OS appearance
- **Custom CSS**: Global styles in `Layout.astro` with ChicagoFLF font
- **Responsive design**: Mobile-optimized layouts
- **Grid system**: Bento-style feature grid layout

## Development Guidelines

### Working with Translations
- Add new content to `src/i18n/ui.ts` for all 4 languages
- Use `useTranslations(lang)` helper in page components
- Test all language versions when making changes

### Styling Conventions
- Use System.css classes for Mac UI elements (`.window`, `.title-bar`, etc.)
- Global styles defined in `Layout.astro` `<style is:global>`
- Component-specific styles in individual Astro files
- Maintain retro aesthetic with ChicagoFLF font family

### SEO Best Practices
- All pages must have proper meta titles/descriptions
- Include structured data for content types
- Test canonical URLs and hreflang tags
- Verify OpenGraph and Twitter Card tags

### File Organization
- Keep public assets organized (icons, images, static files)
- Use TypeScript strict mode (already configured)
- Follow Astro file-based routing patterns
- Maintain consistent component naming

## Deployment Notes

- **Static hosting**: Builds to `/dist` directory
- **Redirects**: Configure in `public/_redirects` if needed
- **Domain**: Primary domain is `wigglypaint.com`
- **SSL**: HTTPS required for all features

## Content Management

- **Community gallery**: Update `src/data/gallery-index.json` for new artwork
- **App updates**: Replace `public/wiggly.html` with new drawing app versions
- **Screenshots**: Update iPad screenshots in `public/` as needed
- **Blog/changelog**: Add new entries to appropriate pages

## Testing Checklist Before Deploy

1. All 4 language versions load correctly
2. Drawing demo (`wiggly.html`) functions properly
3. Mobile responsive design works
4. SEO meta tags are properly set
5. Analytics and ads are loading
6. All internal links resolve correctly
7. Sitemap generates properly