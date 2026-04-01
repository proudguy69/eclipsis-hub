<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// variables
const base_url = 'https://smp.orangegreencat.com'
const site_name = 'Eclipsis Hub'
const site_description = 'An independent, community-maintained reference for Eclipsis covering every structure, weapon, mechanic and strategy.'

// provides
provide('base_url', base_url)
provide('site_name', site_name)
provide('site_description', site_description)

// methods
useSeoMeta({
  ogSiteName: site_name,
  twitterCard: 'summary_large_image',
})
</script>
