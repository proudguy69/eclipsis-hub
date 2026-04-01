<template>
  <div class="flex flex-col items-center justify-center py-24 text-center">
    <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[#152848] bg-[#0a1628]">
      <UIcon :name="icon" class="text-[#2d4a6e] text-2xl" />
    </div>
    <p class="font-display mb-2 text-[18px] font-bold uppercase tracking-wider text-[#e2f0ff]">
      {{ title }}
    </p>
    <p class="mb-6 max-w-sm text-[13px] leading-relaxed text-[#6b8fb5]">
      {{ message }}
    </p>
    <UButton
      v-if="show_contribute"
      label="Contribute on GitHub"
      icon="lucide:git-branch"
      color="neutral"
      variant="outline"
      size="sm"
      to="https://github.com"
      target="_blank"
      rel="noopener"
    />
  </div>
</template>

<script setup lang="ts">
// interfaces
interface Props {
  title?: string
  message?: string
  icon?: string
  show_contribute?: boolean
}

// variables
withDefaults(defineProps<Props>(), {
  title: 'Nothing here yet',
  message: 'This section does not have any content yet. If you know the game, you can help by contributing.',
  icon: 'lucide:file-question',
  show_contribute: true,
})
</script>
