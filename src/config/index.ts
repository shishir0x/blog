// Configuration index file - unified export of all configurations
// This allows components to import multiple related configs at once, reducing duplicate import statements

// Core configuration
export { siteConfig } from "./siteConfig"; // Base site configuration
export { profileConfig } from "./profileConfig"; // User profile configuration

// Feature configuration
export { commentConfig } from "./commentConfig"; // Comment system configuration
export { announcementConfig } from "./announcementConfig"; // Announcement configuration
export { licenseConfig } from "./licenseConfig"; // License configuration
export { footerConfig } from "./footerConfig"; // Footer configuration

// Style configuration
export { expressiveCodeConfig } from "./expressiveCodeConfig"; // Code highlight configuration
export { sakuraConfig } from "./sakuraConfig"; // Sakura effect configuration
export { fontConfig } from "./fontConfig"; // Font configuration

// Layout configuration
export { sidebarLayoutConfig } from "./sidebarConfig"; // Sidebar layout configuration
export { navBarConfig } from "./navBarConfig"; // Navbar configuration

// Component configuration
export { musicPlayerConfig } from "./musicConfig"; // Music player configuration
export { spineModelConfig, live2dModelConfig } from "./pioConfig"; // Live2D/Spine mascot configuration
export { adConfig1, adConfig2 } from "./adConfig"; // Advertisement configuration
export { getEnabledFriends } from "./friendsConfig"; // Friends link configuration

// Type exports
export type {
  SiteConfig,
  ProfileConfig,
  CommentConfig,
  AnnouncementConfig,
  LicenseConfig,
  FooterConfig,
  ExpressiveCodeConfig,
  SakuraConfig,
  MusicPlayerConfig,
  SidebarLayoutConfig,
  NavBarConfig,
  WidgetComponentConfig,
  WidgetComponentType,
} from "../types/config";
