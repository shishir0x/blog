# Shishir Pandey - Engineering Portfolio & Blog

[![Live Site](https://img.shields.io/badge/Live%20Demo-shishir--pandey.com.np-0EA6E9?style=flat&logo=google-chrome&logoColor=white)](https://shishir-pandey.com.np)
[![Astro Version](https://img.shields.io/badge/Astro-5.14.7-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build/)
[![Svelte Version](https://img.shields.io/badge/Svelte-5-FF3E00?style=flat&logo=svelte&logoColor=white)](https://svelte.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A high-performance, modern personal engineering blog and digital portfolio built with [Astro 5](https://astro.build/), [Svelte 5](https://svelte.dev/), and [Tailwind CSS](https://tailwindcss.com/). Customized and maintained by **Shishir Pandey** ([@shishir0x](https://github.com/shishir0x)), this platform showcases technical deep-dives, software projects, and system design explorations with instant page loads, offline full-text search, and a rich interactive aesthetic.

**Live Website**: [https://shishir-pandey.com.np](https://shishir-pandey.com.np)  
**Core Theme Base**: Customized from the open-source [Firefly](https://github.com/CuteLeaf/Firefly) theme (derived from Fuwari by saicaca).

---

## 📑 Table of Contents

- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Configuration](#-configuration)
- [Content Management](#-content-management)
- [Deployment](#-deployment)
- [License](#-license)
- [Author & Contact](#-author--contact)

---

## ✨ Key Features

- **Blazing Fast Performance**: Static Site Generation (SSG) with Astro's Islands Architecture delivers minimal JavaScript to the client.
- **Fluid Page Transitions**: Integrated with [Swup](https://swup.js.org/) for smooth, SPA-like navigation without full browser refreshes.
- **Client-Side Static Search**: Powered by [Pagefind](https://pagefind.app/) for fast, zero-server full-text indexing and search directly in the browser.
- **Markdown & MDX Support**: Comprehensive rendering pipeline featuring:
  - Math typesetting via **KaTeX** (`remark-math` & `rehype-katex`)
  - Interactive **Mermaid.js** diagrams
  - GitHub-style callouts / admonitions (`note`, `tip`, `important`, `caution`, `warning`)
  - Automated reading time and word count estimation
  - Automatic heading anchors and slug generation
- **Expressive Code Highlighting**: Syntax highlighting powered by Astro Expressive Code with line numbering, custom copy button, language badges, and collapsible code sections.
- **Adaptive Dark & Light Theme**: Dynamic theming powered by OKLCH color palettes with interactive hue rotation and system preference detection.
- **Integrated Background Audio Player**: Svelte 5 powered music widget with YouTube playlist streaming, customizable play modes (list, repeat, shuffle), and lyrics support.
- **Interactive UI Components**: Responsive layout switchers (list vs. grid view), wallpaper modes (banner with wave animation and typewriter effect, overlay, or clean), and multi-tier Table of Contents (TOC).
- **Internationalization (i18n)**: Multi-language support built for English (`en`), Japanese (`ja`), Russian (`ru`), Simplified Chinese (`zh_CN`), and Traditional Chinese (`zh_TW`).
- **Waline Comments**: Seamless privacy-focused commenting system integration hosted on Vercel.

---

## 🛠 Tech Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Astro 5.14](https://astro.build/) | Static site generator utilizing Content Collections & Islands Architecture |
| **Interactive UI** | [Svelte 5](https://svelte.dev/) | High-performance reactive widgets for audio, search, and theme controls |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Utility-first CSS with Typography plugin, PostCSS, and Stylus preprocessing |
| **Search Engine** | [Pagefind 1.4](https://pagefind.app/) | Static full-text search indexing generated during build |
| **Transitions** | [Swup](https://swup.js.org/) | Client-side page transition framework |
| **Code Blocks** | [Expressive Code](https://expressive-code.com/) | Enhanced code highlighting with copy buttons, badges, and line numbers |
| **Math & Media** | [KaTeX](https://katex.org/) / [Fancybox](https://fancyapps.com/) | LaTeX formula rendering and lightbox image zoom |
| **Linter & Formatter** | [Biome 2.2](https://biomejs.dev/) | Modern, fast linter and formatter for JavaScript/TypeScript and web assets |
| **Package Manager** | [pnpm 9](https://pnpm.io/) | Fast, disk-efficient package manager strictly enforced across the project |

---

## 📁 Project Structure

```text
blog/
├── docs/                        # Internal component documentation and migration notes
├── public/                      # Static assets (favicons, wallpaper images, avatars)
│   ├── assets/images/           # Backgrounds, avatars, and article visual assets
│   ├── favicon-white.ico        # Site favicon
│   └── pio/                     # Widget assets
├── scripts/
│   └── new-post.js              # CLI tool for scaffolding new blog posts with frontmatter
├── src/
│   ├── components/              # Modular Astro & Svelte UI components
│   │   ├── comment/             # Waline comment system wrapper
│   │   ├── content/             # PostCard, PostMeta, Profile, and StatCard widgets
│   │   ├── control/             # Pagination, back-to-top, and navigation buttons
│   │   ├── effects/             # Sakura particle canvas and Fancybox image preview
│   │   ├── features/            # Audio & music manager components
│   │   ├── interactive/         # Svelte 5 controls (Search, Theme switch, Wallpaper switch)
│   │   ├── layout/              # Navbar, Sidebar, Footer, and responsive menus
│   │   ├── misc/                # AudioPlayer, ImageSetter, License, and VideoPlayer
│   │   └── widget/              # Profile, Announcement, TOC, Categories, and Tags widgets
│   ├── config/                  # Centralized modular TypeScript configurations
│   │   ├── siteConfig.ts        # Primary website metadata, theme hue, and wallpaper
│   │   ├── profileConfig.ts     # Author bio, avatar, and social media handles
│   │   ├── musicConfig.ts       # Music playlist, YouTube track list, and audio settings
│   │   ├── commentConfig.ts     # Waline server URL and visitor metrics
│   │   ├── navBarConfig.ts      # Navigation menu links and dropdown structure
│   │   └── sidebarConfig.ts     # Sidebar component ordering and responsive breakpoints
│   ├── content/
│   │   ├── posts/               # Blog posts in Markdown (.md) and MDX (.mdx)
│   │   ├── spec/                # Static spec pages (about.md)
│   │   └── config.ts            # Content collections schema definition (Zod)
│   ├── i18n/                    # Localization strings (EN, JA, RU, ZH-CN, ZH-TW)
│   ├── layouts/                 # Root HTML structure (Layout.astro, MainGridLayout.astro)
│   ├── pages/                   # File-based routing ([...page].astro, posts, archive, rss, robots)
│   ├── plugins/                 # Custom Remark and Rehype markdown extensions
│   ├── styles/                  # Global CSS, Stylus palettes, and animations
│   ├── types/                   # TypeScript interfaces for configuration and posts
│   └── utils/                   # Helper functions (content filtering, dates, settings)
├── astro.config.mjs             # Astro integrations, server port (5173), and Markdown plugins
├── biome.json                   # Biome linter and formatter configuration
├── package.json                 # Project dependencies and script commands
├── pagefind.yml                 # Pagefind indexer exclusion rules
├── tailwind.config.cjs          # Tailwind CSS theme configuration
└── vercel.json                  # Production deployment headers and caching configuration
```

---

## 📋 Prerequisites

Before installing and running the project locally, ensure you have:

- **Node.js**: `v18.0.0` or higher (Node.js 20+ LTS recommended)
- **pnpm**: `v9.0.0` or higher (The project strictly enforces `pnpm` via `npx only-allow pnpm`)

To verify your installation:

```bash
node -v
pnpm -v
```

If you do not have `pnpm` installed:

```bash
npm install -g pnpm
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shishir0x/blog.git
cd blog
```

### 2. Install Dependencies

Install all project dependencies using `pnpm`:

```bash
pnpm install
```

> [!NOTE]
> Do not use `npm install` or `yarn install`. The repository includes a `preinstall` check that enforces `pnpm`.

### 3. Start the Development Server

```bash
pnpm dev
```

The Astro development server will start locally:

```text
  🚀  astro  v5.14.7 started in 1500ms

  ┃ Local    http://localhost:5173/
  ┃ Network  use --host to expose
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production

To build the static HTML output and generate the client-side search index:

```bash
pnpm build
```

This compiles all pages into `dist/` and automatically executes `pagefind --site dist`.

### 5. Preview the Production Build

```bash
pnpm preview
```

Inspect the compiled production bundle locally to verify static assets and search functionality.

---

## 📜 Available Scripts

The following commands are defined in [`package.json`](package.json):

| Command | Action | Description |
| :--- | :--- | :--- |
| `pnpm dev` | `astro dev` | Starts the local dev server on port `5173` with Hot Module Replacement |
| `pnpm start` | `astro dev` | Alias for `pnpm dev` |
| `pnpm build` | `astro build && pagefind --site dist` | Builds the static website and indexes content for Pagefind search |
| `pnpm preview` | `astro preview` | Serves the built `dist/` directory locally |
| `pnpm new-post <name>` | `node scripts/new-post.js <name>` | Scaffolds a new post in `src/content/posts/` with default frontmatter |
| `pnpm check` | `astro check` | Runs Astro diagnostic type-checks on `.astro` and content files |
| `pnpm lint` | `biome check --write ./src` | Runs Biome linter across `src/` and automatically fixes safe warnings |
| `pnpm format` | `biome format --write ./src` | Formats all source files according to Biome configuration |

---

## ⚙️ Configuration

All site personalization is managed cleanly through TypeScript files inside [`src/config/`](src/config/). **No `.env` file is required for local development.**

### Core Site Configuration (`src/config/siteConfig.ts`)

Controls the site title, description, default language, theme color, and wallpaper behavior:

```typescript
export const siteConfig: SiteConfig = {
  title: "shishir0x Blog",
  description: "Personal engineering blog by Shishir Pandey...",
  lang: "en", // "en" | "zh_CN" | "zh_TW" | "ja" | "ru"
  themeColor: {
    hue: 245, // OKLCH hue value (245 = Sky Blue)
    fixed: false, // If true, disables user theme-color picker
    defaultMode: "system", // "light" | "dark" | "system"
  },
  backgroundWallpaper: {
    mode: "banner", // "banner" | "overlay" | "none"
    switchable: true,
    banner: {
      homeText: {
        enable: true,
        title: "Writing Code, Living Life！",
        typewriter: { enable: true, speed: 100 },
      },
      waves: {
        enable: { desktop: true, mobile: true },
        performance: { quality: "high", hardwareAcceleration: true },
      },
    },
  },
};
```

### Profile & Socials (`src/config/profileConfig.ts`)

Controls the avatar, bio, and social links rendered in the sidebar:

```typescript
export const profileConfig: ProfileConfig = {
  avatar: "/assets/images/avatar.webp",
  name: "Shishir Pandey",
  bio: "Hello, I'm Shishir.",
  links: [
    { name: "GitHub", icon: "fa6-brands:github", url: "https://github.com/shishir0x" },
    { name: "Email", icon: "fa6-solid:envelope", url: "mailto:shishirpandey085@gmail.com" },
    { name: "YouTube", icon: "fa6-brands:youtube", url: "https://www.youtube.com/@shishir0_x" },
    { name: "Instagram", icon: "fa6-brands:instagram", url: "https://instagram.com/shishir0x" },
    { name: "TikTok", icon: "fa6-brands:tiktok", url: "https://www.tiktok.com/@shishir_0x" },
  ],
};
```

### Music Player (`src/config/musicConfig.ts`)

Configures the background audio player. Supported modes: `"youtube"`, `"meting"`, or `"local"`:

```typescript
export const musicPlayerConfig: MusicPlayerConfig = {
  enable: true,
  showInNavbar: true,
  mode: "youtube",
  volume: 0.7,
  playMode: "list", // 'list' | 'one' | 'random'
  youtube: {
    playlist: [
      { name: "Apocalypse", artist: "Cigarettes After Sex", id: "sElE_BfQ67s" },
      // ... additional tracks
    ],
  },
};
```

### Comment System (`src/config/commentConfig.ts`)

Configures the Waline comment backend:

```typescript
export const commentConfig: CommentConfig = {
  enable: true,
  enableVisitorCount: false,
  waline: {
    serverURL: "https://blogcomment-ten.vercel.app/",
    lang: "en",
  },
};
```

---

## ✍️ Content Management

### Creating a New Article

Use the included helper script to scaffold a new article:

```bash
pnpm new-post my-first-post
```

This creates `src/content/posts/my-first-post.md` with pre-populated frontmatter:

```yaml
---
title: my-first-post
published: 2026-10-27
description: ''
image: ''
tags: []
category: ''
draft: false 
lang: ''
---
```

### Complete Frontmatter Schema

Defined in [`src/content/config.ts`](src/content/config.ts), posts support the following fields:

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | **Yes** | Post title displayed in headlines and cards |
| `published` | `date` | **Yes** | Initial publication date (`YYYY-MM-DD`) |
| `updated` | `date` | No | Last update timestamp |
| `description` | `string` | No | Short excerpt for preview cards and SEO metadata |
| `image` | `string` | No | Cover image path (e.g. `/assets/images/cover.png`) |
| `tags` | `string[]` | No | Categorical tags (e.g. `["System Design", "Cloud"]`) |
| `category` | `string` | No | Main category name for hierarchical navigation |
| `draft` | `boolean` | No | If `true`, hides the post from production builds (Default: `false`) |
| `pinned` | `boolean` | No | If `true`, pins the post to the top of the homepage list |
| `author` | `string` | No | Custom author name (falls back to site author) |
| `sourceLink` | `string` | No | Link to project source code or external publication |
| `encrypted` | `boolean` | No | Enables client-side password protection for the post |
| `password` | `string` | No | Password required when `encrypted: true` |
| `audio` | `string` | No | Audio URL for AI podcast or article narration |
| `series` | `string` | No | Groups related articles into a sequential reading list |

### Extended Markdown Syntax

In addition to standard Markdown, posts support:

1. **LaTeX Math Equations**:
   ```markdown
   $$f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi$$
   ```
2. **Admonitions / Callout Boxes**:
   ```markdown
   :::note
   This is an informative note callout.
   :::

   :::tip
   Here is a helpful tip for deployment.
   :::
   ```
3. **Mermaid Diagrams**:
   ```markdown
   ```mermaid
   graph TD;
       Client-->AstroServer;
       AstroServer-->Pagefind;
   ```
   ```

---

## 🚢 Deployment

The site generates pure static assets into the `dist/` directory and can be deployed to any modern static hosting provider.

### Vercel (Current Production Target)

The repository includes a ready-to-use [`vercel.json`](vercel.json) configured with:
- Build Command: `pnpm build`
- Output Directory: `dist`
- Install Command: `pnpm install`
- Production security headers (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`)
- Immutable caching headers for hashed `_astro/` bundles
- Clean URLs enabled

**Deploy steps:**
1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Set Framework Preset to **Astro**.
3. Vercel automatically detects `vercel.json` and builds via `pnpm build`.
4. Configure your custom domain (e.g., `shishir-pandey.com.np`).

### Cloudflare Pages / Netlify / GitHub Pages

1. **Build command**: `pnpm build`
2. **Build output directory**: `dist`
3. **Node.js version**: `>= 18.0.0`
4. For GitHub Pages, keep the `CNAME` file in the root directory to maintain custom domain routing.

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).  
The underlying theme architecture is adapted and modified from [Firefly](https://github.com/CuteLeaf/Firefly) by CuteLeaf, based on [Fuwari](https://github.com/saicaca/fuwari) by saicaca.

---

## 👤 Author & Contact

**Shishir Pandey**

- **Website**: [shishirpandey085.com.np](https://shishirpandey085.com.np)
- **GitHub**: [@shishir0x](https://github.com/shishir0x)
- **Email**: [shishirpandey085@gmail.com](mailto:shishirpandey085@gmail.com)
- **YouTube**: [@shishir0_x](https://www.youtube.com/@shishir0_x)

