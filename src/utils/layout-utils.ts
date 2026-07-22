import { siteConfig } from '../config';

export const getBackgroundImages = () => {
	const bgSrc = siteConfig.backgroundWallpaper.src;

	if (
		typeof bgSrc === "object" &&
		bgSrc !== null &&
		!Array.isArray(bgSrc) &&
		("desktop" in bgSrc || "mobile" in bgSrc)
	) {
		const srcObj = bgSrc as {
			desktop?: string | string[];
			mobile?: string | string[];
		};
		return {
			desktop: srcObj.desktop || srcObj.mobile || "",
			mobile: srcObj.mobile || srcObj.desktop || "",
		};
	}
	return {
		desktop: bgSrc,
		mobile: bgSrc,
	};
};

export const isBannerSrcObject = (
	src:
		| string
		| string[]
		| { desktop?: string | string[]; mobile?: string | string[] },
): src is { desktop?: string | string[]; mobile?: string | string[] } => {
	return (
		typeof src === "object" &&
		src !== null &&
		!Array.isArray(src) &&
		("desktop" in src || "mobile" in src)
	);
};

export const getDefaultBackground = (): string => {
	const src = siteConfig.backgroundWallpaper.src;
	if (typeof src === "string") {
		return src;
	}
	if (src && typeof src === "object" && !Array.isArray(src)) {
		const desktopSrc = src.desktop;
		const mobileSrc = src.mobile;
		if (typeof desktopSrc === "string") {
			return desktopSrc;
		}
		if (typeof mobileSrc === "string") {
			return mobileSrc;
		}
	}
	return "";
};

export const isHomePage = (pathname: string): boolean => {
	const baseUrl = import.meta.env.BASE_URL || "/";
	
	const normalizedPath = pathname.replace(baseUrl, "/");
	
	return normalizedPath === "/" || normalizedPath === "";
};

export const getBannerOffset = (position: string = "center") => {
	const bannerOffsetByPosition = {
		top: "100vh",
		center: "50vh", 
		bottom: "0",
	};
	return bannerOffsetByPosition[position as keyof typeof bannerOffsetByPosition] || "50vh";
};
