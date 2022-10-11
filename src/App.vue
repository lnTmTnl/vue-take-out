<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component
        :is="Component"
        :key="$route.name"
        v-if="$route.meta.keepAlive"
      />
    </keep-alive>
    <component
      :is="Component"
      :key="$route.name"
      v-if="!$route.meta.keepAlive"
    />
  </router-view>
</template>

<script setup>
import { ref, provide } from "vue"
import { setCookie, getCookie } from "@/js/function/cookies"
import "./assets/icons/iconfont"

//获取用户登录状态
const currentUser = ref({
  userid: getCookie("userid"),
  username: getCookie("username"),
})
const reloadUser = () => {
  currentUser.value.userid = getCookie("userid")
  currentUser.value.userid = getCookie("username")
}

provide("currentUser", currentUser)
provide("reloadUser", reloadUser)

const cartItems = ref([])
provide("cartItems", cartItems)
</script>

<style>
@import url("./css/normalize.css");
@import url("./css/common.css");
@import url("./assets/icons/iconfont.css");
</style>
