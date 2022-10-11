<template>
  <div id="bottom">
    <router-link to="/home">
      <span
        class="bottom-icon"
        :class="{ 'active-icon': activeIconIndex === 0 }"
      >
        <span class="iconfont">&#xe650;</span>
        <p>首页</p>
      </span>
    </router-link>
    <router-link to="/order">
      <span
        class="bottom-icon"
        :class="{ 'active-icon': activeIconIndex === 1 }"
      >
        <span class="iconfont">&#xe654;</span>
        <p>订单</p>
      </span>
    </router-link>
    <router-link to="/profile">
      <span
        class="bottom-icon"
        :class="{ 'active-icon': activeIconIndex === 2 }"
      >
        <span class="iconfont">&#xe652;</span>
        <p>我的</p>
      </span>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  activeIconIndex: {
    type: Number,
    default: 0,
  },
})
</script>

<style scoped>
#bottom {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  background-color: #fefefe;
  border-top: 1px solid #999;
}

#bottom .bottom-icon {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
}

#bottom .bottom-icon .iconfont {
  font-size: 30px;
}

#bottom .bottom-icon p {
  font-size: 10px;
  margin: 0;
  padding: 0;
}

#bottom .active-icon {
  color: pink;
}
</style>
