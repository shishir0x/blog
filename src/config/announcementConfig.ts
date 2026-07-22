import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
  title: "Announcement", // Announcement title
  content: "Welcome to my blog! This is a sample announcement.", // Announcement content
  closable: true, // Allow users to close the announcement
  link: {
    enable: true, // Enable link
    text: "Learn More", // Link text
    url: "/about/", // Link URL
    external: false, // Internal link
  },
};
