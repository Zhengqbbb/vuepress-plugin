import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { pageInfo, bunderInfo } from "./configs";
import * as pagePlugins from "./plugins";

export default defineUserConfig<DefaultThemeOptions>({
    title: pageInfo.title,
    description: pageInfo.description,
    head: pageInfo.headConfig,
    lang: pageInfo.lang,
    base: pageInfo.base,

    bundler: bunderInfo.bundler,

    plugins: [
        pagePlugins.codeCopyPlugin,
        pagePlugins.searchConsolePlugin,
    ],
    markdown: {
        extractHeaders: {
            level: [2, 3, 4, 5],
        },
        code: {
            lineNumbers: false,
        },
    },
    extendsMarkdown: (md) => {
        md.use(require("markdown-it-task-lists"));
        md.use(require("markdown-it-deflist"));
    },

    theme: "vuepress-theme-gungnir",
    themeConfig: pageInfo.themeConfig,
});
