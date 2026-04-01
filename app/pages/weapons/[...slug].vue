<template>
  <div class="mx-auto max-w-[1180px] px-6 py-16">

    <UBreadcrumb :items="breadcrumb_items" class="mb-8" />

    <ContentEmpty
      v-if="!page"
      title="Page not found"
      message="This weapon page does not exist yet. If you know this weapon, you can help by contributing through GitHub."
    />

    <template v-else>
      <div class="flex flex-col gap-10 lg:flex-row">

        <div class="min-w-0 flex-1">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-primary-400">{{ page.category ?? 'Weapon' }}</span>
            <div class="h-px flex-1 bg-gradient-to-r from-[#152848] to-transparent" />
          </div>
          <h1 class="font-display mb-6 text-[32px] font-bold uppercase tracking-wider text-[#e2f0ff]">{{ page.title }}</h1>

          <NuxtImg
            v-if="page.image"
            :src="page.image"
            :alt="page.title"
            width="800"
            height="450"
            fit="cover"
            class="mb-8 w-full rounded-xl border border-[#0f1f3d] object-cover"
            loading="lazy"
          />

          <div class="prose-eclipsis">
            <ContentRenderer :value="page" />
          </div>
        </div>

        <aside class="w-full shrink-0 lg:w-64">
          <div class="rounded-xl border border-[#0f1f3d] bg-[#0a1628] p-5">
            <p class="font-mono mb-4 text-[10px] uppercase tracking-widest text-[#2d4a6e]">Details</p>
            <div v-if="page.tags?.length" class="mb-4 flex flex-wrap gap-1.5">
              <UBadge
                v-for="tag in page.tags"
                :key="tag"
                :label="tag"
                color="neutral"
                variant="subtle"
                size="xs"
              />
            </div>
            <UButton
              label="Edit on GitHub"
              icon="lucide:pencil"
              color="neutral"
              variant="outline"
              size="xs"
              :to="`https://github.com/edit/main/content${page.path}.md`"
              target="_blank"
              rel="noopener"
              class="w-full justify-center"
            />
          </div>
        </aside>

      </div>
    </template>

  </div>
</template>

<script setup lang="ts">
// variables
const route = useRoute()
const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug])
const content_path = computed(() => `/weapons/${slug.value.join('/')}`)

const base_url = inject<string>('base_url')
const site_name = inject<string>('site_name')

// refs
const { data: page } = await useAsyncData(
  `weapons-${content_path.value}`,
  () => queryCollection('weapons').path(content_path.value).first()
)

// computed
const breadcrumb_items = computed(() => {
  const items = [{ label: 'Weapons', to: '/weapons' }]
  let path = '/weapons'
  slug.value.forEach((part, i) => {
    path += `/${part}`
    items.push({
      label: part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
      to: i < slug.value.length - 1 ? path : undefined,
    })
  })
  return items
})

// methods
useSeoMeta({
  title: page.value ? `${page.value.title} — ${site_name}` : `Not Found — ${site_name}`,
  ogTitle: page.value?.seo_title ?? page.value?.title,
  description: page.value?.seo_description ?? page.value?.description,
  ogDescription: page.value?.seo_description ?? page.value?.description,
  ogUrl: `${base_url}${content_path.value}`,
  ogImage: page.value?.seo_image ?? page.value?.image ?? `${base_url}/images/og-default.png`,
})
</script>
