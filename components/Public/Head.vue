<script lang="ts" setup>
const isPc = ref(false);
import { useWindowSize } from "@vueuse/core";
const { width, height } = useWindowSize();
</script>

<template>
  <div class="head">
    <PublicHeaderLeft />
    <div>
      <PublicHeaderRight key="pc" v-if="width > 768" />
      <PublicHeaderMobile key="mobile" v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .head {
    max-width: 1270px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0 25px 0;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
}
@media screen and (max-width: 767px) {
  .head {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    background: #fff;
    z-index: 999;
  }
}
</style>