<template>
  <div class="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
    <p class="font-mono mb-4 text-[11px] uppercase tracking-[0.2em] text-primary-400">404</p>
    <h1 class="font-display mb-4 text-[40px] font-bold uppercase tracking-wider text-[#e2f0ff]">Page Not Found</h1>
    <p class="mb-8 max-w-sm text-[14px] leading-relaxed text-[#6b8fb5]">
      This page does not exist. If you think it should, you can contribute it through GitHub.
    </p>
    <div class="flex gap-3">
      <UButton
        label="Go Home"
        icon="lucide:home"
        color="primary"
        to="/"
      />
      <UButton
        label="Contribute"
        icon="lucide:git-branch"
        color="neutral"
        variant="outline"
        to="https://github.com"
        target="_blank"
        rel="noopener"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// variables
const site_name = inject<string>('site_name')

// methods
useSeoMeta({
  title: `404 Not Found — ${site_name}`,
})
</script>
