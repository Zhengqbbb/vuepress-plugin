<script setup lang="ts">
import { isClient } from '~/utils'

useHead({
  title: 'Q.Ben | Zhengqbbb',
  meta: [
    { name: 'description', content: 'Qbenben\'s personal website' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.png',
    },
  ],
})

// Scroll to top after route change
const route = useRoute()

watch(
  () => route.path,
  () => isClient && window.scrollTo({ top: 0 }),
)
</script>

<template>
  <RouterView />
</template>
