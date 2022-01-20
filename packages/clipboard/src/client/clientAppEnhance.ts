import { defineClientAppEnhance } from "@vuepress/client";
import CodeCopy from "./CodeCopy.vue";

export default defineClientAppEnhance(({ app }) => {
  app.component("CodeCopy", CodeCopy);
});
