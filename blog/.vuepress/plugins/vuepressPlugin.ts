import { docsearchPlugin } from "@vuepress/plugin-docsearch";

/**
 * @description: Document Search Plugin
 * @see: https://v2.vuepress.vuejs.org/reference/plugin/docsearch
 */
export const docSearchPlugin = docsearchPlugin({
  appId: "ZXNKKDIAEP",
  apiKey: "e04c4314ce642d9c6cb2a71e7a0306f1",
  indexName: "blog",
  locales: {
    "/": {
      placeholder: "搜索文档",
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          searchBox: {
            resetButtonTitle: "清除查询条件",
            resetButtonAriaLabel: "清除查询条件",
            cancelButtonText: "取消",
            cancelButtonAriaLabel: "取消",
          },
          startScreen: {
            recentSearchesTitle: "搜索历史",
            noRecentSearchesText: "没有搜索历史",
            saveRecentSearchButtonTitle: "保存至搜索历史",
            removeRecentSearchButtonTitle: "从搜索历史中移除",
            favoriteSearchesTitle: "收藏",
            removeFavoriteSearchButtonTitle: "从收藏中移除",
          },
          errorScreen: {
            titleText: "无法获取结果",
            helpText: "你可能需要检查你的网络连接",
          },
          footer: {
            selectText: "选择",
            navigateText: "切换",
            closeText: "关闭",
            searchByText: "搜索提供者",
          },
          noResultsScreen: {
            noResultsText: "无法找到相关结果",
            suggestedQueryText: "你可以尝试查询",
            reportMissingResultsText: "你认为该查询应该有结果？",
            reportMissingResultsLinkText: "点击反馈"
          },
        },
      },
    },
  },
});

/**
 * @description: Search Plugin
 * @see: https://v2.vuepress.vuejs.org/reference/plugin/search
 */
// export const vuepressSearchPlugin: PluginConfig = [
//   "@vuepress/plugin-search",
//   {
//     // 排除首页
//     isSearchable: (page: Page) =>
//       !["Tags", "Links", "HomePage"].includes(
//         page.frontmatter.layout as string
//       ),
//     locales: {
//       "/": {
//         placeholder: "搜索",
//       },
//     },
//   },
// ];
