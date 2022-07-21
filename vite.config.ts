import { resolve } from 'pathe'
import { defineConfig } from 'vite'
import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'vite-plugin-vue-layouts'
import Markdown from 'vite-plugin-vue-markdown'
import Inspect from 'vite-plugin-inspect'
import {
  autoImportPlugin,
  componentsPlugin,
  pagesPlugin,
  pwaPlugin,
  registerMarkdownPlugins,
  unocssPlugin,
  vuePlugin,
} from './build'

const markdownWrapperClasses = 'prose prose-sm m-auto text-left'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    vuePlugin,
    pagesPlugin,
    autoImportPlugin,
    componentsPlugin,
    unocssPlugin,
    pwaPlugin,

    /** @see https://github.com/JohnCampionJr/vite-plugin-vue-layouts */
    Layouts(),
    /** @see https://github.com/antfu/vite-plugin-inspect || @see http://localhost:3333/__inspect/ */
    Inspect(),
    /** @see https://github.com/antfu/vite-plugin-vue-markdown */
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup: md => registerMarkdownPlugins(md),
    }),
  ],

  /** @see https://github.com/antfu/vite-ssg */
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() {
      generateSitemap({
        hostname: 'https://www.qbb.sh',
      })
    },
  },
  ssr: {
    noExternal: ['workbox-window'],
  },
})
