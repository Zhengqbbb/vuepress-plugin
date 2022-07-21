import Pages from 'vite-plugin-pages'

// https://github.com/hannoeru/vite-plugin-pages
export const pagesPlugin = Pages({
  pagesDir: 'pages',
  extensions: ['vue', 'md'],
})
