import { path } from "@vuepress/utils";
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
    },
];

/**
 * @description: Search Plugin
 * @see: https://v2.vuepress.vuejs.org/reference/plugin/search
 */
export const vuepressSearchPlugin: PluginConfig = [
    "@vuepress/plugin-search",
    {
        // 排除首页
        isSearchable: (page: Page) => !["Tags", "Links", "HomePage"].includes(page.frontmatter.layout as string),
        locales: {
            "/": {
                placeholder: "搜索",
            },
        },
    },
];