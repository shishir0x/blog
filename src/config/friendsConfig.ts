import type { FriendLink } from "../types/config";

// You can write custom content below the friends link page in src/content/spec/friends.md

// Friends link configuration
export const friendsConfig: FriendLink[] = [
  {
    title: "Summer Night Fireflies",
    imgurl:
      "https://q.qlogo.cn/headimg_dl?dst_uin=7618557&spec=640&img_type=jpg",
    desc: "There is always an encounter that is mutually liked!",
    siteurl: "https://blog.cuteleaf.cn",
    tags: ["Blog"],
    weight: 10, // Weight, larger number means higher sorting priority
    enabled: true, // Whether it is enabled
  },
  {
    title: "Firefly Docs",
    imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
    desc: "Firefly Theme Template Documentation",
    siteurl: "https://docs-firefly.cuteleaf.cn",
    tags: ["Docs"],
    weight: 9,
    enabled: true,
  },
  {
    title: "Firefly",
    imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
    desc: "Firefly - A fresh and beautiful Astro blog theme template",
    siteurl: "https://github.com/CuteLeaf/Firefly",
    tags: ["GitHub", "Theme"],
    weight: 9,
    enabled: true,
  },
  {
    title: "Astro",
    imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
    desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
    siteurl: "https://github.com/withastro/astro",
    tags: ["Framework"],
    weight: 8,
    enabled: true,
  },
];

// Get enabled friends links and sort by weight
export const getEnabledFriends = (): FriendLink[] => {
  return friendsConfig
    .filter((friend) => friend.enabled)
    .sort((a, b) => b.weight - a.weight); // Sort in descending order by weight
};
