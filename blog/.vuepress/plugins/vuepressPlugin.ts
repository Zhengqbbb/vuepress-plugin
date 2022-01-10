import { path } from "@vuepress/utils";
import type { DocsearchOptions } from "@vuepress/plugin-docsearch";
import type { PwaPluginOptions } from "@vuepress/plugin-pwa";
import type { PwaPopupPluginOptions } from "@vuepress/plugin-pwa-popup";
import type { Page, PluginConfig } from "vuepress";

export const registerComponentsPlugin: PluginConfig = [
    "@vuepress/register-components",
    {
        components: {
            HomePage: path.resolve(__dirname, "../components/HomePage.vue"),
        },
    },
];

export const docSearchPlugin: PluginConfig = [
    "@vuepress/plugin-docsearch",
    {
        apiKey: "a8b45d0e5d27d6ec39c687814b11fd0b",
        indexName: "qbenben",
        appId: "BUM16EKLGN",
        placeholder: "搜索",
    } as DocsearchOptions,
];

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

export const pwaPlugin: PluginConfig = [
    "@vuepress/pwa",
    {
        skipWaiting: false,
    } as PwaPluginOptions,
];

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
