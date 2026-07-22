import type { SpineModelConfig, Live2DModelConfig } from "../types/config";

// Spine Mascot Configuration
export const spineModelConfig: SpineModelConfig = {
  enable: true, // Enable Spine mascot
  model: {
    // Spine model file path
    path: "/pio/models/spine/firefly/1310.json",
    scale: 1.0, // Model scaling ratio
    x: 0, // X-axis offset
    y: 0, // Y-axis offset
  },
  position: {
    // Display position bottom-left, bottom-right, top-left, top-right, note: bottom-right may block the back to top button
    corner: "bottom-left",
    offsetX: 0, // Distance from right edge 0px
    offsetY: 0, // Distance from bottom 0px
  },
  size: {
    width: 135, // Container width
    height: 165, // Container height
  },
  interactive: {
    enabled: true, // Enable interactive features
    clickAnimations: [
      "emoji_0",
      "emoji_1",
      "emoji_2",
      "emoji_3",
      "emoji_4",
      "emoji_5",
      "emoji_6",
    ], // List of random animations on click
    clickMessages: [
      "Hello! I am Shishir ",
      "hello, i'm Shishir!",
      "Keep it up today! ✨",
      "Want to watch the starry sky together? 🌟",
      "Remember to get a good rest ",
      "Anything you want to tell me? 💫",
      "Let's explore the unknown world together! 🚀",
      "Every star has its own story⭐",
      "Hope to bring you warmth and joy! 💖",
    ], // Random text messages displayed on click
    messageDisplayTime: 3000, // Text display time (ms)
    idleAnimations: ["idle", "emoji_0", "emoji_1", "emoji_3", "emoji_4"], // List of idle animations
    idleInterval: 8000, // Idle animation toggle interval (8 seconds)
  },
  responsive: {
    hideOnMobile: true, // Hide on mobile
    mobileBreakpoint: 768, // Mobile breakpoint
  },
  zIndex: 1000, // Z-index
  opacity: 1.0, // Fully opaque
};

// Live2D Mascot Configuration
export const live2dModelConfig: Live2DModelConfig = {
  enable: false, // Enable Live2D mascot
  model: {
    // Live2D model file path
    path: "/pio/models/live2d/snow_miku/model.json",
    // path: "/pio/models/live2d/illyasviel/illyasviel.model.json",
  },
  position: {
    // Display position bottom-left, bottom-right, top-left, top-right, note: bottom-right may block the back to top button
    corner: "bottom-left", // Display position
    offsetX: 0, // Distance from edge 20px
    offsetY: 0, // Distance from bottom 20px
  },
  size: {
    width: 135, // Container width
    height: 165, // Container height
  },
  interactive: {
    enabled: true, // Enable interactive features
    // motions and expressions are automatically read from the model JSON file
    clickMessages: [
      "Hello! I am Miku~",
      "Is there anything I can help you with?",
      "The weather is really nice today!",
      "Want to play games together?",
      "Remember to rest on time!",
    ], // Random text messages displayed on click
    messageDisplayTime: 3000, // Text display time (ms)
  },
  responsive: {
    hideOnMobile: true, // Hide on mobile
    mobileBreakpoint: 768, // Mobile breakpoint
  },
};
