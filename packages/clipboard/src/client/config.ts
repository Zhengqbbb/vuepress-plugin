import { defineClientConfig } from "@vuepress/client";
import CodeCopy from "./composables/CodeCopy.vue";
import { setupCopyCode } from "./composables/codeCopy";

import "./styles/main.css";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeCopy", CodeCopy);
  },
  setup: () => {
    setupCopyCode();
  },
});
