import type MarkdownIt from 'markdown-it'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'

export const registerMarkdownPlugins = (md: MarkdownIt) => {
  // https://prismjs.com/
  md.use(Prism)
  md.use(LinkAttributes, {
    matcher: (link: string) => /^https?:\/\//.test(link),
    attrs: {
      target: '_blank',
      rel: 'noopener',
    },
  })
}
