// 获取语言包 hk.yml
import hk from './locales/hk.js'
import cn from './locales/cn.js'
import en from './locales/en.js'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'hk',
  messages: {
    hk: hk,
    cn: cn,
    en: en
  }
}))
