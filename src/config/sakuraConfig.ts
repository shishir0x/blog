import type { SakuraConfig } from "../types/config";

export const sakuraConfig: SakuraConfig = {
  enable: false, // Default is false to disable sakura effect
  sakuraNum: 21, // Number of sakura
  limitTimes: -1, // Sakura out of bounds limit, -1 for infinite loop
  size: {
    min: 0.5, // Minimum size multiplier
    max: 1.1, // Maximum size multiplier
  },
  opacity: {
    min: 0.3, // Minimum opacity
    max: 0.9, // Maximum opacity
  },
  speed: {
    horizontal: {
      min: -1.7, // Minimum horizontal movement speed
      max: -1.2, // Maximum horizontal movement speed
    },
    vertical: {
      min: 1.5, // Minimum vertical movement speed
      max: 2.2, // Maximum vertical movement speed
    },
    rotation: 0.03, // Rotation speed
    fadeSpeed: 0.03, // Fade speed, should not be greater than minimum opacity
  },
  zIndex: 100, // Z-index, ensure sakura are displayed at the appropriate layer
};
