import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// shared author schema used in blog posts
const author_schema = z.object({
  name: z.string(),
  username: z.string(),
  avatar: z.string().url().optional(),
})

export default defineContentConfig({
  collections: {

    portafab: defineCollection({
      type: 'page',
      source: 'portafab/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        order: z.number().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
        author: author_schema.optional(),
        seo_title: z.string().optional(),
        seo_description: z.string().optional(),
        seo_image: z.string().optional(),
      }),
    }),

    weapons: defineCollection({
      type: 'page',
      source: 'weapons/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        image: z.string().optional(),
        category: z.string().optional(),
        tags: z.array(z.string()).optional(),
        seo_title: z.string().optional(),
        seo_description: z.string().optional(),
        seo_image: z.string().optional(),
      }),
    }),

    mechanics: defineCollection({
      type: 'page',
      source: 'mechanics/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        image: z.string().optional(),
        related_guides: z.array(z.string()).optional(),
        seo_title: z.string().optional(),
        seo_description: z.string().optional(),
        seo_image: z.string().optional(),
      }),
    }),

    guides: defineCollection({
      type: 'page',
      source: 'guides/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        image: z.string().optional(),
        difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
        related_mechanic: z.string().optional(),
        authors: z.array(author_schema).optional(),
        date: z.string().optional(),
        seo_title: z.string().optional(),
        seo_description: z.string().optional(),
        seo_image: z.string().optional(),
      }),
    }),

    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string(),
        badge: z.string().optional(),
        image: z.string().optional(),
        authors: z.array(author_schema).optional(),
        seo_title: z.string().optional(),
        seo_description: z.string().optional(),
        seo_image: z.string().optional(),
      }),
    }),

  },
})
