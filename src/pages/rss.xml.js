import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { TITLE, DESCRIPTION } from "../sitesInfo";

export async function GET(context) {
  const posts = await getCollection("blog");
  
  // Filter and sort posts by date
  const filteredPosts = posts
    .filter((post) => post.data.title !== "Vinicius Ventura!")
    .filter((post) => post.data.draft !== true)
    .sort((a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime());
  
  return rss({
    title: TITLE,
    description: DESCRIPTION,
    site: context.site,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: `<language>en-us</language><atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />`,
    items: filteredPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.publishDate),
      link: `/${post.slug.split('/')[0]}/blog/${post.slug.split('/').slice(1).join('/')}/`,
      enclosure: post.data.image ? {
        length: 0,
        type: "image/jpeg",
        url: new URL(post.data.image, context.site).href,
      } : undefined,
    })),
  });
}
