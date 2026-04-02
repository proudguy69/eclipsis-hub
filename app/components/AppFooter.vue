<template>
  <footer class="relative z-10 border-t border-[#0f1f3d] bg-[#060e1a]">
    <div class="mx-auto max-w-[1180px] px-6 pb-6 pt-12">
      <div class="mb-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <p class="font-display mb-3 text-[16px] font-bold uppercase tracking-widest text-[#e2f0ff]">
            Eclipsis<span class="text-primary-400">Hub</span>
          </p>
          <p class="text-[12px] leading-relaxed text-[#2d4a6e]">
            An independent community reference for the Roblox game Eclipsis.
            Not affiliated with F.F.T.L, Davidii, Defaultio or Fandom.
          </p>
        </div>

        <div>
          <p class="font-mono mb-3 text-[10px] uppercase tracking-[0.14em] text-[#2d4a6e]">Portafab</p>
          <ul class="flex flex-col gap-2">
            <li v-for="link in portafab_links" :key="link.to">
              <NuxtLink :to="link.to" class="text-[13px] text-[#6b8fb5] transition-colors hover:text-[#e2f0ff]">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <p class="font-mono mb-3 text-[10px] uppercase tracking-[0.14em] text-[#2d4a6e]">Content</p>
          <ul class="flex flex-col gap-2">
            <li v-for="link in content_links" :key="link.to">
              <NuxtLink :to="link.to" class="text-[13px] text-[#6b8fb5] transition-colors hover:text-[#e2f0ff]">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <p class="font-mono mb-3 text-[10px] uppercase tracking-[0.14em] text-[#2d4a6e]">Site</p>
          <ul class="flex flex-col gap-2">
            <li v-for="link in site_links" :key="link.to">
              <NuxtLink :to="link.to" class="text-[13px] text-[#6b8fb5] transition-colors hover:text-[#e2f0ff]">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>

      <div class="flex flex-wrap items-center justify-between gap-3 border-t border-[#0f1f3d] pt-5">
        <p class="font-mono text-[10px] tracking-wider text-[#2d4a6e]">
          © {{ new Date().getFullYear() }} Eclipsis Hub — Independent community resource, not affiliated with F.F.T.L or Fandom.
        </p>
        <p class="font-mono text-[10px] text-[#2d4a6e]">
          Eclipsis is a game by
          <a href="https://www.roblox.com/groups/676056" target="_blank" rel="noopener" class="transition-colors hover:text-primary-400">
            F.F.T.L / Davidii
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// variables
const portafab_links = [
  { label: 'Iridium', to: '/portafab/iridium' },
  { label: 'Structures', to: '/portafab/structures' },
  { label: 'Military', to: '/portafab/military' },
  { label: 'Technology', to: '/portafab/technology' },
]

const content_links = [
  { label: 'Weapons', to: '/weapons' },
  { label: 'Mechanics', to: '/mechanics' },
  { label: 'Guides', to: '/guides' },
  { label: 'Blog', to: '/blog' },
]

const site_links = [
  { label: 'About', to: '/about' },
  { label: 'Contributors', to: '/about#contributors' },
  { label: 'Disclaimer', to: '/about#disclaimer' },
]
</script>
