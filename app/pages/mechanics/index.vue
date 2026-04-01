<template>
  <div class="mx-auto max-w-[1180px] px-6 py-16">

    <div class="mb-2 flex items-center gap-3">
      <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-primary-400">Gameplay</span>
      <div class="h-px flex-1 bg-gradient-to-r from-[#152848] to-transparent" />
    </div>
    <h1 class="font-display mb-2 text-[32px] font-bold uppercase tracking-wider text-[#e2f0ff]">Mechanics and Strategies</h1>
    <p class="mb-10 max-w-xl text-[14px] leading-relaxed text-[#6b8fb5]">
      How the game actually works, from base placement to combat strategy. Pages link to contributor guides where they exist.
    </p>

    <ContentEmpty
      v-if="!mechanics?.length"
      title="No mechanics documented yet"
      message="Mechanics pages are on the way. If you know the game well, you can help by contributing through GitHub."
    />

    <div v-else class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="(mech, i) in mechanics"
        :key="mech.path"
        :to="mech.path"
        class="group flex items-center gap-4 rounded-lg border border-[#0f1f3d] bg-[#0d1c35] p-4 no-underline transition-colors hover:border-[#152848] hover:bg-[#0a1628]"
      >
        <div
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded border text-[16px]"
          :class="i % 2 === 0
            ? 'border-primary-900/40 bg-primary-950/30 text-primary-400'
            : 'border-secondary-900/40 bg-secondary-950/30 text-secondary-400'"
        >
          <UIcon name="lucide:compass" />
        </div>
        <div>
          <p class="font-display text-[14px] font-bold uppercase tracking-wider text-[#e2f0ff]">{{ mech.title }}</p>
          <p v-if="mech.description" class="text-[11px] text-[#2d4a6e]">{{ mech.description }}</p>
        </div>
      </NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
// injects
const base_url = inject<string>('base_url')
const site_name = inject<string>('site_name')

// refs
const { data: mechanics } = await useAsyncData(
  'mechanics-list',
  () => queryCollection('mechanics').all()
)

// methods
useSeoMeta({
  title: `Mechanics — ${site_name}`,
  ogTitle: `Mechanics — ${site_name}`,
  description: 'Gameplay mechanics and strategies for Eclipsis including sky basing, sprawling, rushing and more.',
  ogDescription: 'Gameplay mechanics and strategies for Eclipsis including sky basing, sprawling, rushing and more.',
  ogUrl: `${base_url}/mechanics`,
  ogImage: `${base_url}/images/og-default.png`,
})
</script>
