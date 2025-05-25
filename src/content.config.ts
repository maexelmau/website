import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const blog = defineCollection({
  loader: glob({
    pattern: "./src/content/blog/**/*.md",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      author: z.string().default("Anonymous"),
      image: image(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { blog };
