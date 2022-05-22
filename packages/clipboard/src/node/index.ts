import type { ClipboardOptions } from "../shared";
import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";

export * from "../shared";

export const clipboardPlugin =
  (options: ClipboardOptions): Plugin =>
  () => ({
    name: "vuepress-plugin-clipboard",
    multiple: false,

    clientConfigFile: path.resolve(__dirname, "../client/config.js"),
    define: {
      __CODE_CLIPBOARD_OPTIONS__: options,
    },
  });

export default clipboardPlugin;
