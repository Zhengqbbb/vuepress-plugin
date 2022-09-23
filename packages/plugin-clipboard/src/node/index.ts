import { getDirname, path } from '@vuepress/utils'
import type { Plugin } from '@vuepress/core'
import type { ClipboardOptions } from '../shared/index.js'

export * from '../shared/index.js'

const __dirname = getDirname(import.meta.url)

export const clipboardPlugin
  = (options: ClipboardOptions): Plugin =>
    () => ({
      name: 'vuepress-plugin-clipboard',

      define: {
        __CODE_CLIPBOARD_OPTIONS__: options,
      },
      clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    })

export default clipboardPlugin
