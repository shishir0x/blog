import { siteConfig } from "@/config/siteConfig";
import type I18nKey from "./i18nKey";
import { en } from "./languages/en";
import { ja } from "./languages/ja";
import { ru } from "./languages/ru";
import { zh_CN } from "./languages/zh_CN";
import { zh_TW } from "./languages/zh_TW";

export type Translation = {
  [K in I18nKey]: string;
};

const defaultTranslation = en;

const map: { [key: string]: Translation } = {
  en: en,
  en_us: en,
  en_gb: en,
  en_au: en,
  zh_cn: zh_CN,
  zh_tw: zh_TW,
  ja: ja,
  ja_jp: ja,
  ru: ru,
  ru_ru: ru,
};

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation;
}

export function i18n(key: I18nKey): string {
  const lang = getCurrentLang();
  return getTranslation(lang)[key];
}

/**
 * Get current language, prioritizing local storage (user runtime choice), otherwise fallback to site config
 */
export function getCurrentLang(): string {
  try {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("site-lang");
      if (saved && typeof saved === "string") {
        // Normalize
        const s = saved.toLowerCase();
        if (s.startsWith("en")) return "en";
        if (s === "zh_cn" || s === "zh-cn" || s === "zh_hans") return "zh_CN";
        if (s === "zh_tw" || s === "zh-tw" || s === "zh_hant") return "zh_TW";
        if (s.startsWith("ja")) return "ja";
        if (s.startsWith("ru")) return "ru";
      }
      // If not saved, try to guess from <html lang>
      const htmlLang = (document.documentElement.getAttribute("lang") || "").toLowerCase();
      if (htmlLang.startsWith("zh")) return "zh_CN";
      if (htmlLang.startsWith("ja")) return "ja";
      if (htmlLang.startsWith("ru")) return "ru";
    }
  } catch {}
  return siteConfig.lang || "en";
}
