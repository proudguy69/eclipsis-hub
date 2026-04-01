<template>
  <div class="mx-auto max-w-[1180px] px-6 py-16">

    <div class="mb-2 flex items-center gap-3">
      <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-primary-400">Arsenal</span>
      <div class="h-px flex-1 bg-gradient-to-r from-[#152848] to-transparent" />
    </div>
    <h1 class="font-display mb-2 text-[32px] font-bold uppercase tracking-wider text-[#e2f0ff]">Weapons</h1>
    <p class="mb-10 max-w-xl text-[14px] leading-relaxed text-[#6b8fb5]">
      All player-held weapons available in Eclipsis, organized by type.
    </p>

    <div class="flex flex-col gap-12">
      <div v-for="cat in weapon_categories" :key="cat.label">
        <p class="font-mono mb-4 text-[11px] uppercase tracking-widest text-[#2d4a6e]">{{ cat.label }}</p>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <ItemCard
            v-for="item in cat.items"
            :key="item.to"
            :to="item.to"
            :title="item.title"
            :fallback_icon="cat.icon"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
// injects
const base_url = inject<string>('base_url')
const site_name = inject<string>('site_name')

// variables
const weapon_categories = [
  {
    label: 'Guns',
    icon: 'lucide:crosshair',
    items: [
      { to: '/weapons/guns/smg', title: 'SMG' },
      { to: '/weapons/guns/assault-rifle', title: 'Assault Rifle' },
      { to: '/weapons/guns/minigun', title: 'Minigun' },
      { to: '/weapons/guns/shotgun', title: 'Shotgun' },
      { to: '/weapons/guns/sniper-rifle', title: 'Sniper Rifle' },
      { to: '/weapons/guns/napalm-deployer', title: 'Napalm Deployer' },
    ],
  },
  {
    label: 'Explosives',
    icon: 'lucide:bomb',
    items: [
      { to: '/weapons/explosives/satchel-charge', title: 'Satchel Charge' },
      { to: '/weapons/explosives/grenade-launcher', title: 'Grenade Launcher' },
      { to: '/weapons/explosives/rocket-launcher', title: 'Rocket Launcher' },
      { to: '/weapons/explosives/cruise-missile', title: 'Cruise Missile' },
    ],
  },
  {
    label: 'Tools',
    icon: 'lucide:wrench',
    items: [
      { to: '/weapons/tools/laser-drill', title: 'Laser Drill' },
      { to: '/weapons/tools/scanner', title: 'Scanner' },
      { to: '/weapons/tools/painter', title: 'Painter' },
    ],
  },
  {
    label: 'Tactical Strikes',
    icon: 'lucide:target',
    items: [
      { to: '/weapons/tactical-strikes/laser-strike', title: 'Laser Strike' },
      { to: '/weapons/tactical-strikes/orbital-shield', title: 'Orbital Shield' },
      { to: '/weapons/tactical-strikes/orbital-fabricator', title: 'Orbital Fabricator' },
      { to: '/weapons/tactical-strikes/industrial-laser-strike', title: 'Industrial Laser Strike' },
    ],
  },
  {
    label: 'H.L.R Small Arms',
    icon: 'lucide:zap',
    items: [
      { to: '/weapons/hlr/auto-flechette', title: 'Auto-flechette' },
      { to: '/weapons/hlr/hand-mortar', title: 'Hand Mortar' },
      { to: '/weapons/hlr/high-power-photon-lancer', title: 'High-Power Photon Lancer' },
      { to: '/weapons/hlr/ap-dmr', title: 'AP Designated Marksman Rifle' },
    ],
  },
]

// methods
useSeoMeta({
  title: `Weapons — ${site_name}`,
  ogTitle: `Weapons — ${site_name}`,
  description: 'All player-held weapons available in Eclipsis, organized by type.',
  ogDescription: 'All player-held weapons available in Eclipsis, organized by type.',
  ogUrl: `${base_url}/weapons`,
  ogImage: `${base_url}/images/og-default.png`,
})
</script>
