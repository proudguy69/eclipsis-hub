<template>
  <div class="mx-auto max-w-[1180px] px-6 py-16">

    <div class="mb-2 flex items-center gap-3">
      <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-primary-400">Updates</span>
      <div class="h-px flex-1 bg-gradient-to-r from-[#152848] to-transparent" />
    </div>
    <h1 class="font-display mb-2 text-[32px] font-bold uppercase tracking-wider text-[#e2f0ff]">Blog</h1>
    <p class="mb-10 max-w-xl text-[14px] leading-relaxed text-[#6b8fb5]">
      Patch coverage, balance discussion and community posts about Eclipsis.
    </p>

    <ContentEmpty
      v-if="!posts?.length"
      title="No posts yet"
      message="Blog posts will appear here once they are published. Check back after the next game update."
      :show_contribute="false"
    />

    <UBlogPosts v-else>
      <UBlogPost
        v-for="post in posts"
        :key="post.path"
        :to="post.path"
        :title="post.title"
        :description="post.description ?? ''"
        :date="post.date"
        :badge="post.badge ? { label: post.badge, color: 'secondary', variant: 'subtle' } : undefined"
        :image="post.image ? { src: post.image, alt: post.title } : undefined"
        :authors="post.authors?.map((a: Author) => ({
          name: a.name,
          username: a.username,
          avatar: { src: a.avatar ?? '', alt: a.name },
        }))"
      />
    </UBlogPosts>

  </div>
</template>

<script setup lang="ts">
// interfaces
interface Author {
  name: string
  username: string
  avatar?: string
}

// injects
const base_url = inject<string>('base_url')
const site_name = inject<string>('site_name')

// refs
const { data: posts } = await useAsyncData(
  'blog-list',
  () => queryCollection('blog').order('date', 'DESC').all()
)

// methods
useSeoMeta({
  title: `Blog — ${site_name}`,
  ogTitle: `Blog — ${site_name}`,
  description: 'Patch coverage, balance discussion and community posts about Eclipsis.',
  ogDescription: 'Patch coverage, balance discussion and community posts about Eclipsis.',
  ogUrl: `${base_url}/blog`,
  ogImage: `${base_url}/images/og-default.png`,
})
</script>
