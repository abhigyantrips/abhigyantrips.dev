import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(reference('tags')).optional()
  })
})

const labs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(reference('tags')).optional()
  })
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    url: z.string(),
    tags: z.array(reference('tags')).optional()
  })
})

const tags = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    color: z.string(),
  })
})

export const collections = { blog, labs, projects, tags }
