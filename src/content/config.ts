import { z, reference, defineCollection } from 'astro:content';

const articleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    createdAt: z.string().transform((str) => new Date(str)),
    updatedAt: z.string().transform((str) => new Date(str)),
    sortOrder: z.number(),
    chapter: reference('chapters'),
    seoTitle: z.string(),
    seoKeywords: z.array(z.string()),
    seoDescription: z.string(),
  }),
});

const chapterCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    introduction: z.string(),
    sortOrder: z.number(),
    project: reference('projects'),
    articles: z.array(reference('articles')),
  }),
});

const projectCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    createdAt: z.string().transform((str) => new Date(str)),
    bannerImage: z.string().optional(),
    draft: z.boolean(),
    chapters: z.array(reference('chapters')),
    seoTitle: z.string(),
    seoKeywords: z.array(z.string()),
    seoDescription: z.string(),
  }),
});

export const collections = {
  projects: projectCollection,
  chapters: chapterCollection,
  articles: articleCollection,
};
