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
            binding: 'DB',
            database_name: 'eclipsis-hub',
            database_id: 'c26b0566-7c1a-4a5d-b73e-3cd60f88fd84'
          },
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
      bindingName: 'DB'
    }
  },

  app: {
    head: {
      link: [{rel: 'icon', type: 'image/x-icon', 'href': '/favicon.ico  '}]
    }
  }
  
})