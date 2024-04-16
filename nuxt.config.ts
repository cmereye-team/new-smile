// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 3016,
    host: '0.0.0.0',
  },

  modules: ["@nuxtjs/i18n", '@vueuse/nuxt',],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'hk',
        name: '中文（香港）',
        iso: 'zh-HK',
      },
      {
        code: 'cn',
        name: '中文（简体）',
        iso: 'zh-CN',
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
      },
    ],
    defaultLocale: 'hk',
  }
})