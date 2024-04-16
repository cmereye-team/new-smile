<script lang="ts" setup>
</script>

<template>
  <div class="banner">
    <slot name="BannerBox"></slot>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .banner {
    max-width: 1270px;
    margin: 135px auto 0;
  }
}
@media screen and (max-width: 767px) {
  .banner{
    max-width: 100%;
    margin-top: 85px;
    background: #fff;
  }
}
</style>