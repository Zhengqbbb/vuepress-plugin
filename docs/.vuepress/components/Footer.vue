<template>
  <footer
    class="items-center text-lg"
  >
  
  © 2021-2021 <a href="https://github.com/zhengqbbb" target="_blank">Qbenben</a> | <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备19092669号</a> .
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