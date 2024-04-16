<script lang="ts" setup>
const { locale, setLocale } = useI18n();
useHead(() => ({
  title: "首页",
}));
</script>

<template>
  <div class="index">
    <PublicBanner>
      <template #BannerBox>
        <div class="banner-img">
          <span></span>
        </div>
      </template>
    </PublicBanner>
    <p>{{ $t("welcome") }}--</p>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .banner-img {
    width: 100%;
    height: 100%;
    background: url("https://static.cmereye.com/imgs/2024/04/2b08b35913c19f59.png")
      no-repeat;
    background-size: 100% 100%;
    min-height: 476px;
  }
}
@media screen and (max-width: 767px) {
  .banner-img {
    width: 100%;
    height: 100%;
    background: url("https://static.cmereye.com/imgs/2024/04/27793301b9f5db84.png")
      no-repeat;
    background-size: 100% 100%;
    min-height: 330px;
  }
}
</style>