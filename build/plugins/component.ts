import Components from 'unplugin-vue-components/vite'
import { resolve } from 'pathe'

/**
 * On-demand components auto importing for Vue.
 * @see https://github.com/antfu/unplugin-vue-components#usage
 */
export const componentsPlugin = Components({
  extensions: ['vue', 'md'],
  include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  dirs: resolve(__dirname, '../../src/components'),
  dts: resolve(__dirname, '../../src/components.d.ts'),
})
