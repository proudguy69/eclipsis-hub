<template>
  <div class="mx-auto max-w-[1180px] px-6 py-16">

    <UBreadcrumb :items="[{ label: 'Blog', to: '/blog' }, { label: page?.title ?? slug }]" class="mb-8" />

    <ContentEmpty
      v-if="!page"
      title="Post not found"
      message="This blog post does not exist."
      :show_contribute="false"
    />

    <template v-else>
      <UBlogPost
        :title="page.title"
        :description="page.description ?? ''"
        :date="page.date"
        :badge="page.badge ? { label: page.badge, color: 'secondary', variant: 'subtle' } : undefined"
        :image="page.image ? { src: page.image, alt: page.title } : undefined"
        :authors="page.authors?.map((a: Author) => ({
          name: a.name,
          username: a.username,
          avatar: { src: a.avatar ?? '', alt: a.name },
        }))"
      >
        <div class="prose-eclipsis mt-10">
          <ContentRenderer :value="page" />
        </div>
      </UBlogPost>
    </template>

  </div>
</template>

<script setup lang="ts">
// interfaces
interface Author {
  name: string
  username: string
  avatar?: string
}

// variables
const route = useRoute()
const slug = route.params.slug as string

const base_url = inject<string>('base_url')
const site_name = inject<string>('site_name')

// refs
const { data: page } = await useAsyncData(
  `blog-${slug}`,
  () => queryCollection('blog').path(`/blog/${slug}`).first()
)

// methods
useSeoMeta({
  title: page.value ? `${page.value.title} — ${site_name}` : `Not Found — ${site_name}`,
  ogTitle: page.value?.seo_title ?? page.value?.title,
  description: page.value?.seo_description ?? page.value?.description,
  ogDescription: page.value?.seo_description ?? page.value?.description,
  ogUrl: `${base_url}/blog/${slug}`,
  ogImage: page.value?.seo_image ?? page.value?.image ?? `${base_url}/images/og-default.png`,
  twitterCard: 'summary_large_image',
})
</script>
