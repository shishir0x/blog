import type { SiteConfig } from "../types/config";
import { fontConfig } from "./fontConfig";

// Define site language
// Language codes, e.g., 'zh_CN', 'zh_TW', 'en', 'ja', 'ru'.
const SITE_LANG = "en"; 

export const siteConfig: SiteConfig = {
  title: "Alvin's blog",
  subtitle: "Demo site",
  description:
    "Alvin's blog is a fresh, beautiful, and modern personal blog developed based on the Astro framework, designed specifically for tech enthusiasts and content creators.",
  keywords: [
    "Firefly",
    "Fuwari",
    "Astro",
    "ACGN",
    "Blog",
    "Tech Blog",
    "Static Blog",
  ],

  lang: SITE_LANG,

  themeColor: {
    hue: 165, // Default hue for the theme color, from 0 to 360. e.g., red: 0, cyan: 200, teal: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
    defaultMode: "system", // Default mode: "light", "dark", "system"
  },

  favicon: [
    // Leave empty to use the default favicon
    {
      src: "/assets/images/favicon.ico", // Icon file path
      theme: "light", // Optional, specify theme 'light' | 'dark'
      sizes: "32x32", // Optional, icon size
    },
  ],

  // Navbar Logo
  // navbarLogo supports three types: Astro icon library, local image, web image
  // { type: "icon", value: "material-symbols:home-pin-outline" }
  // { type: "image", value: "/assets/images/logo.webp", alt: "Firefly Logo" }
  // { type: "image", value: "https://example.com/logo.png", alt: "Firefly Logo" }
  navbarLogo: {
    type: "image",
    value: "/assets/images/LiuYingPure3.svg",
    alt: "🍀",
  },
  navbarTitle: "Alvin's blog", // Navbar title, can be different from title, if not set, title will be used

  
  // Bangumi configuration
  bangumi: {
    userId: "1163581", // Set your Bangumi user ID here
  },

  // "Last edited time" card switch at the bottom of the article page
  showLastModified: true,

  // OpenGraph image feature. Note: Takes a long time to render, not recommended for local debugging
  generateOgImages: false,

  // Page switches - control access to specific pages, setting to false returns 404
  pages: {
    anime: false, // Anime page switch
  },

  // Article list layout configuration
  postListLayout: {
    // Default layout mode: "list" (single column), "grid" (double column)
    defaultMode: "list",
    // Allow users to switch layout
    allowSwitch: true,
  },

  // Pagination configuration
  pagination: {
    // Number of articles per page
    postsPerPage: 10,
  },

  backgroundWallpaper: {
    // Wallpaper mode: "banner", "overlay", "none"
    mode: "banner",
    // Allow users to switch wallpaper mode via navbar, set to false for performance
    switchable: true,

    // Background image configuration
    src: {
      // Desktop background image
      desktop: "/assets/images/desktop.webp",
      // Mobile background image
      mobile: "/assets/images/mobile.webp",
    },

    // Image position
    // Supports all CSS object-position values
    position: "10% 20%",

    // Banner mode specific configuration
    banner: {
      homeText: {
        // Show custom text on home page (global switch)
        enable: true,
        // Home banner main title
        title: "Writing Code, Living Life！",
        // Home banner subtitle
        subtitle: [
          "Sometimes I debug, sometimes I daydream.",
          "Coffee fuels my code — and my late-night thoughts.",
          "Freedom is typing without deadlines.",
          "Learning to build, and to breathe.",
          "Every bug tells a story, every fix feels like hope.",
          "Between commits and sunsets, I find balance.",
          "Code by day, stargaze by night.",
          "I’m not chasing perfection — just progress.",
        ],
        typewriter: {
          enable: true, // Enable typewriter effect for subtitle
          speed: 100, // Typing speed (ms)
          deleteSpeed: 50, // Deleting speed (ms)
          pauseTime: 2000, // Pause time after full display (ms)
        },
      },
      credit: {
        enable: {
          desktop: false, // Show banner image credit text on desktop
          mobile: false, // Show banner image credit text on mobile
        },
        text: {
          desktop: "Pixiv - Wanwanmiao", // Source text to display on desktop
          mobile: "Mobile Credit", // Source text to display on mobile
        },
        url: {
          desktop: "https://www.pixiv.net/artworks/135490046", // Original artwork URL for desktop
          mobile: "", // Original artwork URL for mobile
        },
      },
      navbar: {
        transparentMode: "semifull", // Navbar transparent mode: "semi", "full", "semifull"
      },
      // Wave animation configuration, may affect performance
      waves: {
        enable: {
          desktop: true, // Enable wave animation on desktop
          mobile: true, // Enable wave animation on mobile
        },
        performance: {
          quality: "high", 
          hardwareAcceleration: true, // Enable hardware acceleration
        },
        // Performance optimization instructions:
        // quality: "high" - Best visual effect, high GPU usage
        // quality: "medium" - Balance performance and quality
        // quality: "low" - Lowest GPU usage
        // hardwareAcceleration: true - Enable GPU acceleration
        // hardwareAcceleration: false - Disable GPU acceleration
      },
    },

    // Overlay mode specific configuration
    overlay: {
      zIndex: -1, // Z-index, ensure wallpaper is in the background
      opacity: 0.8, // Wallpaper opacity
      blur: 1, // Background blur degree
    },
  },

  // Table of Contents
  toc: {
    // ToC switch
    enable: true,
    // ToC depth, 1-3
    // depth is deprecated in newer versions
    depth: 3,
  },

  // Font configuration
  // Configure specific fonts in src/config/fontConfig.ts
  font: fontConfig,
};
