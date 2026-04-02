export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-studio'
  ],
  css: ['~/assets/css/main.css'],

  nitro: {
    compatibilityDate: '2026-04-02',
    preset: 'cloudflare_pages',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        name: 'eclipsis-hub',
        d1_databases: [
          {
            binding: 'eclipsis_hub',
            database_name: 'eclipsis-hub',
            database_id: 'd5a90be2-6ecd-45fd-936f-88082d131a96'
          },
          {
            binding: 'DB',
            database_name: 'eclipsis-studio',
            database_id: '0196e8b2-fc3f-40de-844f-f4c2203a45b3'
          }
        ]
      }
    },

  },

  studio: {
    repository: {
      provider: 'github',
      owner: 'proudguy69',
      repo: 'eclipsis-hub',
      branch: 'main'
    },
  },

  image: {
    provider: "cloudflare",
    cloudflare: {
      baseURL: "https://eh.orangegreencat.com/"
    },
  },

  content: {
    database: {
      type: 'd1',
      bindingName: 'eclipsis_hub'
    }
  },

  app: {
    head: {
      link: [{rel: 'icon', type: 'image/x-icon', 'href': '/favicon.ico  '}]
    }
  }
  
})