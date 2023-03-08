import type { HeadConfig } from '@vuepress/core'

export const head: HeadConfig[] = [
  ['meta', { name: 'google-site-verification', content: 'j6cNWewUj3QcJBpdv48t67XoDxdlKPQ6dwKgXg9Nigo' }],
  ['meta', { name: 'baidu-site-verification', content: 'code-JiFVTLHmcI' }],
  ['script', { 'async': true, 'defer': true, 'data-website-id': `${process.env.UMAIMI_ID || ''}`, 'src': `${process.env.UMAIMI_ENDPOINT || ''}` }],
]
