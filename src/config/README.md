# Configuration Files Description

This directory contains all the configuration files for the Firefly theme, designed modularly with each file responsible for a specific functional module.

## 📁 Configuration File Structure

```
src/config/
├── index.ts              # Configuration index file - unified export
├── siteConfig.ts         # Base site configuration
├── profileConfig.ts      # User profile configuration
├── musicConfig.ts        # Music player configuration
├── sakuraConfig.ts       # Sakura effect configuration
├── commentConfig.ts      # Comment system configuration
├── announcementConfig.ts # Announcement configuration
├── licenseConfig.ts      # License configuration
├── footerConfig.ts       # Footer configuration
├── expressiveCodeConfig.ts # Code highlight configuration
├── fontConfig.ts         # Font configuration
├── sidebarConfig.ts      # Sidebar configuration
├── navBarConfig.ts       # Navbar configuration
├── pioConfig.ts          # Pio model configuration
├── adConfig.ts           # Advertisement configuration
├── friendsConfig.ts      # Friends link configuration
└── README.md             # This file
```

## 🚀 Usage

### Recommended: Using configuration index (unified import)
```typescript
import { siteConfig, profileConfig, musicPlayerConfig } from '../config';
```

### Direct import of single configuration
```typescript
import { siteConfig } from '../config/siteConfig';
import { profileConfig } from '../config/profileConfig';
```

## 📋 Configuration File List

- `siteConfig.ts` - Base site configuration (title, description, theme color, etc.)
- `profileConfig.ts` - User profile configuration (avatar, name, social links, etc.)
- `musicConfig.ts` - Music player configuration (playlist, behavior, etc.)
- `sakuraConfig.ts` - Sakura effect configuration (amount, speed, size, etc.)
- `commentConfig.ts` - Comment system configuration (Twikoo comments and visitor stats)
- `announcementConfig.ts` - Announcement configuration (title, content, links, etc.)
- `licenseConfig.ts` - License configuration (CC protocols, etc.)
- `footerConfig.ts` - Footer configuration (HTML injection, etc.)
- `expressiveCodeConfig.ts` - Code highlight configuration (theme, etc.)
- `fontConfig.ts` - Font configuration (font family, size, etc.)
- `sidebarConfig.ts` - Sidebar configuration (component layout, etc.)
- `navBarConfig.ts` - Navbar configuration (links, styles, etc.)
- `pioConfig.ts` - Pio model configuration (Spine, Live2D, etc.)
- `adConfig.ts` - Advertisement configuration (ad slots, etc.)
- `friendsConfig.ts` - Friends link configuration (friends list, etc.)


```
