<template>
  <div class="code-copy">
    <svg
      @click="copyToClipboard"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :class="[iconClass, alignClass]"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        :fill="options.color"
        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"
      />
    </svg>
    <span
      :class="[success ? 'success' : '', alignClass]"
      :style="{ color: options.successTextColor }"
    >
      {{ options.successText }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'CodeCopy',
  props: {
    parent: Object,
    code: String,
    options: {
      align: String,
      color: String,
      backgroundTransition: Boolean,
      backgroundTransitionColor: String,
      successText: String,
      successTextColor: String,
      staticIcon: Boolean
    }
  },
  data() {
    return {
      success: false,
      originalBackground: null,
      originalTransition: null
    };
  },
  computed: {
    alignClass() {
      return this.options.align;
    },
    iconClass() {
      return this.options.staticIcon ? '' : 'hover';
    }
  },
  mounted() {
    this.originalTransition = this.parent.style.transition;
    this.originalBackground = this.parent.style.background;
  },
  beforeDestroy() {
    this.parent.style.transition = this.originalTransition;
    this.parent.style.background = this.originalBackground;
  },
  methods: {
    // From: https://stackoverflow.com/a/5624139
    hexToRgb(hex) {
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          }
        : null;
    },
    copyToClipboard(el) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(this.code).then(
          () => {
            this.setSuccessTransitions();
          },
          () => {}
        );
      } else {
        let copyelement = document.createElement('textarea');
        document.body.appendChild(copyelement);
        copyelement.value = this.code;
        copyelement.select();
        document.execCommand('Copy');
        copyelement.remove();

        this.setSuccessTransitions();
      }
    },
    setSuccessTransitions() {
      clearTimeout(this.successTimeout);

      if (this.options.backgroundTransition) {
        this.parent.style.transition = 'background 350ms';
        let transColor = this.options.backgroundTransitionColor
        transColor = transColor.indexOf('#') !== -1 ? transColor : "#282c34";
        let color = this.hexToRgb(transColor);
        this.parent.style.background = `rgba(${color.r}, ${color.g}, ${color.b}, 0.7)`;
      }

      this.success = true;
      this.successTimeout = setTimeout(() => {
        if (this.options.backgroundTransition) {
          this.parent.style.background = this.originalBackground;
          this.parent.style.transition = this.originalTransition;
        }
        this.success = false;
      }, 500);
    }
  }
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
.code-group .top{
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
  right: 5rem!important;
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
