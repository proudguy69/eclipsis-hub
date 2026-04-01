export default defineNuxtConfig({
  compatibilityDate: '2026-04-01',

  future: {
    compatibilityVersion: 4,
  },


  modules: ["nitro-cloudflare-dev", '@nuxt/ui', '@nuxt/content', '@nuxt/image', 'nuxt-studio'],

  studio: {
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'proudguy69',
      repo: 'proudguy69/eclipsis-hib',
      branch: 'main'
    }
  },


  css: ['~/assets/css/main.css'],

  // nitro preset for cloudflare pages
  nitro: {
    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },

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