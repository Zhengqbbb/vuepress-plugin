import { defineClientConfig } from '@vuepress/client'
import { setupCopyCode } from './composables/index.js'

export default defineClientConfig({
  setup() {
    setupCopyCode()
  },
})
