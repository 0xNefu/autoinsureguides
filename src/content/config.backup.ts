import { defineCollection, z } from "astro:content";

// Simple posts collection for now
const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().transform((str) => new Date(str)),  # Accept string and transform to Date
    author: z.string().default("AutoInsureGuides Team"),
    category: z.string().default("car-insurance-basics"),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Empty collections to prevent warnings
const guides = defineCollection({
  type: "content",
  schema: z.object({}),
});

const companies = defineCollection({
  type: "data",
  schema: z.object({}),
});

const states = defineCollection({
  type: "data",
  schema: z.object({}),
});

export const collections = { posts, guides, companies, states };
