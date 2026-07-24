import type { CommentConfig } from "../types/config";

export const commentConfig: CommentConfig = {
  enable: true, // Enable comment feature. When set to false, comment component will not be displayed in article area.
  enableVisitorCount: true, // Enable article visitor count feature. When set to false, article visitor count will not be displayed. Requires both enable and enableVisitorCount to be true to take effect.
  waline: {
    serverURL: "https://blogcomment-ten.vercel.app/", // Paste the URL you get from Vercel here
    lang: "en",
  },
};
