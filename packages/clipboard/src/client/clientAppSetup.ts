import { defineClientAppSetup, usePageData } from "@vuepress/client";
import { createApp, onBeforeUnmount, onMounted, onUpdated, watch } from "vue";
import type { ClipboardOptions } from "../shared";
import CodeCopy from "./CodeCopy.vue";

import "./style.css";
declare const __CODE_CLIPBOARD_OPTIONS__: ClipboardOptions;
const options = __CODE_CLIPBOARD_OPTIONS__;

export default defineClientAppSetup(() => {
  const page = usePageData();

  const update = () => {
    if (page.value.path === "/") return;
    const delay = options.delay || 400;
    setTimeout(() => {
      document.querySelectorAll(options.selector || 'div[class*="language-"]').forEach((el) => {
        if (el.classList.contains(`code-copy-added-${options?.align || 'bottom'}`) || el.querySelector("pre, code[class*='pre-']") === null)
          return;
        const codeContent = el.querySelector("pre, code[class*='pre-']") as HTMLElement;
        const instance = createApp(CodeCopy, {
          parent: el,
          code: codeContent.innerText,
          options
        });
        const childEl = document.createElement("div");
        el.appendChild(childEl);
        instance.mount(childEl);

        el.classList.add(`code-copy-added-${options?.align || 'bottom'}`);
      });
    }, delay + 100);
  };

  onMounted(() => {
    update();
    window.addEventListener("vuepress-plugin-clipboard-update-event", update);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("vuepress-plugin-clipboard-update-event", update);
  });

  onUpdated(() => {
    update();
  });

  watch(() => page.value.path, update);

  return update;
});
