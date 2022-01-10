import { path } from "@vuepress/utils";
import type { DocsearchOptions } from "@vuepress/plugin-docsearch";
import type { PwaPluginOptions } from "@vuepress/plugin-pwa";
import type { PwaPopupPluginOptions } from "@vuepress/plugin-pwa-popup";
import type { Page, PluginConfig } from "vuepress";

/**
 * @description: Register Components
 * @see: https://v2.vuepress.vuejs.org/reference/plugin/register-components
 */
export const registerComponentsPlugin: PluginConfig = [
    "@vuepress/register-components",
    {
        components: {
            HomePage: path.resolve(__dirname, "../components/HomePage.vue"),
        },
    },
];

/**
 * @description: Document Search Plugin
 * @see: https://v2.vuepress.vuejs.org/reference/plugin/docsearch
 */
export const docSearchPlugin: PluginConfig = [
    "@vuepress/plugin-docsearch",
    {
        apiKey: "a8b45d0e5d27d6ec39c687814b11fd0b",
        indexName: "qbenben",
        appId: "BUM16EKLGN",
        placeholder: "搜索",
    } as DocsearchOptions,
];

/**
 * @description: Search Plugin
 * @see: https://v2.vuepress.vuejs.org/reference/plugin/search
 */
export const vuepressSearchPlugin: PluginConfig = [
    "@vuepress/plugin-search",
    {
        // 排除首页
        isSearchable: (page: Page) => page.path !== "/",
        locales: {
            "/": {
                placeholder: "搜索",
            },
        },
    },
];

/**
 * @description: PWA Plugin
 * @see: https://v2.vuepress.vuejs.org/reference/plugin/pwa
 */
export const pwaPlugin: PluginConfig = [
    "@vuepress/pwa",
    {
        skipWaiting: false,
    } as PwaPluginOptions,
];

/**
 * @description: PWA Popup Plugin
 * @see: https://v2.vuepress.vuejs.org/reference/plugin/pwa-popup
 */
export const pwaPopupPlugin: PluginConfig = [
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
    } as PwaPopupPluginOptions,
];
