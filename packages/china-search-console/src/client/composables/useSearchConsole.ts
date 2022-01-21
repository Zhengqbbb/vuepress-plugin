declare const searchConsoleTag: boolean;

declare global {
  interface Window {
    searchConsoleTag?: typeof searchConsoleTag;
  }
}

export const useSearchConsole = (idBaidu: string, baiduAutoPush: boolean, id360: string, filename360: string): void => {
  // avoid duplicated import
  if (window.searchConsoleTag) {
    return;
  }

  const curProtocol = window.location.protocol.split(":")[0];
  // insert baidu `<script>` tag
  const btagScript = document.createElement("script");
  btagScript.src = `https://hm.baidu.com/hm.js?${idBaidu}`;
  btagScript.async = true;
  document.head.appendChild(btagScript);

  // inset baidu auto search console `<script>` tag
  if ( baiduAutoPush ) {
    const bdAutoScript = document.createElement("script");
    curProtocol === "https"
      ? (bdAutoScript.src = "https://zz.bdstatic.com/linksubmit/push.js")
      : (bdAutoScript.src = "http://push.zhanzhang.baidu.com/push.js");
    bdAutoScript.async = true;
    document.head.appendChild(bdAutoScript);
  }

  // inset 360 auto search console `<script>` tag
  if ( id360 !== "" && curProtocol === "https") {
    const txzAutoScript = document.createElement("script");
    txzAutoScript.src = `https://s.ssl.qhres2.com/ssl/${filename360}.js`
    txzAutoScript.id = id360
    txzAutoScript.async = true;
    document.head.appendChild(txzAutoScript);
  }

  // insert stag snippet
  window.searchConsoleTag = true;
};
