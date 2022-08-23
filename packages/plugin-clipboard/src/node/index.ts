import type { Plugin } from '@vuepress/core'
import { path } from '@vuepress/utils'
import type { ClipboardOptions } from '../shared'

export * from '../shared'

export const clipboardPlugin
  = (options: ClipboardOptions): Plugin =>
    () => ({
      name: 'vuepress-plugin-clipboard',
      multiple: false,

      clientConfigFile: path.resolve(__dirname, '../client/config.js'),
      define: {
        __CODE_CLIPBOARD_OPTIONS__: options,
      },
    })

export default clipboardPlugin
