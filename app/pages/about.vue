<template>
  <div class="mx-auto max-w-[860px] px-6 py-16">

    <div class="mb-2 flex items-center gap-3">
      <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-primary-400">Site</span>
      <div class="h-px flex-1 bg-gradient-to-r from-[#152848] to-transparent" />
    </div>
    <h1 class="font-display mb-10 text-[32px] font-bold uppercase tracking-wider text-[#e2f0ff]">About Eclipsis Hub</h1>

    <!-- disclaimer -->
    <div id="disclaimer" class="mb-10 rounded-xl border border-secondary-900/40 bg-secondary-950/20 p-6">
      <div class="mb-3 flex items-center gap-2">
        <UIcon name="lucide:alert-triangle" class="text-secondary-400 text-base" />
        <p class="font-display text-[14px] font-bold uppercase tracking-wider text-secondary-400">Disclaimer</p>
      </div>
      <p class="text-[13px] leading-relaxed text-[#6b8fb5]">
        Eclipsis Hub is an independent, community-maintained resource and is not affiliated with, endorsed by or
        associated with F.F.T.L, Davidii, Defaultio, BusyCityGuy, photosoup, xethlyx or Fandom in any way.
        All game assets, names and content referenced on this site belong to their respective owners.
        This site exists solely to provide accurate, up-to-date information for the Eclipsis player community.
      </p>
    </div>

    <!-- what is this -->
    <div class="mb-10">
      <h2 class="font-display mb-4 text-[20px] font-bold uppercase tracking-wider text-[#e2f0ff]">What is Eclipsis Hub?</h2>
      <p class="mb-4 text-[14px] leading-relaxed text-[#6b8fb5]">
        Eclipsis Hub is a community-run reference site for the Roblox game Eclipsis, built because the existing
        Fandom wiki is largely outdated and difficult to maintain. The goal is simple — accurate, readable information
        with no ads, no clutter and no barriers.
      </p>
      <p class="text-[14px] leading-relaxed text-[#6b8fb5]">
        All content is stored as Markdown files in a public GitHub repository. Anyone who plays the game can
        contribute improvements, corrections or entirely new pages through a standard pull request.
      </p>
    </div>

    <USeparator class="mb-10" />

    <!-- contributing -->
    <div class="mb-10">
      <h2 class="font-display mb-4 text-[20px] font-bold uppercase tracking-wider text-[#e2f0ff]">Contributing</h2>
      <p class="mb-6 text-[14px] leading-relaxed text-[#6b8fb5]">
        Content is Git-based which means contributing is as straightforward as editing a Markdown file and opening a
        pull request. You do not need to know Vue or Nuxt, just the game.
      </p>
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div
          v-for="step in contribute_steps"
          :key="step.title"
          class="rounded-lg border border-[#0f1f3d] bg-[#0d1c35] p-4"
        >
          <div class="mb-2 flex h-8 w-8 items-center justify-center rounded border border-primary-900/40 bg-primary-950/30">
            <UIcon :name="step.icon" class="text-primary-400 text-sm" />
          </div>
          <p class="font-display mb-1 text-[13px] font-bold uppercase tracking-wider text-[#e2f0ff]">{{ step.title }}</p>
          <p class="text-[12px] leading-relaxed text-[#6b8fb5]">{{ step.desc }}</p>
        </div>
      </div>
      <div class="mt-6">
        <UButton
          label="View on GitHub"
          icon="lucide:git-branch"
          color="primary"
          variant="outline"
          to="https://github.com"
          target="_blank"
          rel="noopener"
        />
      </div>
    </div>

    <USeparator class="mb-10" />

    <!-- contributors -->
    <div id="contributors">
      <h2 class="font-display mb-4 text-[20px] font-bold uppercase tracking-wider text-[#e2f0ff]">Contributors</h2>
      <p class="text-[14px] leading-relaxed text-[#6b8fb5]">
        Contributors will be listed here once the site has content. If you submit a guide or page, add yourself to
        the contributors list in the GitHub repository.
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
// injects
const base_url = inject<string>('base_url')
const site_name = inject<string>('site_name')

// variables
const contribute_steps = [
  {
    icon: 'lucide:git-fork',
    title: 'Fork the repo',
    desc: 'Fork the GitHub repository to your own account.',
  },
  {
    icon: 'lucide:file-edit',
    title: 'Edit or add',
    desc: 'Edit an existing Markdown file or create a new one in the content directory.',
  },
  {
    icon: 'lucide:git-pull-request',
    title: 'Open a PR',
    desc: 'Open a pull request and it will be reviewed before going live.',
  },
]

// methods
useSeoMeta({
  title: `About — ${site_name}`,
  ogTitle: `About — ${site_name}`,
  description: 'About Eclipsis Hub — an independent community reference for the Roblox game Eclipsis.',
  ogDescription: 'About Eclipsis Hub — an independent community reference for the Roblox game Eclipsis.',
  ogUrl: `${base_url}/about`,
  ogImage: `${base_url}/images/og-default.png`,
})
</script>
