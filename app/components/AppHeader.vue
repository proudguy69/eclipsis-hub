<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2.5 no-underline">
        <div class="flex h-7 w-7 items-center justify-center rounded border border-primary-900 bg-primary-950/40">
          <img src="/Large_Tank.webp" alt="">
          <!-- <UIcon name="lucide:droplets" class="text-primary-400 text-sm"/> -->
        </div>
        <span class="font-display text-[17px] font-bold uppercase tracking-widest text-[#e2f0ff]">
          Eclipsis<span class="text-primary-400">Hub</span>
        </span>
      </NuxtLink>
    </template>

    <UNavigationMenu :items="nav_items" />

    <template #body>
      <UNavigationMenu :items="nav_items" orientation="vertical" />
    </template>

    <template #right>
      <UContentSearchButton />
      <UContentSearch 
      v-model:search-term="search_term"
      :files="files"
      :navigation="navigation"
      :fuse="{resultLimit: 42}"
      />
    </template>
  </UHeader>

  <!-- nuxt content has its own search -->
  <!-- <UModal v-model:open="search_open" title="Search">
    <template #body>
      <UInput
        v-model="search_query"
        placeholder="Search structures, weapons, guides..."
        icon="lucide:search"
        autofocus
      />
      <p class="mt-4 text-sm text-[#2d4a6e]">Search coming soon.</p>
    </template>
  </UModal> -->
</template>

<script setup lang="ts">

// refs
const search_term = ref('')

// variables
const { data: navigation } = await useAsyncData('navigation', () => 
  Promise.all([
    queryCollectionNavigation('portafab'),
    queryCollectionNavigation('guides'),
    queryCollectionNavigation('mechanics'),
  ]).then(results => results.flat())
)

const { data: files } = await useAsyncData('search', () => 
  Promise.all([
    queryCollectionSearchSections('portafab'),
    queryCollectionSearchSections('guides'),
    queryCollectionSearchSections('mechanics'),
  ]).then(results => results.flat())
)

const nav_items = [
  { label: 'Portafab', icon: 'lucide:layers', to: '/portafab' },
  { label: 'Weapons', icon: 'lucide:crosshair', to: '/weapons' },
  { label: 'Mechanics', icon: 'lucide:compass', to: '/mechanics' },
  { label: 'Guides', icon: 'lucide:book-open', to: '/guides' },
  { label: 'Blog', icon: 'lucide:rss', to: '/blog' },
  { label: 'About', icon: 'lucide:info', to: '/about' },
]
</script>
