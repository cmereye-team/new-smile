<script lang="ts" setup>
const { locale, setLocale } = useI18n();

const menuList = ref([
  {
    id: 1,
    path: "",
    name: "關於希瑪",
    childType: true,
    childList: [
      {
        id: 1,
        path: "",
        name: "集團及中心簡介",
      },
      {
        id: 2,
        path: "",
        name: "醫生團隊",
      },
      {
        id: 3,
        path: "",
        name: "中心設備",
      },
    ],
  },
  {
    id: 2,
    path: "",
    name: "矯視服務",
    childType: true,
    childList: [
      {
        id: 1,
        path: "",
        name: "SMILE 微笑激光矯視",
      },
      {
        id: 2,
        path: "",
        name: "SMILE Pro微笑激光矯視",
      },
      {
        id: 3,
        path: "",
        name: "CMER CLEAR-Vision",
      },
      {
        id: 4,
        path: "",
        name: "LASIK 激光矯視",
      },
      {
        id: 5,
        path: "",
        name: "ICL植入式隱形眼鏡",
      },
    ],
  },
  {
    id: 3,
    path: "",
    name: "診症須知",
    childType: false,
  },
  {
    id: 4,
    path: "",
    name: "收費詳情",
    childType: false,
  },
  {
    id: 5,
    path: "",
    name: "常見問題",
    childType: true,
    childList: [
      {
        id: 1,
        path: "",
        name: "SMILE 微笑激光矯視",
      },
      {
        id: 2,
        path: "",
        name: "LASIK 激光矯視",
      },
      {
        id: 3,
        path: "",
        name: "ICL植入式隱形眼鏡",
      },
      {
        id: 4,
        path: "",
        name: "CLEAR-Vision",
      },
    ],
  },
  {
    id: 6,
    path: "",
    name: "聯絡我們",
    childType: false,
  },
]);
import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();
</script>

<template>
  <div class="HeaderRight">
    <div class="header-top" v-if="width > 768">
      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
          >
            <path
              d="M4.67878 7.6421C4.9418 7.00581 5.37664 7.11516 5.77453 6.37409C6.22088 5.54207 6.06975 4.65356 5.93611 3.83039C5.77338 2.84676 5.63969 2.06226 5.02065 1.6921C4.18356 1.19366 3.03302 1.81655 2.93922 1.86758C1.15986 2.86093 0.84235 5.92291 0.977809 7.58181C1.50648 14.207 10.8608 19.7576 13.8848 17.897C14.6118 17.4532 15.4878 16.2576 15.2547 15.322C15.1586 14.9239 14.6947 14.5768 13.7862 13.863C12.6011 12.9321 12.0012 12.4652 11.4415 12.6405C10.8979 12.8113 10.9689 13.3745 10.4134 13.6821C9.41384 14.2344 7.91694 13.1875 7.34773 12.7963C6.09666 11.9297 5.52253 10.8336 5.26106 10.31C4.81846 9.43333 4.3364 8.48699 4.68173 7.62722L4.67878 7.6421Z"
              stroke="#4570B6"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
        <div>3892 5099</div>
      </div>
      <div>預約服務</div>
      <div class="language">
        <div class="language-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M13 0C10.4289 0 7.91543 0.762422 5.7776 2.19088C3.63976 3.61934 1.97351 5.64967 0.98957 8.02511C0.00563168 10.4005 -0.25181 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80761 22.1924C5.62569 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5994 25.9944 17.9749 25.0104C20.3503 24.0265 22.3806 22.3602 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C26 9.55218 24.6303 6.24558 22.1924 3.80761C19.7544 1.36964 16.4478 0 13 0ZM24.1731 12.0763H19.2811C19.1579 8.02578 18.2137 4.55 16.77 2.42211C18.8011 3.1499 20.5796 4.44747 21.8925 6.15961C23.2054 7.87174 23.9972 9.92591 24.1731 12.0763ZM13 24.18C10.9474 24.18 8.72367 19.9926 8.5184 13.8758H17.4816C17.2832 20.02 15.0321 24.2074 13 24.2074V24.18ZM8.5184 12.0763C8.72367 5.95947 10.9748 1.7721 13 1.7721C15.0253 1.7721 17.2832 5.95947 17.4816 12.0763H8.5184ZM9.23686 2.42211C7.79318 4.58422 6.84894 8.02578 6.72578 12.0763H1.8337C2.01471 9.93074 2.80882 7.88245 4.1214 6.1756C5.43399 4.46875 7.2097 3.17532 9.23686 2.44946V2.42211ZM1.8337 13.8758H6.69842C6.82158 17.9263 7.76578 21.3679 9.20946 23.53C7.18788 22.7991 5.41842 21.5037 4.11105 19.7973C2.80368 18.0909 2.0133 16.0453 1.8337 13.9032V13.8758ZM16.77 23.53C18.2137 21.3679 19.1579 17.9263 19.2811 13.8758H24.1731C24.0014 16.0308 23.2116 18.0904 21.8985 19.8077C20.5854 21.525 18.8046 22.8269 16.77 23.5574V23.53Z"
              fill="#4570B6"
            />
          </svg>
        </div>
        <!-- <div class="language-list">
          <div @click="setLocale('hk')">繁体中文</div>
          <div @click="setLocale('cn')">简体中文</div>
          <div @click="setLocale('en')">English</div>
        </div> -->
      </div>
    </div>
    <div class="header-bottom">
      <div v-for="item in menuList" :key="item.id">
        <nuxt-link
          :to="item.childType ? item.path : '/'"
          :class="[item.childType ? 'child-menu' : '']"
          >{{ item.name }}</nuxt-link
        >
        <div :class="[item.childType ? 'child-menu-list' : '']">
          <div v-for="child in item.childList" :key="child.id">
            <nuxt-link :to="child.path == '' ? '/' : child.path">{{
              child.name
            }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
@media screen and (min-width: 768px) {
  .HeaderRight {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .header-top {
    display: flex;
    & > div {
      display: flex;
      align-items: center;
      margin-left: 20px;
    }
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      & > div:nth-child(1) {
        margin-right: 3px;
        display: flex;
        align-items: center;
      }
      color: #6d6e71;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 3px;
    }
    & > div:nth-child(2) {
      cursor: pointer;
      color: #fff;
      text-align: center;
      font-family: "Noto Sans HK";
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 6.75px;
      padding: 10px 20px;
      border-radius: 17px;
      background: #4570b6;
    }
    & > div:nth-child(2):hover {
      box-shadow: 3px 5px 5px #adadad;
    }
  }
  .header-bottom {
    display: flex;
    margin-top: 20px;
    & > div {
      margin-left: 24px;
      position: relative;
      a {
        width: 100%;
        display: block;
        color: #6d6e71;
        text-align: center;
        font-family: "Noto Sans HK";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 2.4px;
      }
    }
    & > div:hover {
      & > a {
        color: #4570b6;
        cursor: pointer;
      }
      .child-menu-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  .child-menu {
    position: relative;
    color: #6d6e71;
    text-align: center;
    font-family: "Noto Sans HK";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.4px;
    padding-bottom: 10px;
  }
  .child-menu::after {
    content: "";
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    width: 20px;
    height: 5px;
    background: #a6e1d6;
    border-radius: 5px;
  }
  .child-menu-list {
    display: none;
    position: absolute;
    background: #fff;
    width: max-content;
    & > div {
      & > a {
        display: block;
        padding: 20px 20px;
        width: 100%;
        box-sizing: border-box;
        text-align: left;
      }
    }
  }
  .child-menu-list {
    & > div {
      width: 100%;
    }
    a {
      color: #6d6e71;
      font-family: "Noto Sans HK";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 2.4px;
      text-align: left;
    }
    a:hover {
      color: #fff;
      background: #4471b7;
    }
  }
  .language {
    cursor: pointer;
    position: relative;
  }

  .language:hover {
    .language-list {
      position: absolute;
      top: 35px;
      display: flex;
      flex-direction: column;
      background: #fff;
      left: 50%;
      transform: translateX(-50%);
      & > div {
        padding: 10px 20px;
        width: max-content;
      }
      & > div:hover {
        background: #4471b7;
        color: #fff;
      }
    }
  }
  .language-list {
    display: none;
  }
}
@media screen and (max-width: 767px) {
  .HeaderRight{
    display: flex;
    width: 100%;
  }
}
</style>