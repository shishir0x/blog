import type { CommentConfig } from "../types/config";

export const commentConfig: CommentConfig = {
	enable: true, // Enable comment feature. When set to false, comment component will not be displayed in article area.
	enableVisitorCount: false, // Set to false so 'Views: Loading...' is removed.
	waline: {
		serverURL: "https://blogcomment-ten.vercel.app/", // Paste the URL you get from Vercel here
		lang: "en",
	},
};
