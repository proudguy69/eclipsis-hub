<template>
  <div class="mx-auto max-w-[1180px] px-6 py-16">

    <div class="mb-2 flex items-center gap-3">
      <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-primary-400">Community</span>
      <div class="h-px flex-1 bg-gradient-to-r from-[#152848] to-transparent" />
    </div>
    <h1 class="font-display mb-2 text-[32px] font-bold uppercase tracking-wider text-[#e2f0ff]">Guides</h1>
    <p class="mb-10 max-w-xl text-[14px] leading-relaxed text-[#6b8fb5]">
      Practical how-to guides written by community contributors. If you know a strategy or technique worth documenting, you can submit your own.
    </p>

    <ContentEmpty
      v-if="!guides?.length"
      title="No guides yet"
      message="Guides are written by community contributors. If you know the game and want to share your knowledge, submit a guide through GitHub."
    />

    <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="guide in guides"
        :key="guide.path"
        :to="guide.path"
        class="group block no-underline"
      >
        <UCard
          :ui="{
            root: 'border border-[#0f1f3d] bg-[#0d1c35] h-full transition-all duration-200 group-hover:border-[#152848] group-hover:-translate-y-0.5',
          }"
        >
          <div class="flex h-full flex-col gap-3">
            <div class="flex items-start justify-between gap-2">
              <p class="font-display text-[15px] font-bold uppercase tracking-wider text-[#e2f0ff]">{{ guide.title }}</p>
              <UBadge
                v-if="guide.difficulty"
                :label="guide.difficulty"
                color="secondary"
                variant="subtle"
                size="xs"
                class="shrink-0 capitalize"
              />
            </div>
            <p v-if="guide.description" class="flex-1 text-[12px] leading-relaxed text-[#6b8fb5]">{{ guide.description }}</p>
            <div v-if="guide.authors?.length" class="flex items-center gap-2 pt-1">
              <UAvatar
                v-for="author in guide.authors"
                :key="author.username"
                :src="author.avatar"
                :alt="author.name"
                size="xs"
              />
              <span class="text-[11px] text-[#2d4a6e]">
                {{ guide.authors.map((a: { name: string }) => a.name).join(', ') }}
              </span>
            </div>
          </div>
        </UCard>
      </NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
// injects
const base_url = inject<string>('base_url')
const site_name = inject<string>('site_name')

// refs
const { data: guides } = await useAsyncData(
  'guides-list',
  () => queryCollection('guides').order('date', 'DESC').all()
)

// methods
useSeoMeta({
  title: `Guides — ${site_name}`,
  ogTitle: `Guides — ${site_name}`,
  description: 'Community-written how-to guides for Eclipsis covering strategies, techniques and builds.',
  ogDescription: 'Community-written how-to guides for Eclipsis covering strategies, techniques and builds.',
  ogUrl: `${base_url}/guides`,
  ogImage: `${base_url}/images/og-default.png`,
})
</script>
