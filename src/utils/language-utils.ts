export function getLanguageDisplayName(langCode: string): string {
	const languageNames: Record<string, string> = {
		zh_CN: "Simplified Chinese",
		zh_TW: "Traditional Chinese",
		en: "English",
		ja: "Japanese",
		ko: "Korean",
		es: "Spanish",
		th: "Thai",
		vi: "Vietnamese",
		tr: "Turkish",
		id: "Indonesian",
		fr: "French",
		de: "German",
		ru: "Russian",
		ar: "Arabic",
		chinese_simplified: "Simplified Chinese",
		chinese_traditional: "Traditional Chinese",
		english: "English",
		japanese: "Japanese",
		korean: "Korean",
		spanish: "Spanish",
		thai: "Thai",
		vietnamese: "Vietnamese",
		turkish: "Turkish",
		indonesian: "Indonesian",
		french: "French",
		german: "German",
		russian: "Russian",
		arabic: "Arabic",
	};

	return languageNames[langCode] || langCode;
}
