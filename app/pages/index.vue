<template>
  <div>
    <!-- hero -->
    <section class="relative flex min-h-[80vh] items-center px-6 pb-16 pt-24">
      <div class="mx-auto w-full max-w-[1180px]">
        <div class="max-w-[600px]">

          <div class="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-900/40 bg-primary-950/30 px-3 py-1.5">
            <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-400" />
            <span class="font-mono text-[11px] uppercase tracking-widest text-primary-400">
              Community reference database
            </span>
          </div>

          <h1 class="font-display mb-5 text-[clamp(48px,7vw,80px)] font-bold uppercase leading-none tracking-wide text-[#e2f0ff]">
            Eclipsis
            <span class="block text-[0.55em] font-medium tracking-[0.22em] text-primary-400 opacity-70">
              Community Reference
            </span>
          </h1>

          <p class="mb-9 max-w-[460px] text-[15px] leading-relaxed text-[#6b8fb5]">
            An independent, community-maintained reference covering every structure, weapon, mechanic and strategy in Eclipsis. No ads, no outdated entries and no Fandom.
          </p>

          <div class="flex flex-wrap items-center gap-2.5">
            <UButton
              label="Browse Portafab"
              icon="lucide:layers"
              to="/portafab"
              color="primary"
              size="md"
            />
            <UButton
              label="Read Guides"
              icon="lucide:book-open"
              to="/guides"
              color="neutral"
              variant="outline"
              size="md"
            />
          </div>

        </div>
      </div>
    </section>

    <div class="mx-auto max-w-[1180px] px-6">
      <USeparator />
    </div>

    <!-- portfab -->
    <section class="mx-auto max-w-[1180px] px-6 py-16">
      <div class="mb-2 flex items-center gap-3">
        <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-primary-400">Portfab Reference</span>
        <div class="h-px flex-1 bg-gradient-to-r from-[#152848] to-transparent" />
      </div>
      <h2 class="font-display mb-2 text-[26px] font-bold uppercase tracking-wider text-[#e2f0ff]">Build Database</h2>
      <p class="mb-8 text-[14px] text-[#6b8fb5]">Every structure available in the Portfab, organized exactly as it appears in game.</p>

      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <ItemCard
          v-for="cat in portfab_categories"
          :key="cat.to"
          :to="cat.to"
          :title="cat.title"
          :description="cat.description"
          :tags="cat.tags"
          :fallback_icon="cat.icon"
        />
      </div>
    </section>

    <div class="mx-auto max-w-[1180px] px-6">
      <USeparator />
    </div>

    <!-- mechanics -->
    <section class="mx-auto max-w-[1180px] px-6 py-16">
      <div class="mb-2 flex items-center gap-3">
        <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-primary-400">Gameplay</span>
        <div class="h-px flex-1 bg-gradient-to-r from-[#152848] to-transparent" />
      </div>
      <h2 class="font-display mb-2 text-[26px] font-bold uppercase tracking-wider text-[#e2f0ff]">Mechanics and Strategies</h2>
      <p class="mb-8 text-[14px] text-[#6b8fb5]">How the game actually works, with links to contributor guides where applicable.</p>

      <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="(mech, i) in mechanics"
          :key="mech.to"
          :to="mech.to"
          class="group flex items-center gap-4 rounded-lg border border-[#0f1f3d] bg-[#0d1c35] p-4 no-underline transition-colors hover:border-[#152848] hover:bg-[#0a1628]"
        >
          <div
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded border text-[16px] transition-colors"
            :class="i % 2 === 0
              ? 'border-primary-900/40 bg-primary-950/30 text-primary-400'
              : 'border-secondary-900/40 bg-secondary-950/30 text-secondary-400'"
          >
            <UIcon :name="mech.icon" />
          </div>
          <div>
            <p class="font-display text-[14px] font-bold uppercase tracking-wider text-[#e2f0ff]">{{ mech.title }}</p>
            <p class="text-[11px] text-[#2d4a6e]">{{ mech.subtitle }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>

    <div class="mx-auto max-w-[1180px] px-6">
      <USeparator />
    </div>

    <!-- feature strip -->
    <section class="mx-auto max-w-[1180px] px-6 py-16">
      <div class="mb-2 flex items-center gap-3">
        <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-primary-400">What is this</span>
        <div class="h-px flex-1 bg-gradient-to-r from-[#152848] to-transparent" />
      </div>
      <h2 class="font-display mb-8 text-[26px] font-bold uppercase tracking-wider text-[#e2f0ff]">More Than a Wiki</h2>

      <div class="grid grid-cols-1 divide-x-0 divide-y divide-[#0f1f3d] overflow-hidden rounded-xl border border-[#0f1f3d] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div
          v-for="(feat, i) in features"
          :key="feat.title"
          class="flex gap-4 bg-[#0d1c35] p-6 transition-colors hover:bg-[#0a1628]"
        >
          <div
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded border text-[17px]"
            :class="i === 1
              ? 'border-secondary-900/40 bg-secondary-950/30 text-secondary-400'
              : 'border-primary-900/40 bg-primary-950/30 text-primary-400'"
          >
            <UIcon :name="feat.icon" />
          </div>
          <div>
            <p class="font-display mb-1 text-[14px] font-bold uppercase tracking-wider text-[#e2f0ff]">{{ feat.title }}</p>
            <p class="text-[12px] leading-relaxed text-[#6b8fb5]">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-[1180px] px-6">
      <USeparator />
    </div>

    <!-- cta -->
    <section class="mx-auto max-w-[1180px] px-6 py-16">
      <div class="relative overflow-hidden rounded-xl border border-[#152848] bg-[#0d1c35] px-10 py-10">
        <div class="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-primary-500 to-secondary-500" />
        <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p class="font-display mb-2 text-[22px] font-bold uppercase tracking-wider text-[#e2f0ff]">
              Know Something We Don't?
            </p>
            <p class="max-w-[440px] text-[13px] leading-relaxed text-[#6b8fb5]">
              If you play the game and notice something is wrong or missing you can submit changes directly through GitHub. No complicated process and no account required beyond a GitHub login.
            </p>
          </div>
          <div class="flex shrink-0 gap-2.5">
            <UButton
              label="Contribute"
              icon="lucide:git-branch"
              color="primary"
              size="md"
              to="https://github.com"
              target="_blank"
              rel="noopener"
            />
            <UButton
              label="About this site"
              color="neutral"
              variant="outline"
              size="md"
              to="/about"
            />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// injects
const site_name = inject<string>('site_name')
const base_url = inject<string>('base_url')
const site_description = inject<string>('site_description')

// variables
const portfab_categories = [
  {
    to: '/portfab/iridium',
    title: 'Iridium',
    description: 'Extraction, transport, storage and processing infrastructure for your Iridium supply.',
    tags: ['Pipes', 'Extractors', 'Tanks', 'Special'],
    icon: 'lucide:droplets',
  },
  {
    to: '/portfab/structures',
    title: 'Structures',
    description: 'Blocks, wedges, walls and defensive structures for building your base.',
    tags: ['Basic', 'Defense', 'Seats'],
    icon: 'lucide:box',
  },
  {
    to: '/portfab/military',
    title: 'Military',
    description: 'Turrets, production facilities and combat structures for offensive and defensive play.',
    tags: ['Production', 'Weapons', 'SSIMs', 'Garage'],
    icon: 'lucide:shield',
  },
  {
    to: '/portfab/technology',
    title: 'Technology',
    description: 'Advanced structures including spawn points, fabricators and special support systems.',
    tags: ['Structure Tech', 'Misc', 'Spawn Points'],
    icon: 'lucide:cpu',
  },
]

const mechanics = [
  { to: '/mechanics/sky-basing', title: 'Sky Basing', subtitle: 'Wireless and manual variants', icon: 'lucide:arrow-up' },
  { to: '/mechanics/sprawling', title: 'Sprawling', subtitle: 'Aggressive territorial expansion', icon: 'lucide:expand' },
  { to: '/mechanics/rushing', title: 'Rushing', subtitle: 'Early game offensive pressure', icon: 'lucide:zap' },
  { to: '/mechanics/turtling', title: 'Turtling', subtitle: 'Defensive fortification play', icon: 'lucide:shield' },
  { to: '/mechanics/sea-basing', title: 'Sea Basing', subtitle: 'Ocean and submerged placements', icon: 'lucide:waves' },
  { to: '/mechanics/edge-basing', title: 'Edge Basing', subtitle: 'Map perimeter positioning', icon: 'lucide:map-pin' },
]

const features = [
  {
    icon: 'lucide:refresh-cw',
    title: 'Actually Up to Date',
    desc: 'Community maintained and updated to reflect the current state of the game rather than a snapshot from years ago.',
  },
  {
    icon: 'lucide:scale',
    title: 'Balance Discussion',
    desc: 'Community polls and balance thoughts covering what is strong, what is weak and what probably should change.',
  },
  {
    icon: 'lucide:git-branch',
    title: 'Open to Contributors',
    desc: 'Content is Git based so anyone with knowledge of the game can submit improvements directly through GitHub.',
  },
]

// methods
useSeoMeta({
  title: site_name,
  description: site_description,
  ogTitle: site_name,
  ogDescription: site_description,
  ogUrl: base_url,
  ogImage: `${base_url}/images/og-default.png`,
})
</script>
