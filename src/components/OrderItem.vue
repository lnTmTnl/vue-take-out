<template>
  <div id="order-item">
    <div class="title-bar">
      <div
        class="img-container"
        :style="{
          'background-image': 'url(' + orderInfo.storePic + ')',
        }"
      ></div>
      <span class="title">{{ orderInfo.storeName }}</span>
      <span class="iconfont">&#xe653;</span>
      <span class="order-state">{{ orderInfo.status }}</span>
    </div>
    <ul class="purchase-item-list">
      <li v-for="item in orderInfo.items">
        <span class="name">{{ item.name }}</span>
        <span class="count">x{{ item.num }}</span>
      </li>
    </ul>
    <div class="amount-bar">
      共{{ orderInfo.items.length }}件商品, 实付 ￥ {{ orderInfo.price }}
    </div>
    <div class="btn-bar">
      <button class="reorder-btn">再来一单</button>
      <button class="review-btn">评价</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  orderInfo: {
    type: Object,
    default: {
      id: -1,
      items: [],
      storeName: "",
      storeId: -1,
      storePic: "",
      price: 0,
      status: "",
    },
  },
})

const backgroundUrl = ref(
  new URL("../assets/images/alice.jpg", import.meta.url).href
)
</script>

<style scoped>
#order-item {
  margin-top: 10px;
  padding: 10px 0;
  background-color: #fff;
}
.title-bar {
  display: flex;
  align-items: center;
}

.title-bar .title {
  font-size: 16px;
  font-weight: bold;
}

.title-bar .img-container {
  width: 1.6rem;
  height: 1.6rem;
  margin: 0 0.4rem;
  background-size: cover;
  border-radius: 50%;
}

.title-bar .iconfont {
  margin-left: 0.8rem;
}

.title-bar .order-state {
  font-size: 14px;
  color: #666;
  margin-left: auto;
  margin-right: 0.2rem;
}

.purchase-item-list {
  display: flex;
  flex-direction: column;
  padding-bottom: 0.4rem;
  margin-top: 0.2rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.purchase-item-list li {
  display: flex;
  font-size: 14px;
  color: #666;
  margin-top: 0.4rem;
}

.purchase-item-list li .name {
  flex: 1;
  margin-left: 2rem;
}

.purchase-item-list li .count {
  margin-right: 0.8rem;
}

.amount-bar {
  font-size: 12px;
  margin: 0.2rem 0;
  margin-right: 0.2rem;
  text-align: right;
}

.btn-bar {
  display: flex;
  justify-content: end;
}

.btn-bar button {
  width: 3.4rem;
  height: 1.4rem;
  margin-right: 0.2rem;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 0;
}

.btn-bar .reorder-btn {
  background-color: #fff;
}
.btn-bar .review-btn {
  background-color: pink;
}
</style>
