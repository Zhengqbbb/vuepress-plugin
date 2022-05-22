<template>
  <div class="code-copy">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :class="[iconClass, alignClass]"
      @click="copyToClipboard"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        :fill="componentOptions.color"
        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
      />
    </svg>
    <span
      :class="[success ? 'success' : '', alignClass]"
      :style="{ color: componentOptions.successTextColor }"
    >
      {{ componentOptions.successText }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, toRefs } from "vue";
import type { PropType } from "vue";
import type { ClipboardOptions, HexToRgb } from "../../shared";

const props = defineProps({
  parent: {
    type: Object as PropType<HTMLElement | null>,
    default: null
  },
  options: {
    type: Object as PropType<ClipboardOptions>,
    default: null
  },
  code: {
    type: String,
    required: true
  }
});

const { code, parent, options } = toRefs(props);
const success = ref(false);
const originalBackground = ref<string | null>(null);
const originalTransition = ref<string | null>(null);
const successTimeout = ref<number | undefined>(undefined);
const componentOptions = computed(() =>
  options.value === null ? genDefaultOption(null) : genDefaultOption(options.value)
);
const alignClass = computed(() => componentOptions.value.align);
const iconClass = computed(() => (componentOptions.value.staticIcon ? "" : "hover"));

onMounted(() => {
  if (parent.value !== null) {
    originalBackground.value = parent.value.style.background;
    originalTransition.value = parent.value.style.transition;
  }
});

onBeforeUnmount(() => {
  if (parent.value !== null) {
    if (originalBackground.value !== null) parent.value!.style.background = originalBackground.value;
    if (originalTransition.value !== null) parent.value!.style.transition = originalTransition.value;
  }
  if (successTimeout.value !== undefined) window.clearTimeout(successTimeout.value);
});

const hexToRgb: HexToRgb = (hex: string) => {
  const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return res
    ? {
        r: parseInt(res[1], 16),
        g: parseInt(res[2], 16),
        b: parseInt(res[3], 16)
      }
    : null;
};

const copyToClipboard = (el: MouseEvent): void => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code.value).then(
      () => setSuccessTransitions(),
      () => null
    );
  } else {
    const copyElement = document.createElement("textarea");
    document.body.appendChild(copyElement);
    copyElement.value = code.value;
    copyElement.select();
    document.execCommand("Copy");
    copyElement.remove();
    setSuccessTransitions();
  }
};

const setSuccessTransitions = (): void => {
  window.clearTimeout(successTimeout.value);
  successTimeout.value = undefined;
  if (componentOptions.value.backgroundTransition && parent.value !== null) {
    parent.value!.style.transition = "background 350ms";
    let transColor = componentOptions.value.backgroundTransitionColor || "";
    transColor = transColor.indexOf("#") === -1 ? transColor : "#282c34";
    const color = hexToRgb(transColor);
    if (color !== null) parent.value.style.background = `rgba(${color.r}, ${color.g}, ${color.b}, 0.7)`;
  }
  success.value = true;
  successTimeout.value = window.setTimeout(() => {
    if (componentOptions.value.backgroundTransition && parent.value !== null) {
      parent.value.style.background = originalBackground.value as string;
      parent.value.style.transition = originalTransition.value as string;
    }
    success.value = false;
  }, 500);
};

const genDefaultOption = (options: ClipboardOptions | null): ClipboardOptions => {
  return {
    staticIcon: options?.staticIcon === true || false,
    align: options?.align || "bottom",
    selector: options?.selector || 'div[class*="language-"]',
    delay: options?.delay || 400,
    color: options?.color || "var(--c-brand)",
    backgroundTransition: options?.backgroundTransition !== false || true,
    backgroundTransitionColor: options?.backgroundTransitionColor || "var(--code-bg-color)",
    successTextColor: options?.successTextColor || "var(--c-brand-light)",
    successText: options?.successText || "Copied!"
  };
};
</script>
<style scoped>
@media (max-width: 1024px) {
  div svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}

@media (max-width: 768px) {
  div svg {
    width: 1.3rem;
    height: 1.3rem;
  }
}

@media (max-width: 768px) {
  div .top {
    top: 0.6rem;
  }
}

@media (max-width: 640px) {
  div svg {
    width: 1rem;
    height: 1rem;
  }
}

svg {
  z-index: 9;
  width: 1.4rem;
  height: 1.4rem;
  position: absolute;
  right: 0.3rem;
  opacity: 0.75;
  cursor: pointer;
}
.code-group .top {
  top: -2rem;
}

.top {
  top: 0.4rem;
  right: 0.2rem
}

.bottom {
  bottom: 1rem;
  right: 0.3rem;
}

span {
  position: absolute;
  font-size: 0.85rem;
  line-height: 1.2rem;
  right: 4.5rem !important;
  opacity: 0;
  transition: opacity 500ms;
}

svg.hover {
  opacity: 0;
}

svg:hover {
  opacity: 1 !important;
}

.success {
  opacity: 1 !important;
}
</style>
