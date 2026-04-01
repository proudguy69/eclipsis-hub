export default defineNuxtConfig({
  compatibilityDate: '2026-04-01',

  future: {
    compatibilityVersion: 4,
  },

  // Removed "nitro-cloudflare-dev" to prevent hook duplication
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image', 'nuxt-studio'],

  studio: {
    repository: {
      provider: 'github',
      owner: 'proudguy69',
      repo: 'proudguy69/eclipsis-hib',
      branch: 'main'
    }
  },

  nitro: {
    preset: "cloudflare_pages",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true // This handles the node:fs/path shims automatically
    },
    // Enable WASM if Content or Image needs it for Cloudflare
    experimental: {
      wasm: true 
    }
  },

  vite: {
    build: {
      rollupOptions: {
        // Reduced slightly; 20 can sometimes fight for memory with the 
        // Vite worker-import-meta-url transform seen in your logs
        maxParallelFileOps: 10 
      }
    }
  },

  image: {
    provider: "cloudflare",
    cloudflare: {
      baseURL: 'https://eclipsis-hub.oliver-leander-quinn.workers.dev/' // Replace with your actual URL
    }
  },

  content: {
    database: {
      type: "d1",
      bindingName: 'DB'
    },
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
        },
      },
    }
  },

  // Keep these for performance
  telemetry: false,
  devtools: { enabled: false }
})