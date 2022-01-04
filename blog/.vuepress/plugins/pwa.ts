import type { PluginConfig } from "@vuepress/core";

const pwa: PluginConfig = [
    "@vuepress/pwa",
    {
        skipWaiting: false,
    },
];

const pwaPopup: PluginConfig = [
    "@vuepress/plugin-pwa-popup",
    {
        locales: {
            // "/": {
            //     message: "New content is available.",
            //     buttonText: "Refresh",
            // },
            "/": {
                message: "发现新内容可用",
                buttonText: "刷新",
            },
        },
    },
];

export { pwa, pwaPopup };
