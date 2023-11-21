import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    image: z.string().optional(),
    time: z.number(),
    draft: z.boolean()
  }),
});

export const collections = {
    'blog': blogCollection,
  };
