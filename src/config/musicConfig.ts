import type { MusicPlayerConfig } from "../types/config";

// Music player configuration
export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true,

	// Whether to show the music player entry in the navbar
	showInNavbar: true,

	// Usage mode: "youtube" uses YouTube audio, "meting" uses Meting API, "local" uses local music
	mode: "youtube",

	// Default volume (0-1)
	volume: 0.7,

	// Play mode: 'list' = loop list, 'one' = loop single, 'random' = random play
	playMode: "list",

	// Whether to explicitly enable lyrics
	showLyrics: true,

	// YouTube Music configuration - Cigarettes After Sex Complete Playlist
	// Source: https://music.youtube.com/playlist?list=RDCLAK5uy_nOrDvSEvGd8pjHwCLbO4iDH1WtcKXP6Fo
	youtube: {
		playlist: [
			{ name: "Apocalypse", artist: "Cigarettes After Sex", id: "sElE_BfQ67s", cover: "https://i.ytimg.com/vi/sElE_BfQ67s/hqdefault.jpg" },
			{ name: "K.", artist: "Cigarettes After Sex", id: "L4sbDxR22z4", cover: "https://i.ytimg.com/vi/L4sbDxR22z4/hqdefault.jpg" },
			{ name: "Sunsetz", artist: "Cigarettes After Sex", id: "5-rbSNzU_b8", cover: "https://i.ytimg.com/vi/5-rbSNzU_b8/hqdefault.jpg" },
			{ name: "Sweet", artist: "Cigarettes After Sex", id: "pZ31pyTZdh0", cover: "https://i.ytimg.com/vi/pZ31pyTZdh0/hqdefault.jpg" },
			{ name: "Cry", artist: "Cigarettes After Sex", id: "3XqqkrJENB4", cover: "https://i.ytimg.com/vi/3XqqkrJENB4/hqdefault.jpg" },
			{ name: "Nothing's Gonna Hurt You Baby", artist: "Cigarettes After Sex", id: "QI8VrXkffcg", cover: "https://i.ytimg.com/vi/QI8VrXkffcg/hqdefault.jpg" },
			{ name: "Heavenly", artist: "Cigarettes After Sex", id: "s1QCL9AGbO0", cover: "https://i.ytimg.com/vi/s1QCL9AGbO0/hqdefault.jpg" },
			{ name: "Tejano Blue", artist: "Cigarettes After Sex", id: "--JuMkludKM", cover: "https://i.ytimg.com/vi/--JuMkludKM/hqdefault.jpg" },
			{ name: "Pistol", artist: "Cigarettes After Sex", id: "rrXobXg73ec", cover: "https://i.ytimg.com/vi/rrXobXg73ec/hqdefault.jpg" },
			{ name: "You're All I Want", artist: "Cigarettes After Sex", id: "BZ6D9SEvBHs", cover: "https://i.ytimg.com/vi/BZ6D9SEvBHs/hqdefault.jpg" },
			{ name: "Baby Blue Movie", artist: "Cigarettes After Sex", id: "BeAzmDCWUzI", cover: "https://i.ytimg.com/vi/BeAzmDCWUzI/hqdefault.jpg" },
			{ name: "Falling In Love", artist: "Cigarettes After Sex", id: "AXupa6hEDYk", cover: "https://i.ytimg.com/vi/AXupa6hEDYk/hqdefault.jpg" },
			{ name: "Affection", artist: "Cigarettes After Sex", id: "5soixb2U6xM", cover: "https://i.ytimg.com/vi/5soixb2U6xM/hqdefault.jpg" },
			{ name: "Dreaming Of You", artist: "Cigarettes After Sex", id: "ZuIDh4XIzxU", cover: "https://i.ytimg.com/vi/ZuIDh4XIzxU/hqdefault.jpg" },
			{ name: "Crush", artist: "Cigarettes After Sex", id: "p7lHdbL--Ls", cover: "https://i.ytimg.com/vi/p7lHdbL--Ls/hqdefault.jpg" },
			{ name: "Opera House", artist: "Cigarettes After Sex", id: "giEOcBLcnfE", cover: "https://i.ytimg.com/vi/giEOcBLcnfE/hqdefault.jpg" },
			{ name: "Sesame Syrup", artist: "Cigarettes After Sex", id: "9q2UgXro0VU", cover: "https://i.ytimg.com/vi/9q2UgXro0VU/hqdefault.jpg" },
			{ name: "Keep On Loving You", artist: "Cigarettes After Sex", id: "PDJPpG8e4n4", cover: "https://i.ytimg.com/vi/PDJPpG8e4n4/hqdefault.jpg" },
			{ name: "Each Time You Fall In Love", artist: "Cigarettes After Sex", id: "caxGz3cs7-Y", cover: "https://i.ytimg.com/vi/caxGz3cs7-Y/hqdefault.jpg" },
			{ name: "John Wayne", artist: "Cigarettes After Sex", id: "M5gjHFmi2Co", cover: "https://i.ytimg.com/vi/M5gjHFmi2Co/hqdefault.jpg" },
			{ name: "Don't Let Me Go", artist: "Cigarettes After Sex", id: "lY3g3h0iP3A", cover: "https://i.ytimg.com/vi/lY3g3h0iP3A/hqdefault.jpg" },
			{ name: "Dark Vacay", artist: "Cigarettes After Sex", id: "-gDUUp5iKns", cover: "https://i.ytimg.com/vi/-gDUUp5iKns/hqdefault.jpg" },
			{ name: "Dreams From Bunker Hill", artist: "Cigarettes After Sex", id: "mL6659-jwaM", cover: "https://i.ytimg.com/vi/mL6659-jwaM/hqdefault.jpg" },
			{ name: "Twizzler", artist: "Cigarettes After Sex", id: "nVnqJQ1_1So", cover: "https://i.ytimg.com/vi/nVnqJQ1_1So/hqdefault.jpg" },
			{ name: "The Crystal Ship", artist: "Cigarettes After Sex", id: "65XQOnh20jg", cover: "https://i.ytimg.com/vi/65XQOnh20jg/hqdefault.jpg" },
			{ name: "Motion Picture Soundtrack", artist: "Cigarettes After Sex", id: "madTVO1Bons", cover: "https://i.ytimg.com/vi/madTVO1Bons/hqdefault.jpg" },
			{ name: "Young & Dumb", artist: "Cigarettes After Sex", id: "VlBIeZi3Ko4", cover: "https://i.ytimg.com/vi/VlBIeZi3Ko4/hqdefault.jpg" },
			{ name: "Flash", artist: "Cigarettes After Sex", id: "nrWC_z6l13w", cover: "https://i.ytimg.com/vi/nrWC_z6l13w/hqdefault.jpg" },
			{ name: "I'm a Firefighter", artist: "Cigarettes After Sex", id: "Arb-sLQv5tw", cover: "https://i.ytimg.com/vi/Arb-sLQv5tw/hqdefault.jpg" },
			{ name: "Neon Moon", artist: "Cigarettes After Sex", id: "BrzXW140-HM", cover: "https://i.ytimg.com/vi/BrzXW140-HM/hqdefault.jpg" },
			{ name: "X's", artist: "Cigarettes After Sex", id: "oXcX94gLTfo", cover: "https://i.ytimg.com/vi/oXcX94gLTfo/hqdefault.jpg" },
		],
	},

	// Meting API Configuration (kept for fallback)
	meting: {
		api: "https://api.qijieya.cn/meting/?type=:type&id=:id",
		server: "netease",
		type: "search",
		id: "Cigarettes After Sex",
		auth: "",
		fallbackApis: [
			"https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// Local music configuration (used when mode is 'local')
	local: {
		playlist: [],
	},
};