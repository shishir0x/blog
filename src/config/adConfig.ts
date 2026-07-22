import type { AdConfig } from "../types/config";

// This is just configuring the advertisement content, if you want to toggle it on/off, control the sidebar component in sidebarConfig.ts

// Ad config 1 - Image only ad (no padding)
export const adConfig1: AdConfig = {
  image: {
    src: "/assets/images/d1.webp",
    alt: "Ad Banner",
    link: "#",
    external: true,
  },
  closable: true, // Closable
  displayCount: -1,
  padding: {
    all: "0", // Zero margin, image fills the entire component
    // all: "1rem", // Default margin
    // top: "0", // Only top no margin
    // right: "1rem", // Only right no margin
    // bottom: "1rem", // Only bottom no margin
    // left: "1rem", // Only left no margin
  },
};

// Ad config 2 - Full content ad
export const adConfig2: AdConfig = {
  title: "Support the Author",
  content:
    "If you find the content of this site helpful, you are welcome to support our creation! Your support is our motivation for continuous updates.",
  image: {
    src: "/assets/images/d2.webp",
    alt: "Support the Author",
    link: "about/",
    external: false,
  },
  link: {
    text: "Support",
    url: "about/",
    external: false,
  },
  closable: true,
  displayCount: -1,
  padding: {
    // all: "1rem",
  },
};
