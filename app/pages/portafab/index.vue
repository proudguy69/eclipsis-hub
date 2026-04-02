<template>
  <div class="mx-auto max-w-295 px-6 py-16">

    <div class="mb-2 flex items-center gap-3">
      <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-primary-400">Database</span>
      <div class="h-px flex-1 bg-linear-to-r from-[#152848] to-transparent" />
    </div>
    <h1 class="font-display mb-2 text-[32px] font-bold uppercase tracking-wider text-[#e2f0ff]">Portafab</h1>
    <p class="mb-10 max-w-xl text-[14px] leading-relaxed text-[#6b8fb5]">
      Every structure buildable from the Portafab, organized by category exactly as the game presents them.
    </p>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <ItemCard
        v-for="cat in categories"
        :key="cat.to"
        :to="cat.to"
        :title="cat.title"
        :description="cat.description"
        :tags="cat.tags"
        :fallback_icon="cat.icon"
        :image="cat.image"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
// injects
const base_url = inject<string>('base_url')
const site_name = inject<string>('site_name')


// i think im gonna have this be set by your mom!
// variables
const categories = [
  {
    to: '/portafab/iridium',
    title: 'Iridium',
    description: 'Extraction, transport, storage and processing infrastructure.',
    tags: ['Pipes', 'Extractors', 'Tanks', 'Special'],
    icon: 'lucide:droplets',
    image: 'https://eh.orangegreencat.com//IridiumIcon.webp'
  },
  {
    to: '/portafab/structures',
    title: 'Structures',
    description: 'Blocks, wedges, walls and defensive structures.',
    tags: ['Basic', 'Defense', 'Seats'],
    icon: 'lucide:box',
    image: 'https://eh.orangegreencat.com//StructuresIcon.webp'
  },
  {
    to: '/portafab/military',
    title: 'Military',
    description: 'Turrets, production facilities and combat structures.',
    tags: ['Production', 'Weapons', 'SSIMs', 'Garage'],
    icon: 'lucide:shield',
    image: 'https://eh.orangegreencat.com//MilitaryIcon.webp'
  },
  {
    to: '/portafab/technology',
    title: 'Technology',
    description: 'Advanced structures, spawn points and more',
    tags: ['Structure Tech', 'Misc', 'Spawn Points'],
    icon: 'lucide:cpu',
    image: 'https://eh.orangegreencat.com//TechnologyIcon.webp'
  },
]

// methods
useSeoMeta({
  title: `Portafab — ${site_name}`,
  ogTitle: `Portafab — ${site_name}`,
  description: 'Every structure buildable from the Portafab in Eclipsis, organized by category.',
  ogDescription: 'Every structure buildable from the Portafab in Eclipsis, organized by category.',
  ogUrl: `${base_url}/portafab`,
  ogImage: `${base_url}/images/og-default.png`,
})
</script>
