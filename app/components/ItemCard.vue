<template>
  <NuxtLink :to="to" class="group block no-underline">
    <UCard
      :ui="{
        root: 'border border-[#0f1f3d] bg-[#0d1c35] transition-all duration-200 group-hover:border-[#152848] group-hover:-translate-y-0.5 group-hover:shadow-xl overflow-hidden',
        body: 'p-0',
      }"
    >
      <!-- image -->
      <div class="w-full flex justify-center">
        <div class="w-[200px] h-[200px] overflow-hidden border-b border-[#0f1f3d] bg-[#0a1628] flex items-center justify-center">
          <img
            v-if="image"
            :src="image"
            :alt="title"
            fit="cover"
            class="h-full w-full object-cover"
            loading="lazy"
          />
          <div v-else class="flex h-full w-full flex-col items-center justify-center gap-1.5">
            <UIcon :name="fallback_icon" class="text-[#2d4a6e] text-2xl" />
            <span class="font-mono text-[9px] uppercase tracking-widest text-[#2d4a6e]">
              {{ title.toLowerCase() }}
            </span>
          </div>
        </div>
      </div>
      

      <!-- body -->
      <div class="flex flex-col h-full p-5">
        <p class="font-display mb-1.5 text-[15px] font-bold uppercase tracking-wider text-[#e2f0ff]">
          {{ title }}
        </p>
        <p v-if="description" class="flex-1 mb-4 text-[12px] leading-relaxed text-[#6b8fb5]">
          {{ description }}
        </p>
        <div v-if="tags?.length" class="flex flex-wrap gap-1.5">
          <UBadge
            v-for="tag in tags"
            :key="tag"
            :label="tag"
            color="neutral"
            variant="subtle"
            size="xs"
          />
        </div>
      </div>
    </UCard>
  </NuxtLink>
</template>

<script setup lang="ts">
// interfaces
interface Props {
  to: string
  title: string
  description?: string
  image?: string
  tags?: string[]
  fallback_icon?: string
}

// variables
const props = withDefaults(defineProps<Props>(), {
  fallback_icon: 'lucide:image',
})

console.log(props.image)

</script>
