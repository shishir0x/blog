// Configuration index file - unified export of all configurations
// This allows components to import multiple related configs at once, reducing duplicate import statements

// Type exports
export type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	FooterConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	ProfileConfig,
	SakuraConfig,
	SidebarLayoutConfig,
	SiteConfig,
	WidgetComponentConfig,
	WidgetComponentType,
} from "../types/config";
export { announcementConfig } from "./announcementConfig"; // Announcement configuration

// Feature configuration
export { commentConfig } from "./commentConfig"; // Comment system configuration
// Style configuration
export { expressiveCodeConfig } from "./expressiveCodeConfig"; // Code highlight configuration
export { fontConfig } from "./fontConfig"; // Font configuration
export { footerConfig } from "./footerConfig"; // Footer configuration
export { licenseConfig } from "./licenseConfig"; // License configuration
// Component configuration
export { musicPlayerConfig } from "./musicConfig"; // Music player configuration
export { navBarConfig } from "./navBarConfig"; // Navbar configuration
export { profileConfig } from "./profileConfig"; // User profile configuration
export { sakuraConfig } from "./sakuraConfig"; // Sakura effect configuration
// Layout configuration
export { sidebarLayoutConfig } from "./sidebarConfig"; // Sidebar layout configuration
// Core configuration
export { siteConfig } from "./siteConfig"; // Base site configuration
