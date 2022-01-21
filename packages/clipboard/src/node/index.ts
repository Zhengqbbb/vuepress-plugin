import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type { ClipboardOptions } from "../shared";

export * from "../shared";

const ClipboardPlugin: Plugin<ClipboardOptions> = (options: ClipboardOptions, app) => {
  return {
    name: "vuepress-plugin-clipboard",
    define: {
      __CODE_CLIPBOARD_OPTIONS__: options
    },
    multiple: false,
    clientAppEnhanceFiles: path.resolve(__dirname, "../client/clientAppEnhance.js"),
    clientAppSetupFiles: path.resolve(__dirname, "../client/clientAppSetup.js")
  };
};

export default ClipboardPlugin;
