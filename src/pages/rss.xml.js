import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { TITLE, DESCRIPTION } from '../sitesInfo';

export async function get(context) {
	const posts = await getCollection('blog');
	return rss({
		title: TITLE,
		description: DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
            pubDate:post.data.publishDate,
			enclosure: {
				length: 1,
				type: "img",
				url: post.data.image
			},
			link: `/blog/${post.slug}/`,
		})),
	});
}