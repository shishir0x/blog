import type { CommentConfig } from "../types/config";

export const commentConfig: CommentConfig = {
  enable: true, // Enable comment feature. When set to false, comment component will not be displayed in article area.
  enableVisitorCount: true, // Enable article visitor count feature. When set to false, article visitor count will not be displayed. Requires both enable and enableVisitorCount to be true to take effect.
  twikoo: {
    envId: "https://twikoo-vercel-xi-nine.vercel.app/",
    lang: "en", // Default language, will dynamically switch based on user selection at runtime
  },
};
