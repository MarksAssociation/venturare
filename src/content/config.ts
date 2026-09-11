import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1).max(120),
    description: z.string().min(30).max(200),
    date: z.date(),
    category: z.enum(['estrategia', 'tecnologia', 'transformacao', 'execucao']),
    type: z.literal('insight').default('insight'),
    author: z.string().default('Venturare'),
    featured: z.boolean().default(false),
    readingTime: z.number().min(1).max(60),
    tags: z.array(z.string()).min(1).max(10),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const experiences = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1).max(120),
    description: z.string().min(30).max(300),
    industry: z.string().min(1),
    challenge: z.string().min(10),
    solution: z.string().min(10),
    result: z.string().min(10),
    featured: z.boolean().default(false),
    confidential: z.boolean().default(false),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { insights, experiences };
