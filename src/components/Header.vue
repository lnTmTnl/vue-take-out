<template>
  <div id="header" :style="{ 'background-color': backGroundColor }">
    <span
      class="back iconfont"
      v-if="showBack"
      @click="$router.back()"
      :style="{ color: titleColor }"
      >&#xe64e;</span
    >
    <span class="title" :style="{ color: titleColor }">
      {{ title }}
    </span>
    <span class="other"><slot></slot></span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  showBack: { type: Boolean, default: false },
  //backToPath: { type: String, default: "/" },
  backGroundColor: { type: String, default: "#fff" },
  titleColor: { type: String, default: "#000" },
})
</script>

<style scoped>
#header {
  display: flex;
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
}

#header a {
  height: 100%;
}

#header .title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  flex: 1;
}

#header .back {
  position: absolute;
  font-size: 24px;
  left: 0;
  width: 40px;
  height: 100%;
  line-height: 40px;
}

#header .other {
  position: absolute;
  right: 0;
  height: 100%;
}
</style>
