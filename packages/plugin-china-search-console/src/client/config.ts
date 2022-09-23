import { defineClientConfig } from '@vuepress/client'
import { useSearchConsole } from './composables/index.js'

declare const __BA_ID__: string
declare const __TT_ID__: string
declare const __BA_AUTOPUSH__: boolean

declare const __360_AUTOPUSH__: boolean
declare const __VUEPRESS_SSR__: boolean

const baiduId = __BA_ID__
const toutiaoAutoPushId = __TT_ID__
const autoPushBaiduSwitch = __BA_AUTOPUSH__
const autoPush360Switch = __360_AUTOPUSH__

export default defineClientConfig({
  enhance() {
    if (__VUEPRESS_SSR__)
      return
    useSearchConsole(baiduId, toutiaoAutoPushId, autoPushBaiduSwitch, autoPush360Switch)
  },
})
