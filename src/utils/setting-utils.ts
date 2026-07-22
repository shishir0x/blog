import {
  DARK_MODE,
  DEFAULT_THEME,
  LIGHT_MODE,
  SYSTEM_MODE,
  WALLPAPER_BANNER,
  WALLPAPER_OVERLAY,
  WALLPAPER_NONE,
} from "@constants/constants";
import { siteConfig } from "../config";
import type { LIGHT_DARK_MODE, WALLPAPER_MODE } from "@/types/config";

// Declare global functions
declare global {
	interface Window {
		initSemifullScrollDetection?: () => void;
		semifullScrollHandler?: () => void;
	}
}

export function getDefaultHue(): number {
  const fallback = "250";
  if (typeof document === 'undefined') {
    return Number.parseInt(fallback);
  }
  const configCarrier = document.getElementById("config-carrier");
  return Number.parseInt(configCarrier?.dataset.hue || fallback);
}

export function getDefaultTheme(): LIGHT_DARK_MODE {
  return siteConfig.themeColor.defaultMode ?? DEFAULT_THEME;
}

export function getSystemTheme(): LIGHT_DARK_MODE {
  if (typeof window === 'undefined') {
    return LIGHT_MODE;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_MODE : LIGHT_MODE;
}

export function resolveTheme(theme: LIGHT_DARK_MODE): LIGHT_DARK_MODE {
  if (theme === SYSTEM_MODE) {
    return getSystemTheme();
  }
  return theme;
}

export function getHue(): number {
  if (typeof localStorage === 'undefined') {
    return getDefaultHue();
  }
  const stored = localStorage.getItem("hue");
  return stored ? Number.parseInt(stored) : getDefaultHue();
}

export function setHue(hue: number): void {
  if (typeof localStorage === 'undefined' || typeof document === 'undefined') {
    return;
  }
  localStorage.setItem("hue", String(hue));
  const r = document.querySelector(":root") as HTMLElement;
  if (!r) {
    return;
  }
  r.style.setProperty("--hue", String(hue));
}

export function applyThemeToDocument(theme: LIGHT_DARK_MODE) {
  if (typeof document === 'undefined') {
    return;
  }
  
  const resolvedTheme = resolveTheme(theme);

  const currentIsDark = document.documentElement.classList.contains("dark");
  const currentTheme = document.documentElement.getAttribute("data-theme");

  let targetIsDark: boolean = false;
  switch (resolvedTheme) {
    case LIGHT_MODE:
      targetIsDark = false;
      break;
    case DARK_MODE:
      targetIsDark = true;
      break;
    default:
      targetIsDark = currentIsDark;
      break;
  }

  const needsThemeChange = currentIsDark !== targetIsDark;
  const expectedTheme = targetIsDark ? "github-dark" : "github-light";
  const needsCodeThemeUpdate = currentTheme !== expectedTheme;

  if (!needsThemeChange && !needsCodeThemeUpdate) {
    return;
  }

  if (needsThemeChange) {
    document.documentElement.classList.add("is-theme-transitioning");
  }

  requestAnimationFrame(() => {
    if (needsThemeChange) {
      if (targetIsDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    // Set the theme for Expressive Code based on current mode
    const expressiveTheme = targetIsDark ? "github-dark" : "github-light";
    document.documentElement.setAttribute("data-theme", expressiveTheme);

    if (needsCodeThemeUpdate) {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("theme-change"));
      }, 0);
    }

    if (needsThemeChange) {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove("is-theme-transitioning");
      });
    }
  });
}

let systemThemeListener: ((e: MediaQueryListEvent | MediaQueryList) => void) | null = null;

export function setTheme(theme: LIGHT_DARK_MODE): void {
  if (typeof localStorage === 'undefined') {
    return;
  }
  
  applyThemeToDocument(theme);
  
  localStorage.setItem("theme", theme);
  
  if (theme === SYSTEM_MODE) {
    setupSystemThemeListener();
  } else {
    cleanupSystemThemeListener();
  }
}

export function setupSystemThemeListener() {
  cleanupSystemThemeListener();
  
  if (typeof window === 'undefined') {
    return;
  }
  
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleSystemThemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
    const isDark = e.matches;
    
    document.documentElement.classList.add("is-theme-transitioning");
    
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Set the theme for Expressive Code
    const expressiveTheme = isDark ? "github-dark" : "github-light";
    document.documentElement.setAttribute("data-theme", expressiveTheme);
    
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("is-theme-transitioning");
    });
    
    window.dispatchEvent(new CustomEvent("theme-change"));
  };
  
  handleSystemThemeChange(mediaQuery);
  
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleSystemThemeChange);
  } else {
    (mediaQuery as any).addListener(handleSystemThemeChange);
  }
  
  systemThemeListener = handleSystemThemeChange;
}

function cleanupSystemThemeListener() {
  if (typeof window === 'undefined' || !systemThemeListener) {
    return;
  }
  
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  if (mediaQuery.removeEventListener) {
    mediaQuery.removeEventListener('change', systemThemeListener);
  } else {
    (mediaQuery as any).removeListener(systemThemeListener);
  }
  
  systemThemeListener = null;
}


export function getStoredTheme(): LIGHT_DARK_MODE {
  if (typeof localStorage === 'undefined') {
    return getDefaultTheme();
  }
  return (
    (localStorage.getItem("theme") as LIGHT_DARK_MODE) || getDefaultTheme()
  );
}

export function initThemeListener() {
  if (typeof localStorage === 'undefined') {
    return;
  }
  
  const theme = getStoredTheme();
  
  if (theme === SYSTEM_MODE) {
    setupSystemThemeListener();
  }
}

// Wallpaper mode functions
export function applyWallpaperModeToDocument(mode: WALLPAPER_MODE) {
	const isSwitchable = siteConfig.backgroundWallpaper.switchable ?? true;
	if (!isSwitchable) {
		return;
	}

	const currentMode = document.documentElement.getAttribute('data-wallpaper-mode') as WALLPAPER_MODE || siteConfig.backgroundWallpaper.mode;

	if (currentMode === mode) {
		ensureWallpaperState(mode);
		return;
	}

	document.documentElement.classList.add('is-wallpaper-transitioning');

	document.documentElement.setAttribute('data-wallpaper-mode', mode);

	requestAnimationFrame(() => {
		const body = document.body;

		body.classList.remove('enable-banner', 'wallpaper-transparent');

		switch (mode) {
			case WALLPAPER_BANNER:
				body.classList.add('enable-banner');
				showBannerMode();
				break;
			case WALLPAPER_OVERLAY:
				body.classList.add('wallpaper-transparent');
				showOverlayMode();
				break;
			case WALLPAPER_NONE:
				hideAllWallpapers();
				break;
			default:
				hideAllWallpapers();
				break;
		}

		updateNavbarTransparency(mode);

		requestAnimationFrame(() => {
			document.documentElement.classList.remove('is-wallpaper-transitioning');
		});
	});
}

function ensureWallpaperState(mode: WALLPAPER_MODE) {
	const body = document.body;
	
	body.classList.remove('enable-banner', 'wallpaper-transparent');
	
	switch (mode) {
		case WALLPAPER_BANNER:
			body.classList.add('enable-banner');
			showBannerMode();
			break;
		case WALLPAPER_OVERLAY:
			body.classList.add('wallpaper-transparent');
			showOverlayMode();
			break;
		case WALLPAPER_NONE:
			hideAllWallpapers();
			break;
	}
	
	updateNavbarTransparency(mode);
}

function showBannerMode() {
	const fullscreenContainer = document.querySelector('[data-fullscreen-wallpaper]') as HTMLElement;
	if (fullscreenContainer) {
		fullscreenContainer.style.display = 'none';
		fullscreenContainer.classList.add('hidden');
		fullscreenContainer.classList.add('opacity-0');
		fullscreenContainer.classList.remove('opacity-100');
	}

	const bannerWrapper = document.getElementById('banner-wrapper');
	if (bannerWrapper) {
		bannerWrapper.style.display = 'block';
		bannerWrapper.style.setProperty('display', 'block', 'important');
		requestAnimationFrame(() => {
			bannerWrapper.classList.remove('hidden');
			bannerWrapper.classList.remove('opacity-0');
			bannerWrapper.classList.add('opacity-100');
		});
	}

	const creditDesktop = document.getElementById('banner-credit-desktop');
	const creditMobile = document.getElementById('banner-credit-mobile');
	if (creditDesktop) creditDesktop.style.display = '';
	if (creditMobile) creditMobile.style.display = '';

	const bannerTextOverlay = document.querySelector('.banner-text-overlay');
	if (bannerTextOverlay) {
		const homeTextEnabled = siteConfig.backgroundWallpaper.banner?.homeText?.enable;
		
		const isHomePage = window.location.pathname === '/' || window.location.pathname === '';
		
		if (homeTextEnabled && isHomePage) {
			bannerTextOverlay.classList.remove('hidden');
		} else {
			bannerTextOverlay.classList.add('hidden');
		}
	}

	adjustMainContentPosition('banner');

	adjustMainContentTransparency(false);

	const navbar = document.getElementById('navbar');
	if (navbar) {
		const transparentMode = siteConfig.backgroundWallpaper.banner?.navbar?.transparentMode || 'semi';
		navbar.setAttribute('data-transparent-mode', transparentMode);

		if (transparentMode === 'semifull' && typeof window.initSemifullScrollDetection === 'function') {
			window.initSemifullScrollDetection();
		}
	}
}

function showOverlayMode() {
	const fullscreenContainer = document.querySelector('[data-fullscreen-wallpaper]') as HTMLElement;
	if (fullscreenContainer) {
		fullscreenContainer.style.display = 'block';
		fullscreenContainer.style.setProperty('display', 'block', 'important');
		requestAnimationFrame(() => {
			fullscreenContainer.classList.remove('hidden');
			fullscreenContainer.classList.remove('opacity-0');
			fullscreenContainer.classList.add('opacity-100');
		});
	}

	const bannerWrapper = document.getElementById('banner-wrapper');
	if (bannerWrapper) {
		bannerWrapper.style.display = 'none';
		bannerWrapper.classList.add('hidden');
		bannerWrapper.classList.add('opacity-0');
		bannerWrapper.classList.remove('opacity-100');
	}

	const creditDesktop = document.getElementById('banner-credit-desktop');
	const creditMobile = document.getElementById('banner-credit-mobile');
	if (creditDesktop) creditDesktop.style.display = 'none';
	if (creditMobile) creditMobile.style.display = 'none';

	const bannerTextOverlay = document.querySelector('.banner-text-overlay');
	if (bannerTextOverlay) {
		bannerTextOverlay.classList.add('hidden');
	}

	adjustMainContentTransparency(true);

	adjustMainContentPosition('overlay');
}

function hideAllWallpapers() {
	const bannerWrapper = document.getElementById('banner-wrapper');
	const fullscreenContainer = document.querySelector('[data-fullscreen-wallpaper]') as HTMLElement;

	if (bannerWrapper) {
		bannerWrapper.style.display = 'none';
		bannerWrapper.classList.add('hidden');
		bannerWrapper.classList.add('opacity-0');
	}

	if (fullscreenContainer) {
		fullscreenContainer.style.display = 'none';
		fullscreenContainer.classList.add('hidden');
		fullscreenContainer.classList.add('opacity-0');
		fullscreenContainer.classList.remove('opacity-100');
	}

	const creditDesktop = document.getElementById('banner-credit-desktop');
	const creditMobile = document.getElementById('banner-credit-mobile');
	if (creditDesktop) creditDesktop.style.display = 'none';
	if (creditMobile) creditMobile.style.display = 'none';

	const bannerTextOverlay = document.querySelector('.banner-text-overlay');
	if (bannerTextOverlay) {
		bannerTextOverlay.classList.add('hidden');
	}

	adjustMainContentPosition('none');
	adjustMainContentTransparency(false);
}

function updateNavbarTransparency(mode: WALLPAPER_MODE) {
	const navbar = document.getElementById('navbar');
	if (!navbar) return;

	let transparentMode: string;
	
	if (mode === WALLPAPER_OVERLAY) {
		transparentMode = 'semi';
	} else if (mode === WALLPAPER_NONE) {
		transparentMode = 'none';
	} else {
		transparentMode = siteConfig.backgroundWallpaper.banner?.navbar?.transparentMode || 'semi';
	}

	navbar.setAttribute('data-transparent-mode', transparentMode);

	navbar.classList.remove('navbar-transparent-semi', 'navbar-transparent-full', 'navbar-transparent-semifull');

	navbar.classList.remove('scrolled');

	if (transparentMode === 'semifull' && mode === WALLPAPER_BANNER && typeof window.initSemifullScrollDetection === 'function') {
		window.initSemifullScrollDetection();
	} else if (window.semifullScrollHandler) {
		window.removeEventListener('scroll', window.semifullScrollHandler);
		delete window.semifullScrollHandler;
	}
}

function adjustMainContentPosition(mode: WALLPAPER_MODE | 'banner' | 'none' | 'overlay') {
	const mainContent = document.querySelector('.absolute.w-full.z-30') as HTMLElement;
	if (!mainContent) return;

	mainContent.classList.remove('mobile-main-no-banner', 'no-banner-layout');

	switch (mode) {
		case 'banner':
			mainContent.style.top = 'calc(var(--banner-height) - 3rem)';
			break;
		case 'overlay':
			mainContent.classList.add('no-banner-layout');
			mainContent.style.top = '5.5rem';
			break;
		case 'none':
			mainContent.classList.add('no-banner-layout');
			mainContent.style.top = '5.5rem';
			break;
		default:
			mainContent.style.top = '5.5rem';
			break;
	}
}

function adjustMainContentTransparency(enable: boolean) {
	const mainContent = document.querySelector('.absolute.w-full.z-30');
	const body = document.body;
	
	if (!mainContent || !body) return;

	if (enable) {
		mainContent.classList.add('wallpaper-transparent');
		body.classList.add('wallpaper-transparent');
	} else {
		mainContent.classList.remove('wallpaper-transparent');
		body.classList.remove('wallpaper-transparent');
	}
}

export function setWallpaperMode(mode: WALLPAPER_MODE): void {
	if (typeof localStorage === 'undefined') {
		return;
	}
	localStorage.setItem('wallpaperMode', mode);
	applyWallpaperModeToDocument(mode);
}

export function initWallpaperMode(): void {
	const storedMode = getStoredWallpaperMode();
	applyWallpaperModeToDocument(storedMode);
}

export function getStoredWallpaperMode(): WALLPAPER_MODE {
	if (typeof localStorage === 'undefined') {
		return siteConfig.backgroundWallpaper.mode;
	}
	return (localStorage.getItem('wallpaperMode') as WALLPAPER_MODE) || siteConfig.backgroundWallpaper.mode;
}
