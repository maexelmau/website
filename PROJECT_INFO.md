# 🐱 Max's Katzenkörbchen - Project Information

## 📋 Project Overview

**Max's Katzenkörbchen** is a charming cat-themed website built with Astro, serving as Max's personal corner of the internet dedicated to feline friends. The German word "Katzenkörbchen" translates to "cat basket" in English, perfectly capturing the cozy, welcoming nature of this cat-centric website.

**Live Site**: https://maexelmau.de  
**Project Name**: `maexel-astro`  
**Version**: 1.0.0

## 🏗️ Technical Stack

### Core Framework

- **Astro 5.8.0** - Modern static site generator with component islands architecture
- **Node.js** with ES modules
- **pnpm** for package management
- **TypeScript** support enabled

### Styling & UI

- **Tailwind CSS 4.1.7** - Utility-first CSS framework (latest version)
- **@tailwindcss/typography** - Beautiful typographic defaults
- **@tailwindcss/vite** - Vite integration for Tailwind
- **Astro Icon** with MDI (Material Design Icons)

### Typography

- **Inter** - Modern sans-serif font optimized for UI and readability
- **Pacifico** - Playful script font for accent text and signatures
- **Google Fonts** - Web font delivery with preconnect optimization

### Content Management

- **Astro Content Collections** - Type-safe content management
- **MDX support** - Markdown with JSX components for rich content
- **Blog system** - Built-in blog functionality with frontmatter schema

### Development Tools

- **Prettier** - Code formatting with Astro plugin
- **Sharp** - Image optimization
- **TypeScript** - Type safety

## 📁 Project Structure

```
MaexelMau/
├── public/
│   ├── CNAME (maexelmau.de)           # Custom domain configuration
│   └── favicon.svg                      # Site favicon
├── src/
│   ├── components/
│   │   ├── Header.astro                 # Navigation header with icons
│   │   ├── Hero.astro                   # Main hero section with special typography
│   │   ├── MainContent.astro            # Main content area with cards
│   │   ├── Footer.astro                 # Footer with signature
│   │   └── Welcome.astro                # Main page orchestrator component
│   ├── content/
│   │   └── blog/
│   │       └── first-post.mdx           # Sample blog post
│   ├── layouts/
│   │   └── Layout.astro                 # Base page template
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── index.astro              # Blog listing page
│   │   │   └── [...slug].astro          # Dynamic blog post pages
│   │   └── index.astro                  # Homepage
│   ├── scripts/
│   │   └── meow.ts                      # Interactive click effects
│   ├── styles/
│   │   └── global.css                   # Tailwind imports + font definitions
│   ├── assets/                          # Static assets
│   ├── images/                          # Image assets (including cat_reading.webp)
│   └── content.config.ts                # Content collection schemas
├── astro.config.mjs                     # Astro configuration
├── package.json                         # Dependencies and scripts
├── .pages.yml                           # CMS configuration
├── tsconfig.json                        # TypeScript configuration
├── .prettierrc.mjs                      # Prettier configuration
├── .prettierignore                      # Prettier ignore rules
├── .gitignore                           # Git ignore rules
├── pnpm-workspace.yaml                  # pnpm workspace configuration
├── pnpm-lock.yaml                       # Dependency lock file
└── README.md                            # Basic Astro documentation
```

## 🎨 Current Features & Components

### Modular Component Architecture

The homepage is now built with a modular component system for better maintainability:

#### Header Component (`src/components/Header.astro`)

- **Clean navigation bar** with brand logo and cat icon
- **Icon-based navigation** (Home, Blog, Gallery, About, Contact)
- **Hover effects** and smooth transitions
- **Responsive design** with proper spacing

#### Hero Component (`src/components/Hero.astro`)

- **Special typography treatment**: "Welcome to my" in small text, "Katzenkörbchen" in large playful font
- **Text effects**: Drop shadow and stroke effects on the main title
- **Reading cat image** positioned on top-right of the logo
- **Gradient background** from blue to pink tones
- **Responsive sizing** for different screen sizes

#### MainContent Component (`src/components/MainContent.astro`)

- **Card-based layout** with "About Max" and "Cat Corner" sections
- **Coming soon placeholder** for future content
- **Clean, modern design** with subtle shadows and borders

#### Footer Component (`src/components/Footer.astro`)

- **Max's signature** using Pacifico font
- **Social-style icons** with hover effects
- **Consistent branding** and attribution

#### Welcome Component (`src/components/Welcome.astro`)

- **Main page orchestrator** that imports and arranges all components
- **Clean, modular structure** for easy maintenance

### Typography Implementation

- **"Welcome to my"**: Small, black text using Inter font
- **"Katzenkörbchen"**: Large text using Pacifico font with:
  - Pink stroke/outline effect
  - Blue drop shadow
  - Responsive sizing (6xl on mobile, 8xl on desktop)
- **Reading cat image**: Positioned absolutely, rotated 12 degrees for playful effect

### Visual Design

- **Color scheme**: Blue and pink gradients with clean whites and grays
- **Modern cards**: Subtle shadows and rounded corners
- **Icon integration**: Material Design Icons throughout
- **Responsive layout**: Mobile-first approach with proper breakpoints

### Layout System (`src/layouts/Layout.astro`)

- **Base HTML structure** with proper meta tags
- **Dynamic title** support (defaults to "Maexels Place")
- **Global CSS imports** (Tailwind)
- **Script integration** (meow.ts)
- **Responsive viewport** configuration

### Interactive Features

- **Meow click effect** (`src/scripts/meow.ts`):
  - Shows "meow!" text on every click anywhere on the page
  - Animated fade-out and upward movement
  - Non-intrusive with proper z-index and pointer events

### Blog System

- **Content Collections** with TypeScript schema validation
- **Blog schema** includes:
  - `title` (string, required)
  - `slug` (string, required)
  - `description` (string, required)
  - `pubDate` (date, required)
  - `updatedDate` (date, optional)
  - `author` (string, defaults to "Anonymous")
  - `image` (image, required)
  - `tags` (array of strings, defaults to empty)
- **Blog listing page** at `/blog`
- **Dynamic routing** for individual blog posts via `[...slug].astro`
- **MDX support** for rich content authoring

### Styling & Design

- **Color scheme**: Blue and pink accents on white background
- **Typography**: Clean, readable fonts with proper hierarchy
- **Icons**: Material Design Icons via Astro Icon
- **Responsive design**: Mobile-first approach with Tailwind
- **Accessibility**: Proper semantic HTML structure

## 🛠️ Development Commands

```bash
# Package Management
pnpm install          # Install all dependencies
pnpm update           # Update dependencies

# Development
pnpm dev              # Start development server at localhost:4321
pnpm build            # Build production site to ./dist/
pnpm preview          # Preview production build locally

# Astro CLI
pnpm astro ...        # Run any Astro CLI command
pnpm astro add        # Add integrations
pnpm astro check      # Type check project
pnpm astro -- --help  # Get Astro CLI help
```

## 🚀 Deployment & Hosting

### GitHub Pages Deployment

The site is automatically deployed to **GitHub Pages** with a custom domain configuration:

- **Live URL**: https://maexelmau.de
- **GitHub Pages URL**: https://[username].github.io/MaexelMau (redirects to custom domain)
- **Custom Domain**: Configured via `public/CNAME` file

### Deployment Configuration

#### Custom Domain Setup
```
# public/CNAME
maexelmau.de
```

#### Astro Configuration for GitHub Pages
The `astro.config.mjs` is configured for GitHub Pages deployment:
```javascript
export default defineConfig({
  site: 'https://maexelmau.de',
  // Additional GitHub Pages optimizations
});
```

### Deployment Process

1. **Automatic Deployment**: 
   - Push changes to the main branch
   - GitHub Actions automatically builds and deploys the site
   - Changes are live within minutes

2. **Build Process**:
   ```bash
   pnpm build        # Generates static files in ./dist/
   ```

3. **Manual Deployment** (if needed):
   - Build the project locally
   - Push the `dist` folder contents to the `gh-pages` branch
   - GitHub Pages serves from the `gh-pages` branch

### Domain Configuration

- **DNS Setup**: The domain `maexelmau.de` points to GitHub Pages servers
- **HTTPS**: Automatically enabled via GitHub Pages
- **CDN**: Global content delivery via GitHub's infrastructure

### Deployment Checklist

Before deploying major changes:
- [ ] Test locally with `pnpm dev`
- [ ] Build and preview with `pnpm build && pnpm preview`
- [ ] Check all images and assets load correctly
- [ ] Verify responsive design on different screen sizes
- [ ] Test interactive features (meow clicks, navigation)
- [ ] Validate HTML and accessibility

### Environment Considerations

- **Production Build**: Optimized for performance with minified assets
- **Static Generation**: All pages are pre-rendered for fast loading
- **Image Optimization**: Sharp integration for optimized images
- **CSS Purging**: Tailwind CSS is purged for minimal bundle size

## 📝 Content Management

### Blog Content Structure

Located in `src/content/blog/`, each post is an MDX file with frontmatter:

```yaml
---
title: "Post Title"
slug: "post-slug"
description: "Post description"
pubDate: 2024-01-01
updatedDate: 2024-01-02 # optional
author: "Author Name" # optional, defaults to "Anonymous"
image: ./image.jpg
tags: ["tag1", "tag2"] # optional
---
# Post content in MDX format
```

### CMS Configuration (`.pages.yml`)

- **Media handling**: Input from `src/images`, output to `/src/images`
- **Blog collection**: Full CRUD interface for blog posts
- **Field types**: String, date, image, rich-text, lists
- **Sorting**: By publication date and title
- **Search**: Built-in content search

## 🎯 Design Philosophy & Brand

### Visual Identity

- **Concept**: "Katzenkörbchen" (cat basket) - cozy, welcoming space
- **Color palette**:
  - Primary: Blue (#3B82F6, #60A5FA)
  - Accent: Pink (#F472B6)
  - Text: Gray scale (#1F2937, #6B7280, #9CA3AF)
- **Typography**:
  - **Primary**: Inter - Modern, highly readable sans-serif optimized for screens
  - **Accent**: Pacifico - Playful script font for personal touches and signatures
  - **Hierarchy**: Clean, readable fonts with proper contrast and spacing
- **Icons**: Material Design Icons (cat, heart, paw themes)

### Typography Strategy

- **Inter** serves as the main typeface for all body text, headings, and navigation
  - Chosen for its exceptional readability and modern appearance
  - Optimized specifically for user interfaces and digital screens
  - Supports multiple weights and styles for proper hierarchy
- **Pacifico** is used sparingly for personal signatures and special accents
  - Adds warmth and personality without compromising readability
  - Reflects the friendly, approachable nature of the "Katzenkörbchen" concept
  - Perfect for Max's personal signature and special callouts

### User Experience

- **Playful interactions**: Meow click effects
- **Smooth navigation**: Anchor links with hover effects
- **Responsive design**: Works on all device sizes
- **Fast loading**: Static site generation for performance + optimized font loading
- **Accessibility**: Semantic HTML, proper contrast, and highly readable typography
- **Modern feel**: Clean, contemporary fonts that feel fresh and professional

## 🔧 Configuration Files

### `astro.config.mjs`

- **Site URL**: `https://maexelmau.de`
- **Integrations**: Astro Icon, MDX
- **Vite plugins**: Tailwind CSS
- **Build**: Static output

### `package.json`

- **Name**: `maexel-astro`
- **Type**: `module` (ES modules)
- **Scripts**: Standard Astro commands
- **Dependencies**: Production dependencies (MDX)
- **DevDependencies**: Build tools and development utilities

### `content.config.ts`

- **Blog collection**: MDX files with comprehensive schema
- **Image handling**: Astro's built-in image optimization
- **Type safety**: Zod schema validation

## 🚀 Future Enhancement Opportunities

### Content Expansion

- **Photo gallery**: Cat pictures with lightbox
- **Cat breed profiles**: Detailed breed information
- **Care guides**: Comprehensive cat care articles
- **Product reviews**: Cat toys, food, accessories

### Technical Improvements

- **Search functionality**: Full-text search for blog posts
- **Comments system**: Blog post comments
- **Newsletter**: Email subscription for updates
- **Social sharing**: Share buttons for blog posts
- **Analytics**: Visitor tracking and insights

### Interactive Features

- **Cat name generator**: Fun interactive tool
- **Photo upload**: User-submitted cat photos
- **Quiz system**: Cat knowledge quizzes
- **Community features**: User profiles and interactions

### Internationalization

- **German translation**: Full German language support
- **Multi-language routing**: `/de/` and `/en/` routes
- **Localized content**: Region-specific cat information

## 🐛 Known Considerations

### Current Limitations

- **No search**: Blog posts don't have search functionality
- **No pagination**: Blog listing shows all posts
- **Limited SEO**: Basic meta tags, could be enhanced
- **No analytics**: No visitor tracking implemented

### Development Notes

- **Tailwind v4**: Using latest version with new architecture
- **Astro v5**: Latest stable version with all modern features
- **pnpm**: Preferred package manager for this project
- **TypeScript**: Enabled but not strictly enforced everywhere

## 📞 Agent Guidelines

### When Working on This Project

1. **Respect the cat theme**: All additions should fit the cozy, cat-loving aesthetic
2. **Maintain German touches**: "Katzenkörbchen" concept should be preserved
3. **Use existing patterns**: Follow established component and styling patterns
4. **Test interactivity**: Ensure meow effects and other interactions work
5. **Mobile-first**: Always consider responsive design
6. **Performance**: Keep the site fast and lightweight
7. **Accessibility**: Maintain semantic HTML and proper contrast

### Common Tasks

- **Adding blog posts**: Create MDX files in `src/content/blog/`
- **Styling changes**: Use Tailwind classes, avoid custom CSS
- **New pages**: Add to `src/pages/` following Astro conventions
- **Components**: Create reusable components in `src/components/`
- **Assets**: Add images to `src/images/` or `public/` as appropriate

### Typography Guidelines

- **Use Inter for all standard text**: Body text, headings, navigation, buttons
- **Use Pacifico sparingly**: Only for signatures, special callouts, or personal touches
- **Font classes available**:
  - `.font-sans` - Applies Inter (default for body)
  - `.font-playful` - Applies Pacifico for accent text
- **Maintain hierarchy**: Use Tailwind's font-weight and text-size utilities
- **Performance**: Fonts are preloaded and optimized via Google Fonts CDN

This project represents a delightful blend of modern web technology and charming cat-themed content, perfect for Max's personal corner of the internet! 🐱
