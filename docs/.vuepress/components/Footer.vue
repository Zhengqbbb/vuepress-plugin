<template>
  <footer
    class="items-center text-lg"
  >
  自定义 footer 组件
  </footer>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup(props) {
    const data = reactive({
    });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
    padding: 2.5rem;
    text-align: center;
}
</style>