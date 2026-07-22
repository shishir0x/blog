import type { MusicPlayerConfig } from "../types/config";

// Music player configuration
export const musicPlayerConfig: MusicPlayerConfig = {
	// Methods to disable the music player:
	// The template displays it in both the sidebar and navbar by default
	// 1. Sidebar: Set enable to false for the music component in sidebarConfig.ts
	// 2. Navbar: Set showInNavbar to false in this configuration file

	// Whether to show the music player entry in the navbar
	showInNavbar: true,

	// Usage mode: "meting" uses Meting API, "local" uses local music list
	mode: "meting",

	// Default volume (0-1)
	volume: 0.7,

	// Play mode: 'list' = loop list, 'one' = loop single, 'random' = random play
	playMode: "list",

	// Whether to explicitly enable lyrics
	showLyrics: true,

	// Meting API Configuration
	meting: {
		// Meting API address
		// Defaults to official API, can also use a custom API
		api: "https://api.qijieya.cn/meting/?type=:type&id=:id",
		// Music platform: netease, tencent, kugou, xiami, baidu
		server: "netease",
		// Type: song, playlist, album, search, artist
		type: "playlist",
		// Playlist/Album/Song ID or search keywords
		id: "17459518569",
		// Auth token (optional)
		auth: "",
		// Fallback APIs (used when primary API fails)
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// Local music configuration (used when mode is 'local')
	// 1. Supports passing the path to a lyric file
	// lrc: "/assets/music/lrc/song-lyrics.lrc",
	// 2. Or directly passing the lyric string content
	// lrc: "[00:00.00]Lyric content...",
	local: {
		playlist: [
			{
				name: "Save One Heart from Despair",
				artist: "Robin / HOYO-MiX / Chevy",
				url: "/assets/music/使一颗心免于哀伤-哼唱.mp3",
				cover: "/assets/music/cover/109951169585655912.webp",
				lrc: "",
			},
		],
	},
};