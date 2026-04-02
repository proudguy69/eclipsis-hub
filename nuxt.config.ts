export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxthub/core',
    'nuxt-studio',
  ],
  css: ['~/assets/css/main.css'],

  nitro: {
    compatibilityDate: '2024-11-01',
    preset: 'cloudflare-pages',
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
        ],
        pages_build_output_dir: './dist'
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
      bindingName: 'ECLIPSIS_DB'
    }
  }
  
})