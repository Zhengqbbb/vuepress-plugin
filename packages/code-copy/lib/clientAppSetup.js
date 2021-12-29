import { createApp, onUpdated, onMounted, onBeforeUnmount, watch } from "vue";
import { usePageData } from "@vuepress/client";
import CodeCopy from "./components/CodeCopy.vue";
import { defineClientAppSetup } from "@vuepress/client";
import "./theme/style.css";

export default defineClientAppSetup(() => {
  const page = usePageData();

  const update = () => {
    setTimeout(() => {
      document.querySelectorAll(selector).forEach((el) => {
        if (el.classList.contains("code-copy-added")) return;
        let options = {
          staticIcon: staticIcon,
          align: align,
          color: color,
          delay: delay,
          backgroundTransition: backgroundTransition,
          backgroundTransitionColor: backgroundTransitionColor,
          successText: successText,
          successTextColor: successTextColor,
        };
        let instance = createApp(CodeCopy, {
          parent: el,
          code: el.querySelector("pre, code[class*='pre-']").innerText,
          options: options,
        });
        let childEl = document.createElement("div");
        el.appendChild(childEl);
        instance.mount(childEl);

        el.classList.add("code-copy-added");
      });
    }, delay + 100);
  };

  onMounted(() => {
    update();
    window.addEventListener(
      "snippetors-vuepress-plugin-code-copy-update-event",
      update
    );
  });

  onBeforeUnmount(() => {
    window.removeEventListener(
      "snippetors-vuepress-plugin-code-copy-update-event",
      update
    );
  });

  onUpdated(() => {
    update();
  });

  watch(() => page.value.path, update);

  return update;
});
