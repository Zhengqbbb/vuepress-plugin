<template>
  <div class="hello-world no-sidebar">
    <main class="main">
      <Footer />
    </main>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Footer
  },
  setup(props) {
    // data
    const data = reactive({
      title: "",
      isShowSideBar: false,
      toggleSidebar: () => {}
    });

    onMounted(() => {
      data.toggleSidebar = (to) => {
        data.isShowSideBar = typeof to === 'boolean' ? to : !data.isShowSideBar;
      }
    });

    data.title = "X-bash";

    const refData = toRefs(data);
    return {
      ...refData,
    };
  }
};
</script>

<style lang="scss" scoped>
.main{
  padding: 3.6rem 2rem 0;
  max-width: 960px;
  margin: 0 auto;
  display: block;
  text-align: center;
}
</style>