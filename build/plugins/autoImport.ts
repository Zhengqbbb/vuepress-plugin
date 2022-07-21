import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'pathe'

// https://github.com/antfu/unplugin-auto-import
export const autoImportPlugin = AutoImport({
  imports: [
    'vue',
    'vue-router',
    'vue/macros',
    '@vueuse/head',
    '@vueuse/core',
  ],
  vueTemplate: true,
  dirs: [
    resolve(__dirname, '../../src/composables'),
  ],
  dts: resolve(__dirname, '../../src/auto-imports.d.ts'),
})
