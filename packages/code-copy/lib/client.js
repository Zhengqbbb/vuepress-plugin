import CodeCopy from "./components/CodeCopy.vue";

import { defineClientAppEnhance } from "@vuepress/client";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("CodeCopy", CodeCopy);
});
