export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image', 'nuxt-studio'],

  css: ['~/assets/css/main.css'],

  // nitro preset for cloudflare pages
  // nitro: {
  //   preset: 'cloudflare-pages',
  // },

  // @nuxt/image config
  image: {
    dir: 'public',
    quality: 85,
    format: ['webp', 'jpg'],
  },

  // nuxt ui theme overrides — component defaults live here
  ui: {
    theme: {
      colors: ['primary', 'secondary'],
    },
  },

  // generate routes for content
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
        },
      },
    },
  },
})