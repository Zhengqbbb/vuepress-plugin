import type { AppOptions } from 'vuepress'

export const bundler: AppOptions["bundler"] = '@vuepress/vite'

export const bundlerConfig: AppOptions["bundlerConfig"] = {
  viteOptions: {
    css: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer')
        ]
      }
    },
  }
}