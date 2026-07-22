import type { SidebarLayoutConfig } from "../types/config";

/**
 * Sidebar layout configuration
 * Used to control the display, order, animation, and responsive behavior of sidebar components
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
  // Whether to enable sidebar functionality
  enable: true,

  // Sidebar position: "left" or "right"
  position: "left",

  // Sidebar component configuration list
  components: [
    {
      // Component type: Profile component
      type: "profile",
      // Whether to enable this component
      enable: true,
      // Component display order (smaller number means higher up)
      order: 1,
      // Component position: "top" means fixed at the top
      position: "top",
      // CSS class name, used to apply styles and animations
      class: "onload-animation",
      // Animation delay time (ms), used to stagger animation effects
      animationDelay: 0,
    },
    {
      // Component type: Announcement component
      type: "announcement",
      // Whether to enable this component (now controlled via unified config)
      enable: true,
      // Component display order
      order: 2,
      // Component position: "top" means fixed at the top
      position: "top",
      // CSS class name
      class: "onload-animation",
      // Animation delay time
      animationDelay: 50,
    },
    {
      // Component type: Music player
      type: "music-player",
      // Whether to enable this component
      enable: true,
      // Component display order
      order: 3,
      // Below announcement, above categories
      position: "top",
      // CSS class name
      class: "onload-animation",
      // Animation delay time
      animationDelay: 100,
    },
    {
      // Component type: Categories component
      type: "categories",
      // Whether to enable this component
      enable: true,
      // Component display order
      order: 4,
      // Component position: "sticky" means sticky positioning, scrollable
      position: "sticky",
      // CSS class name
      class: "onload-animation",
      // Animation delay time
      animationDelay: 150,
      // Responsive configuration
      responsive: {
        // Collapse threshold: auto collapse when category count exceeds 5
        collapseThreshold: 5,
      },
    },
    {
      // Component type: Tags component
      type: "tags",
      // Whether to enable this component
      enable: true,
      // Component display order
      order: 5,
      // Component position: "sticky" means sticky positioning
      position: "sticky",
      // CSS class name
      class: "onload-animation",
      // Animation delay time
      animationDelay: 250,
      // Responsive configuration
      responsive: {
        // Collapse threshold: auto collapse when tag count exceeds 20
        collapseThreshold: 20,
      },
    },
    {
      // Component type: Advertisement component 1
      type: "advertisement",
      // Whether to enable this component
      enable: false,
      // Component display order
      order: 7,
      // Component position: "sticky" means sticky positioning
      position: "sticky",
      // CSS class name
      class: "onload-animation",
      // Animation delay time
      animationDelay: 300,
      // Config ID: Use the first advertisement configuration
      configId: "ad1",
    },
    {
      // Component type: Advertisement component 2
      type: "advertisement",
      // Whether to enable this component
      enable: false,
      // Component display order
      order: 8,
      // Component position: "sticky" means sticky positioning
      position: "sticky",
      // CSS class name
      class: "onload-animation",
      // Animation delay time
      animationDelay: 350,
      // Config ID: Use the second advertisement configuration
      configId: "ad2",
    },
  ],

  // Default animation configuration
  defaultAnimation: {
    // Whether to enable default animation
    enable: true,
    // Base delay time (ms)
    baseDelay: 0,
    // Incremental delay time (ms), sequentially added to each component
    increment: 50,
  },

  // Responsive layout configuration
  responsive: {
    // Breakpoint configuration (pixels)
    breakpoints: {
      // Mobile breakpoint: screen width < 768px
      mobile: 768,
      // Tablet breakpoint: screen width < 1024px
      tablet: 1024,
      // Desktop breakpoint: screen width < 1280px
      desktop: 1280,
    },
    // Layout mode for different devices
    // hidden: Do not display sidebar (Desktop)   drawer: Drawer mode (Mobile - hidden by default)   sidebar: Display sidebar
    layout: {
      // Mobile: Drawer mode
      mobile: "sidebar",
      // Tablet: Display sidebar
      tablet: "sidebar",
      // Desktop: Display sidebar
      desktop: "sidebar",
    },
  },
};
