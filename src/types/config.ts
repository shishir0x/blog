import type {
  DARK_MODE,
  LIGHT_MODE,
  SYSTEM_MODE,
  WALLPAPER_BANNER,
  WALLPAPER_OVERLAY,
  WALLPAPER_NONE,
} from "../constants/constants";

export type SiteConfig = {
  title: string;
  subtitle: string;
  description?: string;
  keywords?: string[];

  lang:
    | "en"
    | "zh_CN"
    | "zh_TW"
    | "ja"
    | "ru";

  themeColor: {
    hue: number;
    fixed: boolean;
    defaultMode?: LIGHT_DARK_MODE;
  };


  font: FontConfig;


  bangumi?: {
    userId?: string;
  };

  backgroundWallpaper: BackgroundWallpaperConfig;
  toc: {
    enable: boolean;
    depth: 1 | 2 | 3;
  };
  generateOgImages: boolean;
  favicon: Array<{
    src: string;
    theme?: "light" | "dark";
    sizes?: string;
  }>;
  
  navbarLogo?: {
    type: "icon" | "image";
    value: string;
    alt?: string;
  };
  navbarTitle?: string;
  showLastModified: boolean;


  pages: {
    anime: boolean;
  };


  postListLayout: {
    defaultMode: "list" | "grid";
    allowSwitch: boolean;
  };


  pagination: {
    postsPerPage: number;
  };
};

export type Favicon = {
  src: string;
  theme?: "light" | "dark";
  sizes?: string;
};

export enum LinkPreset {
  Home = 0,
  Archive = 1,
  About = 2,
  Friends = 3,
  Anime = 4,
}

export type NavBarLink = {
  name: string;
  url: string;
  external?: boolean;
  icon?: string;
  children?: (NavBarLink | LinkPreset)[];
};

export type NavBarConfig = {
  links: (NavBarLink | LinkPreset)[];
};

export type ProfileConfig = {
  avatar?: string;
  name: string;
  bio?: string;
  links: {
    name: string;
    url: string;
    icon: string;
  }[];
};

export type LicenseConfig = {
  enable: boolean;
  name: string;
  url: string;
};


export type CommentConfig = {
  enable: boolean;
  enableVisitorCount?: boolean;
  twikoo?: TwikooConfig;
};

type TwikooConfig = {
  envId: string;
  region?: string;
  lang?: string;
};

export type LIGHT_DARK_MODE =
  | typeof LIGHT_MODE
  | typeof DARK_MODE
  | typeof SYSTEM_MODE;

export type WALLPAPER_MODE =
  | typeof WALLPAPER_BANNER
  | typeof WALLPAPER_OVERLAY
  | typeof WALLPAPER_NONE;

export type BlogPostData = {
  body: string;
  title: string;
  published: Date;
  description: string;
  tags: string[];
  draft?: boolean;
  image?: string;
  category?: string;
  pinned?: boolean;
  prevTitle?: string;
  prevSlug?: string;
  nextTitle?: string;
  nextSlug?: string;
};

export type ExpressiveCodeConfig = {
  theme: string;
};

export type AnnouncementConfig = {

  title?: string;
  content: string;
  icon?: string;
  type?: "info" | "warning" | "success" | "error";
  closable?: boolean;
  link?: {
    enable: boolean;
    text: string;
    url: string;
    external?: boolean;
  };
};


export type FontItem = {
  id: string;
  name: string;
  src: string;
  family: string;
  weight?: string | number;
  style?: "normal" | "italic" | "oblique";
  display?: "auto" | "block" | "swap" | "fallback" | "optional";
  unicodeRange?: string;
  format?:
    | "woff"
    | "woff2"
    | "truetype"
    | "opentype"
    | "embedded-opentype"
    | "svg";
};


export type FontConfig = {
  enable: boolean;
  selected: string | string[];
  fonts: Record<string, FontItem>;
  fallback?: string[];
  preload?: boolean;
};

export type FooterConfig = {
  enable: boolean;
  customHtml?: string;
};


export type WidgetComponentType =
  | "profile"
  | "announcement"
  | "categories"
  | "tags"
  | "toc"
  | "advertisement"
  | "music-player"
  | "custom";

export type WidgetComponentConfig = {
  type: WidgetComponentType;
  enable: boolean;
  order: number;
  position: "top" | "sticky";
  class?: string;
  style?: string;
  animationDelay?: number;
  configId?: string;
  responsive?: {
    hidden?: ("mobile" | "tablet" | "desktop")[];
    collapseThreshold?: number;
  };
  customProps?: Record<string, any>;
};

export type SidebarLayoutConfig = {
  enable: boolean;
  position: "left" | "right";
  components: WidgetComponentConfig[];
  defaultAnimation: {
    enable: boolean;
    baseDelay: number;
    increment: number;
  };
  responsive: {
    breakpoints: {
      mobile: number;
      tablet: number;
      desktop: number;
    };
    layout: {
      mobile: "hidden" | "bottom" | "drawer" | "sidebar";
      tablet: "sidebar" | "bottom" | "drawer";
      desktop: "sidebar";
    };
  };
};

export type SakuraConfig = {
  enable: boolean;
  sakuraNum: number;
  limitTimes: number;
  size: {
    min: number;
    max: number;
  };
  opacity: {
    min: number;
    max: number;
  };
  speed: {
    horizontal: {
      min: number;
      max: number;
    };
    vertical: {
      min: number;
      max: number;
    };
    rotation: number;
    fadeSpeed: number;
  };
  zIndex: number;
};


export type SpineModelConfig = {
  enable: boolean;
  model: {
    path: string;
    scale?: number;
    x?: number;
    y?: number;
  };
  position: {
    corner: "bottom-left" | "bottom-right" | "top-left" | "top-right";
    offsetX?: number;
    offsetY?: number;
  };
  size: {
    width?: number;
    height?: number;
  };
  interactive?: {
    enabled?: boolean;
    clickAnimations?: string[];
    clickMessages?: string[];
    messageDisplayTime?: number;
    idleAnimations?: string[];
    idleInterval?: number;
  };
  responsive?: {
    hideOnMobile?: boolean;
    mobileBreakpoint?: number;
  };
  zIndex?: number;
  opacity?: number;
};


export type Live2DModelConfig = {
  enable: boolean;
  model: {
    path: string;
  };
  position?: {
    corner?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
    offsetX?: number;
    offsetY?: number;
  };
  size?: {
    width?: number;
    height?: number;
  };
  interactive?: {
    enabled?: boolean;

    clickMessages?: string[];
    messageDisplayTime?: number;
  };
  responsive?: {
    hideOnMobile?: boolean;
    mobileBreakpoint?: number;
  };
};

export type BackgroundWallpaperConfig = {
  mode: "banner" | "overlay" | "none";
  switchable?: boolean;
  src:
    | string
    | string[]
    | {
        desktop?: string | string[];
        mobile?: string | string[];
      };
  position?:
    | "top"
    | "center"
    | "bottom"
    | "top left"
    | "top center"
    | "top right"
    | "center left"
    | "center center"
    | "center right"
    | "bottom left"
    | "bottom center"
    | "bottom right"
    | "left top"
    | "left center"
    | "left bottom"
    | "right top"
    | "right center"
    | "right bottom"
    | string;

  banner?: {
    homeText?: {
      enable: boolean;
      title?: string;
      subtitle?: string | string[];
      typewriter?: {
        enable: boolean;
        speed: number;
        deleteSpeed: number;
        pauseTime: number;
      };
    };
    credit?: {
      enable:
        | boolean
        | {
            desktop: boolean;
            mobile: boolean;
          };
      text:
        | string
        | {
            desktop: string;
            mobile: string;
          };
      url?:
        | string
        | {
            desktop: string;
            mobile: string;
          };
    };
    navbar?: {
      transparentMode?: "semi" | "full" | "semifull";
    };
    waves?: {
      enable:
        | boolean
        | {
            desktop: boolean;
            mobile: boolean;
          };
      performance?: {
        quality: "high" | "medium" | "low";
        hardwareAcceleration: boolean;
      };
    };
  };

  overlay?: {
    zIndex?: number;
    opacity?: number;
    blur?: number;
  };
};


export type AdConfig = {
  title?: string;
  content?: string;
  image?: {
    src: string;
    alt?: string;
    link?: string;
    external?: boolean;
  };
  link?: {
    text: string;
    url: string;
    external?: boolean;
  };
  padding?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    all?: string;
  };
  closable?: boolean;
  displayCount?: number;
  expireDate?: string;
};


export type FriendLink = {
  title: string;
  imgurl: string;
  desc: string;
  siteurl: string;
  tags?: string[];
  weight: number;
  enabled: boolean;
};



export type MusicPlayerConfig = {

	mode?: "meting" | "local";


	volume?: number;


	playMode?: "list" | "one" | "random";


	showLyrics?: boolean;


	showInNavbar?: boolean;


	meting?: {

		api?: string;


		server?: "netease" | "tencent" | "kugou" | "xiami" | "baidu";


		type?: "song" | "playlist" | "album" | "search" | "artist";


		id?: string;


		auth?: string;


		fallbackApis?: string[];
	};


	local?: {
		playlist?: Array<{
			name: string;
			artist: string;
			url: string;
			cover?: string;
			lrc?: string;
		}>;
	};
};