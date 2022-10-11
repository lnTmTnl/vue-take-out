<template>
  <div id="home-view">
    <div class="home-main-view">
      <Header :title="'主页'"></Header>
      <div id="main-container" class="main-container">
        <Nav></Nav>
        <div class="nearby-bar">— 附近商家 —</div>
        <ScreenSortBar :sortBasisList="sortStoresBasis"></ScreenSortBar>
        <div
          v-infinite-scroll="loadStores"
          :infinite-scroll-disabled="infiniteScrollDisabled"
          class="store-list"
        >
          <StoreItem
            v-for="(item, index) in storeDatas"
            :key="index"
            :storeData="item"
          ></StoreItem>
        </div>
      </div>
      <router-link to="/cart">
        <span class="iconfont cart-icon">&#xe651;</span>
      </router-link>
      <Bottom :activeIconIndex="0"></Bottom>
    </div>
  </div>
</template>

<script setup>
import Bottom from "@/components/Bottom.vue"
import Header from "@/components/Header.vue"
import Nav from "@/components/Nav.vue"
import ScreenSortBar from "@/components/ScreenSortBar.vue"
import StoreItem from "@/components/StoreItem.vue"

import { onMounted, ref, reactive, inject } from "vue"
import { getStores } from "../js/api/stores"

const currentUser = inject("currentUser")

//获取商家列表
const eachLoadLimit = 10
const storesReqData = {
  offset: 0,
  limit: eachLoadLimit,
  lng: 120,
  lat: 6,
}

const storeDatas = ref([])
const infiniteScrollDisabled = ref(true)

const loadStores = async () => {
  infiniteScrollDisabled.value = true
  await getStores(storesReqData).then((res) => {
    storeDatas.value.push(...res.data.data)
    storesReqData.offset += eachLoadLimit
    infiniteScrollDisabled.value = false
  })
}

onMounted(loadStores)

//排序
const sortStoresBasis = ref([
  {
    name: "综合排序",
    method: () => {},
  },
  {
    name: "销量最高",
    method: () => {},
  },
  {
    name: "距离最近",
    method: () => {},
  },
])
</script>

<style scoped>
.home-main-view {
  position: relative;
  justify-content: space-between;
}

#main-container {
  padding-bottom: 2rem;
}

#main-container .nearby-bar {
  height: 1.6rem;
  line-height: 1.6rem;
  font-size: 18px;
  text-align: center;
}

.cart-icon {
  position: fixed;
  right: 0;
  bottom: 4rem;
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  background-color: #fff;
}
</style>
