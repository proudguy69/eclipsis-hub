<template>
  <div class="mx-auto max-w-[1180px] px-6 py-16">

    <UBreadcrumb :items="[{ label: 'Guides', to: '/guides' }, { label: page?.title ?? slug }]" class="mb-8" />

    <ContentEmpty
      v-if="!page"
      title="Guide not found"
      message="This guide does not exist yet. If you know this technique, you can help by contributing through GitHub."
    />

    <template v-else>
      <div class="flex flex-col gap-10 lg:flex-row">

        <div class="min-w-0 flex-1">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-primary-400">Guide</span>
            <UBadge
              v-if="page.difficulty"
              :label="page.difficulty"
              color="secondary"
              variant="subtle"
              size="xs"
              class="capitalize"
            />
            <div class="h-px flex-1 bg-gradient-to-r from-[#152848] to-transparent" />
          </div>
          <h1 class="font-display mb-4 text-[32px] font-bold uppercase tracking-wider text-[#e2f0ff]">{{ page.title }}</h1>

          <!-- authors -->
          <div v-if="page.authors?.length" class="mb-8 flex flex-wrap items-center gap-4">
            <div
              v-for="author in page.authors"
              :key="author.username"
              class="flex items-center gap-2"
            >
              <UAvatar :src="author.avatar" :alt="author.name" size="sm" />
              <div>
                <p class="text-[13px] text-[#e2f0ff]">{{ author.name }}</p>
                <p class="font-mono text-[10px] text-[#2d4a6e]">@{{ author.username }}</p>
              </div>
            </div>
            <div v-if="page.date" class="ml-auto">
              <p class="font-mono text-[11px] text-[#2d4a6e]">{{ page.date }}</p>
            </div>
          </div>

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

            <div v-if="page.related_mechanic" class="mb-4">
              <p class="font-mono mb-2 text-[10px] uppercase tracking-widest text-[#2d4a6e]">Related Mechanic</p>
              <NuxtLink
                :to="`/mechanics/${page.related_mechanic}`"
                class="flex items-center gap-2 text-[13px] text-primary-400 no-underline hover:text-primary-300"
              >
                <UIcon name="lucide:compass" class="text-xs" />
                {{ page.related_mechanic.replace(/-/g, ' ') }}
              </NuxtLink>
            </div>

            <UButton
              label="Edit on GitHub"
              icon="lucide:pencil"
              color="neutral"
              variant="outline"
              size="xs"
              :to="`https://github.com/edit/main/content/guides/${slug}.md`"
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
const slug = route.params.slug as string

const base_url = inject<string>('base_url')
const site_name = inject<string>('site_name')

// refs
const { data: page } = await useAsyncData(
  `guide-${slug}`,
  () => queryCollection('guides').path(`/guides/${slug}`).first()
)

// methods
useSeoMeta({
  title: page.value ? `${page.value.title} — ${site_name}` : `Not Found — ${site_name}`,
  ogTitle: page.value?.seo_title ?? page.value?.title,
  description: page.value?.seo_description ?? page.value?.description,
  ogDescription: page.value?.seo_description ?? page.value?.description,
  ogUrl: `${base_url}/guides/${slug}`,
  ogImage: page.value?.seo_image ?? page.value?.image ?? `${base_url}/images/og-default.png`,
})
</script>
