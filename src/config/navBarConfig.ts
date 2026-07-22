import type { NavBarConfig, NavBarLink } from "../types/config";
import { LinkPreset } from "../types/config";
import { siteConfig } from "./siteConfig";
// Avoid importing i18n here to prevent circular deps. Compute simple defaults based on site language.

function tLinks(): string {
  const lang = (siteConfig.lang || 'en').toLowerCase();
  if (lang.startsWith('zh')) return 'Links';
  if (lang.startsWith('ja')) return 'Links';
  if (lang.startsWith('ru')) return 'Links';
  return 'Links';
}

function tAbout(): string {
  const lang = (siteConfig.lang || 'en').toLowerCase();
  if (lang.startsWith('zh')) return 'About';
  if (lang.startsWith('ja')) return 'About';
  if (lang.startsWith('ru')) return 'About';
  return 'About';
}

// Dynamically generate navbar configuration based on page switches
const getDynamicNavBarConfig = (): NavBarConfig => {
  const links: (NavBarLink | LinkPreset)[] = [
    LinkPreset.Home,
    LinkPreset.Archive,
  ];

  // Add anime page based on config
  if (siteConfig.pages.anime) {
    links.push(LinkPreset.Anime);
  }

  // Support custom navbar links and multi-level menus
  links.push({
    name: tLinks(),
    url: "/links/",
    icon: "material-symbols:link",
    children: [
      {
        name: "GitHub",
        url: "https://github.com/alvinluo-tech",
        external: true,
        icon: "fa6-brands:github",
      },
        {
      name: "youtube",
      icon: "youtube",
      external: true,
      url: "https://www.youtube.com/@ItsAlvinLuo",
    },
             {
      name: "bilibili",
      icon: "bilibili",
      external: true,
      url: "https://space.bilibili.com/1506265259",
    },
        {
      name: "Instagram",
      url: "https://www.instagram.com/alvinluo_lys",
      icon: "instagram",
      external: true,
    },
       {
        name: "Redbook",
        url: "https://www.xiaohongshu.com/user/profile/5fa793ed00000000010038a3",
        external: true,
        icon: "redbook",
      },
      // {
      //   name: "Tiktok",
      //   url: "https://www.tiktok.com/@alvinluo86",
      //   external: true,
      //   icon: "tiktok",
      // },
  

      
      
    ],
  });

  // links.push(LinkPreset.Friends);

  links.push({
    name: tAbout(),
    url: "/content/",
    icon: "material-symbols:info",
    children: [LinkPreset.About],
  });
  return { links };
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
