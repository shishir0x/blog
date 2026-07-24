import type { CommentConfig } from "../types/config";

export const commentConfig: CommentConfig = {
  enable: true, // Enable comment feature. When set to false, comment component will not be displayed in article area.
  enableVisitorCount: true, // Enable article visitor count feature. When set to false, article visitor count will not be displayed. Requires both enable and enableVisitorCount to be true to take effect.
  cusdis: {
    appId: "6f89a053-1994-4c92-90c2-a0b4f4db97a7", // Get this from cusdis.com
    host: "https://cusdis.com", // Default host for Cusdis cloud
    lang: "en",
  },
};
