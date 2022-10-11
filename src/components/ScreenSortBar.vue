<template>
  <div id="screen-sort-bar">
    <ul class="sort-screen-list">
      <li
        class="sort-basis-btn"
        v-for="(item, index) in sortBasisList"
        :key="index"
      >
        {{ item.name }}
      </li>
      <li class="screen-btn" v-if="useScreen">筛选</li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  sortBasisList: {
    type: Array,
    default: [
      {
        name: "",
        method: () => {},
      },
    ],
  },
  useScreen: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped>
#screen-sort-bar .sort-screen-list {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.8rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

#screen-sort-bar .sort-screen-list li {
  flex: 1;
  font-size: 14px;
  text-align: center;
  height: 100%;
  line-height: 1.8rem;
}
</style>
