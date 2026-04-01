<template>
  <div class="relative min-h-screen">
    <div class="bg-grid" />
    <DisclaimerBanner />
    <AppHeader />
    <main class="relative z-10">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
