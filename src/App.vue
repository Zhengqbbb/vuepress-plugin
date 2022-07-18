<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Q.Ben | Qbenben\'s personal website',
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
</script>

<template>
  <RouterView />
</template>
