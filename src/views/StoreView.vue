<template>
  <div id="store-view">
    <Header
      :title="storeInfo.name"
      :showBack="true"
      :backGroundColor="'#333'"
      :titleColor="'#fff'"
    ></Header>
    <div class="main-container">
      <div class="store-info">
        <div class="base-info">
          <div
            class="store-img"
            :style="{ 'background-image': 'url(' + storeInfo.pic_url + ')' }"
          ></div>
          <div class="info-text">
            <div class="prices">
              <span class="start-price">{{ storeInfo.min_price_tip }}</span>
              <span class="delivery-price">{{
                storeInfo.shipping_fee_tip
              }}</span>
              <span class="delivery-time">{{
                storeInfo.delivery_time_tip
              }}</span>
            </div>
            <div class="notice">
              <span class="iconfont notice-icon">&#xe60a;</span>
              <div class="notice-text">#{{ storeInfo.bulletin }}</div>
            </div>
          </div>
        </div>
        <div class="activities">
          <span class="iconfont activity-icon">&#xe645;</span>
          <span class="activity-text">{{ discounts[0].info }}</span>
          <span class="more-activity">{{ discounts.length }}个活动</span>
        </div>
      </div>
      <div class="nav-bar">
        <span
          class="order-item"
          :class="{ active: activeNavId === 0 }"
          @click="
            () => {
              $router.replace({
                path: '/store/items',
                query: { storeId: storeId },
              })
              activeNavId = 0
            }
          "
          >点菜</span
        >
        <span
          class="comments"
          :class="{ active: activeNavId === 1 }"
          @click="
            () => {
              $router.replace({
                path: '/store/comments',
                query: { storeId: storeId },
              })
              activeNavId = 1
            }
          "
          >评价</span
        >
        <span
          class="store-introduce"
          :class="{ active: activeNavId === 2 }"
          @click="
            () => {
              $router.replace({
                path: '/store/introduction',
                query: { storeId: storeId },
              })
              activeNavId = 2
            }
          "
          >商家</span
        >
      </div>
      <router-view v-slot="{ Component }"
        ><keep-alive> <component :is="Component" /> </keep-alive
      ></router-view>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue"

import { ref, reactive, onMounted } from "vue"
import { getStore } from "@/js/api/stores"
import { computed } from "@vue/reactivity"

const urlParams = new URLSearchParams(window.location.search)

const storeId = urlParams.get("storeId")

const storeInfo = ref({
  name: "",
  min_price_tip: "",
  shipping_fee_tip: "",
  delivery_time_tip: "",
  bulletin: "",
  pic_url: "",
})
const discounts = computed(() => {
  return storeInfo.value.discounts2
    ? storeInfo.value.discounts2
    : [{ info: "" }]
})

getStore({ id: storeId }).then((res) => {
  storeInfo.value = res.data.data
  console.log(res.data.data)
})

const storeImgUrl = ref(
  new URL("../assets/images/alice.jpg", import.meta.url).href
)

const activeNavId = ref(0)
</script>

<style scoped>
.store-info {
  background-color: #333;
  color: #fff;
}

.base-info {
  display: flex;
  padding: 0.2rem 0;
  border-bottom: 1px solid #fff;
}

.base-info .store-img {
  width: 40px;
  height: 40px;
  margin: 0 0.2rem;
  background-size: contain;
  background-repeat: no-repeat;
}

.base-info .info-text {
  font-size: 14px;
}

.base-info .info-text .prices > * {
  padding: 0 5px;
}

.base-info .info-text .prices .start-price {
  padding-left: 0;
}

.base-info .info-text .prices .delivery-price {
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
}

.base-info .info-text .notice {
  display: flex;
  margin-top: 3px;
  text-overflow: ellipsis;
}

.notice-text {
  width: 12rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.activities {
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 0.2rem;
}

.activities .activity-icon {
  font-size: 14px;
  margin-right: 0.2rem;
  color: #c387e3;
}
.activities .activity-text {
  flex: 1;
}

.nav-bar {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  margin-bottom: 0.2rem;
}

.nav-bar > span {
  padding: 0.4rem 0;
}

.nav-bar > span.active {
  color: pink;
  border-bottom: 3px solid pink;
}
</style>
