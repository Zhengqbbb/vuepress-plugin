import { defineClientAppSetup, usePageData } from "@vuepress/client";
import { createApp, onUpdated, onMounted, onBeforeUnmount, watch } from "vue";
import CodeCopy from "./CodeCopy.vue";
import type { ClipboardOptions } from "../shared";

import "./style.css";
declare const __CODE_CLIPBOARD_OPTIONS__: ClipboardOptions;
const options = __CODE_CLIPBOARD_OPTIONS__;

export default defineClientAppSetup(() => {
    const page = usePageData();

    const update = () => {
        setTimeout(() => {
            document.querySelectorAll(options.selector).forEach((el) => {
                if (
                    el.classList.contains(`code-copy-added-${options.align}`) ||
                    el.querySelector("pre, code[class*='pre-']") === null
                )
                    return;
                const codeContent = el.querySelector("pre, code[class*='pre-']") as HTMLElement
                const instance = createApp(CodeCopy, {
                    parent: el,
                    code: codeContent.innerText,
                    options,
                });
                const childEl = document.createElement("div");
                el.appendChild(childEl);
                instance.mount(childEl);

                el.classList.add(`code-copy-added-${options.align}`);
            });
        }, options.delay + 100);
    };

    onMounted(() => {
        update();
        window.addEventListener(
            "vuepress-plugin-clipboard-update-event",
            update
        );
    });

    onBeforeUnmount(() => {
        window.removeEventListener(
            "vuepress-plugin-clipboard-update-event",
            update
        );
    });

    onUpdated(() => {
        update();
    });

    watch(() => page.value.path, update);

    return update;
});
