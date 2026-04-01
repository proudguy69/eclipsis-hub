<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2.5 no-underline">
        <div class="flex h-7 w-7 items-center justify-center rounded border border-primary-900 bg-primary-950/40">
          <UIcon name="lucide:droplets" class="text-primary-400 text-sm" />
        </div>
        <span class="font-display text-[17px] font-bold uppercase tracking-widest text-[#e2f0ff]">
          Eclipsis<span class="text-primary-400">Hub</span>
        </span>
      </NuxtLink>
    </template>

    <UNavigationMenu :items="nav_items" />

    <template #right>
      <UButton
        icon="lucide:search"
        color="neutral"
        variant="ghost"
        size="sm"
        aria-label="Search"
        @click="search_open = true"
      />
    </template>
  </UHeader>

  <!-- search modal placeholder — wire up UModal + queryCollection when ready -->
  <UModal v-model:open="search_open" title="Search">
    <template #body>
      <UInput
        v-model="search_query"
        placeholder="Search structures, weapons, guides..."
        icon="lucide:search"
        autofocus
      />
      <p class="mt-4 text-sm text-[#2d4a6e]">Search coming soon.</p>
    </template>
  </UModal>
</template>

<script setup lang="ts">
// refs
const search_open = ref(false)
const search_query = ref('')

// variables
const nav_items = [
  { label: 'Portfab', icon: 'lucide:layers', to: '/portfab' },
  { label: 'Weapons', icon: 'lucide:crosshair', to: '/weapons' },
  { label: 'Mechanics', icon: 'lucide:compass', to: '/mechanics' },
  { label: 'Guides', icon: 'lucide:book-open', to: '/guides' },
  { label: 'Blog', icon: 'lucide:rss', to: '/blog' },
  { label: 'About', icon: 'lucide:info', to: '/about' },
]
</script>
