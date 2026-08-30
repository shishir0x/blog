import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { siteConfig } from "@/config/siteConfig";
import { profileConfig } from "@/config/profileConfig";
import { getSortedPosts } from "@/utils/content-utils";
import { getPostUrlBySlug } from "@/utils/url-utils";

export const GET: APIRoute = async (context) => {
	const posts = await getSortedPosts();

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: context.site ?? "https://shishir-pandey.com.np",
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: new Date(post.data.published),
			description: post.data.description,
			link: getPostUrlBySlug(post.slug),
			categories: post.data.tags,
			author: post.data.author || profileConfig.name,
		})),
		customData: `<language>${siteConfig.lang}</language>`,
	});
};
