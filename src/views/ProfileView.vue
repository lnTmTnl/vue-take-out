<template>
  <div id="profile-view">
    <Header :title="'我的'"></Header>
    <div class="main-container">
      <div class="profile-info">
        <span
          class="portrait"
          :style="{
            'background-image': 'url(' + portraitUrl + ')',
          }"
        ></span>
        <span class="name">{{ currentUser.username }}</span>
        <el-button type="danger" class="logout-btn" @click="logout"
          >退出登录</el-button
        >
      </div>
      <div class="profile-item-bar item-list">
        <span
          class="profile-item item"
          v-for="(item, index) in profileItemList"
          :key="index"
          @click="$router.push(item.path)"
        >
          <span class="iconfont item-icon">{{ item.icon }}</span>
          <p class="item-name">{{ item.itemName }}</p>
        </span>
      </div>
      <div class="assets-bar">
        <div class="title">我的资产</div>
        <div class="asset-item-list item-list">
          <span
            class="asset-item item"
            v-for="(item, index) in assetItemList"
            :key="index"
          >
            <span class="iconfont item-icon">{{ item.icon }}</span>
            <p class="item-name">{{ item.itemName }}</p>
          </span>
        </div>
      </div>
      <div class="recommandation-bar">
        <div class="title">更多推荐</div>
        <div class="recommandation-item-list item-list">
          <span
            class="recommandation-item item"
            v-for="(item, index) in recommandationItemList"
            :key="index"
          >
            <span class="iconfont item-icon">{{ item.icon }}</span>
            <p class="item-name">{{ item.itemName }}</p>
          </span>
        </div>
      </div>
    </div>
    <Bottom :activeIconIndex="2"></Bottom>
  </div>
</template>

<script setup>
import Bottom from "@/components/Bottom.vue"
import Header from "@/components/Header.vue"

import { ref, reactive, inject } from "vue"
import { setCookie, getCookie } from "@/js/function/cookies"

const currentUser = inject("currentUser")
const reloadUser = inject("reloadUser")

const props = defineProps({
  currentUsername: { type: String, default: "" },
})

function logout() {
  setCookie("userid", "")
  setCookie("username", "")
  reloadUser()
}

const portraitUrl = ref(
  new URL("../assets/images/alice.jpg", import.meta.url).href
)

const profileItemList = reactive([
  {
    itemName: "收藏",
    icon: "\ue8c6",
    path: "",
  },
  {
    itemName: "足迹",
    icon: "\ue671",
    path: "",
  },
  {
    itemName: "评价",
    icon: "\ue618",
    path: "",
  },
  {
    itemName: "好友",
    icon: "\ue629",
    path: "",
  },
  {
    itemName: "答谢",
    icon: "\ue612",
    path: "",
  },
  {
    itemName: "地址",
    icon: "\ue61a",
    path: "/address",
  },
])

const assetItemList = reactive([
  {
    itemName: "红包",
    icon: "\ue66c",
  },
  {
    itemName: "代金券",
    icon: "\ue614",
  },
  {
    itemName: "钱包",
    icon: "\ue829",
  },
  {
    itemName: "余额",
    icon: "\ue619",
  },
])

const recommandationItemList = reactive([
  {
    itemName: "邀请有奖",
    icon: "\ue6c0",
  },
  {
    itemName: "商家入驻",
    icon: "\ue634",
  },
  {
    itemName: "帮助与反馈",
    icon: "\ue61b",
  },
  {
    itemName: "在线客服",
    icon: "\ue68b",
  },
])
</script>

<style scoped>
.main-container {
  background-color: #f2f2f2;
  margin-bottom: 2.4rem;
}

.profile-info {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 0.8rem 0;
  background-color: #fff;
}

.profile-info .portrait {
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 1.2rem;
  background-size: cover;
  border: 1px solid #333;
  border-radius: 50%;
}

.profile-info .name {
  font-size: 18px;
}

.profile-info .logout-btn {
  margin: 0 1.2rem;
}

.item-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 15px;
  background-color: #fff;
}

.item-list .item {
  width: 25%;
  padding: 0.4rem 0;
  text-align: center;
}

.assets-bar {
  background-color: #fff;
  margin-bottom: 15px;
}

.recommandation-bar {
  background-color: #fff;
  margin-bottom: 15px;
}

.assets-bar .title,
.recommandation-bar .title {
  font-size: 18px;
  margin-left: 0.4rem;
  padding: 0.2rem 0;
  border-bottom: 1px solid #ccc;
}

.item-icon {
  font-size: 30px;
}

.item-name {
  margin-top: 10px;
  font-size: 14px;
}
</style>
