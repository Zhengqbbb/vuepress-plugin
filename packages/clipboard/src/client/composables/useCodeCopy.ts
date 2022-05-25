import { createApp, onBeforeUnmount, onMounted, onUpdated, watch } from "vue";
import { useRoute } from "vue-router";
import type { ClipboardOptions } from "../../shared";
import CodeCopy from "./CodeCopy.vue";

import "../styles/main.css";
declare const __CODE_CLIPBOARD_OPTIONS__: ClipboardOptions;
const options = __CODE_CLIPBOARD_OPTIONS__;

export const setupCopyCode = () => {
  const router = useRoute();
  const copyBtnClassName = `code-copy-added-${options?.align || "bottom"}`;
  const update = () => {
    if (router.path === "/") return;
    const delay = options.delay || 400;
    setTimeout(() => {
      document
        .querySelectorAll(options.selector || 'div[class*="language-"]')
        .forEach((el) => {
          if (
            el.classList.contains(copyBtnClassName) ||
            el.querySelector("pre, code[class*='pre-']") === null
          )
            return;
          const codeContent = el.querySelector(
            "pre, code[class*='pre-']"
          ) as HTMLElement;
          const instance = createApp(CodeCopy, {
            parent: el,
            code: codeContent.innerText || codeContent.textContent,
            options,
          });
          const childEl = document.createElement("div");
          el.appendChild(childEl);
          instance.mount(childEl);

          el.classList.add(copyBtnClassName);
        });
    }, delay + 100);
  };
  const clear = () => {
    document
      .querySelectorAll(options.selector || 'div[class*="language-"]')
      .forEach((el) => {
        if (el.classList.contains(copyBtnClassName)) {
          el.classList.remove(copyBtnClassName);
        }
      });
  };
  onMounted(() => {
    update();
    window.addEventListener("vuepress-plugin-clipboard-update-event", update);
  });

  onBeforeUnmount(() => {
    clear;
    window.removeEventListener(
      "vuepress-plugin-clipboard-update-event",
      update
    );
  });

  onUpdated(() => {
    update();
  });

  watch(
    () => router.path,
    () => {
      clear();
      update();
    }
  );

  return update;
};
