const { path } = require("@vuepress/utils");

module.exports = (options = {}, app) => ({
  define: {
    staticIcon: options.staticIcon === true,
    align: options.align || "bottom",
    selector: options.selector || 'div[class*="language-"]',
    delay: options.delay || 400,
    color: options.color || "var(--c-brand)",
    backgroundTransition: options.backgroundTransition !== false,
    backgroundTransitionColor: options.backgroundTransitionColor || "var(--code-bg-color);",
    successTextColor: options.successTextColor || options.color || "var(--c-brand-light)",
    successText: options.successText || "Copied!",
  },
  name: "@zhengqbbb/vuepress-plugin-clipboard",
  multiple: false,
  clientAppEnhanceFiles: path.resolve(__dirname, "./client.js"),
  clientAppSetupFiles: path.resolve(__dirname, "./clientAppSetup.js"),
});
