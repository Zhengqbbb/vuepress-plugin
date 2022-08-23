import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
declare const _hmt: any[]
declare global {
  interface Window {
    _hmt?: typeof _hmt

  }
}

/**
 * @description: The following parameters are fixed
 * @date checked: 2021-01-23
 */

const ___360_FILENAME___ = 'ab77b6ea7f3fbf79'
const ___360_ID___ = 'sozz'
const ___TOUTIAO_ID___ = 'ttzz'

export const useSearchConsole = (
  baiduId: string,
  toutiaoAutoPushId: string,
  autoPushBaiduSwitch: boolean,
  autoPush360Switch: boolean,
): void => {
  const curProtocol = window.location.protocol.split(':')[0]
  // insert baidu `<script>` tag
  if (baiduId !== '') {
    const btagScript = document.createElement('script')
    btagScript.src = `https://hm.baidu.com/hm.js?${baiduId}`
    btagScript.async = true
    if (!document.head.contains(btagScript))
      document.head.appendChild(btagScript)

    window._hmt = window._hmt || []
  }

  // inset baidu auto search console `<script>` tag
  if (autoPushBaiduSwitch) {
    const bdAutoScript = document.createElement('script')
    curProtocol === 'https'
      ? (bdAutoScript.src = 'https://zz.bdstatic.com/linksubmit/push.js')
      : (bdAutoScript.src = 'http://push.zhanzhang.baidu.com/push.js')
    bdAutoScript.async = true
    if (!document.head.contains(bdAutoScript))
      document.head.appendChild(bdAutoScript)
  }

  // inset 360 auto search console `<script>` tag
  if (autoPush360Switch) {
    const txzAutoScript = document.createElement('script')
    txzAutoScript.src = `https://s.ssl.qhres2.com/ssl/${___360_FILENAME___}.js`
    txzAutoScript.id = ___360_ID___
    txzAutoScript.async = true
    if (!document.head.contains(txzAutoScript))
      document.head.appendChild(txzAutoScript)
  }

  // inset TouTiao auto search console `<script>` tag
  if (toutiaoAutoPushId !== '') {
    const ttAutoScript = document.createElement('script')
    ttAutoScript.src = `https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?${toutiaoAutoPushId}`
    ttAutoScript.id = ___TOUTIAO_ID___
    ttAutoScript.async = true
    if (!document.head.contains(ttAutoScript))
      document.head.appendChild(ttAutoScript)
  }
  // record path after navigation
  onMounted(() => {
    const router = useRouter()
    router.afterEach((to) => {
      _hmt.push(['_trackPageview', to.fullPath])
    })
  })
}
