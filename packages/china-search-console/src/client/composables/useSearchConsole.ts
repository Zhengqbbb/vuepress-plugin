declare const searchConsoleTag: boolean;

declare global {
    interface Window {
        searchConsoleTag?: typeof searchConsoleTag;
    }
}

/**
 * @description: The following parameters are fixed
 * @date checked: 2021-01-23
 */
/* eslint-disable @typescript-eslint/naming-convention */
const ___360_FILENAME___ = "ab77b6ea7f3fbf79";
const ___360_ID___ = "sozz";
const ___TOUTIAO_ID___ = "ttzz";

export const useSearchConsole = (
    baiduId: string,
    toutiaoAutoPushId: string,
    autoPushBaiduSwitch: boolean,
    autoPush360Switch: boolean
): void => {
    // avoid duplicated import
    if (window.searchConsoleTag) {
        return;
    }

    const curProtocol = window.location.protocol.split(":")[0];
    // insert baidu `<script>` tag
    if (baiduId !== "") {
        const btagScript = document.createElement("script");
        btagScript.src = `https://hm.baidu.com/hm.js?${baiduId}`;
        btagScript.async = true;
        document.head.appendChild(btagScript);
    }

    // inset baidu auto search console `<script>` tag
    if (autoPushBaiduSwitch) {
        const bdAutoScript = document.createElement("script");
        curProtocol === "https"
            ? (bdAutoScript.src = "https://zz.bdstatic.com/linksubmit/push.js")
            : (bdAutoScript.src = "http://push.zhanzhang.baidu.com/push.js");
        bdAutoScript.async = true;
        document.head.appendChild(bdAutoScript);
    }

    // inset 360 auto search console `<script>` tag
    if (autoPush360Switch) {
        const txzAutoScript = document.createElement("script");
        txzAutoScript.src = `https://s.ssl.qhres2.com/ssl/${___360_FILENAME___}.js`;
        txzAutoScript.id = ___360_ID___;
        txzAutoScript.async = true;
        document.head.appendChild(txzAutoScript);
    }

    // inset TouTiao auto search console `<script>` tag
    if (toutiaoAutoPushId !== "") {
        const ttAutoScript = document.createElement("script");
        ttAutoScript.src = `https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?${toutiaoAutoPushId}`;
        ttAutoScript.id = ___TOUTIAO_ID___;
        ttAutoScript.async = true;
        document.head.appendChild(ttAutoScript);
    }

    // insert stag snippet
    window.searchConsoleTag = true;
};
