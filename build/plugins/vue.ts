import Vue from '@vitejs/plugin-vue'

export const vuePlugin = Vue({
  include: [/\.vue$/, /\.md$/],
  reactivityTransform: true,
})
