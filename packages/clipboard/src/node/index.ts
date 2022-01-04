import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type { ClipboardOptions } from "../shared";

export * from "../shared";

const genDefaultOption = (options: ClipboardOptions):Record<string, any> => {
  const defaultOpt = {
    staticIcon: options.staticIcon === true,
    align: options.align || "bottom",
    selector: options.selector || 'div[class*="language-"]',
    delay: options.delay || 400,
    color: options.color || "var(--c-brand)",
    backgroundTransition: options.backgroundTransition !== false,
    backgroundTransitionColor: options.backgroundTransitionColor || "var(--code-bg-color)",
    successTextColor: options.successTextColor || "var(--c-brand-light)",
    successText: options.successText || "Copied!",
  }
  return defaultOpt
};

const ClipboardPlugin: Plugin<ClipboardOptions> = (options: ClipboardOptions, app) => {
  return {
    name: "vuepress-plugin-clipboard",
    define: {
      __CODE_CLIPBOARD_OPTIONS__: genDefaultOption(options)
    },
    multiple: false,
    clientAppEnhanceFiles: path.resolve(__dirname, "../client/clientAppEnhance.js"),
    clientAppSetupFiles: path.resolve(__dirname, "../client/clientAppSetup.js"),
  };
};

export default ClipboardPlugin;


