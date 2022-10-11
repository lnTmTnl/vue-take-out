<template>
  <div id="stars">
    <div class="white-stars">
      <span
        class="star white-star iconfont"
        :style="{ 'font-size': starSize + 'px' }"
        v-for="i in 5"
        :key="i"
        >&#xe876;</span
      >
      <div class="filled-stars">
        <span
          class="star filled-star iconfont"
          :style="{ 'font-size': starSize + 'px' }"
          v-for="i in parseInt(starPoint)"
          :key="i"
          >&#xe876;</span
        >
        <span
          class="star half-star iconfont"
          :style="{ 'font-size': starSize + 'px', left: -starSize / 4 + 'px' }"
          v-if="starPoint % parseInt(starPoint) >= 0.5"
          >&#xe80d;</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  starPoint: {
    type: Number,
    default: 3.5,
  },
  starSize: {
    type: Number,
    default: 12,
  },
})
</script>

<style scoped>
.white-stars {
  display: flex;
  position: relative;
}

.white-star {
  color: #ccc;
}

.filled-stars {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
}

.filled-star,
.half-star {
  color: pink;
}

.half-star {
  position: relative;
}
</style>
