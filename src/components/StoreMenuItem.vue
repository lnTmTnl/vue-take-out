<template>
  <div class="item">
    <el-image class="item-img" :src="item.pic_url" :fit="'cover'" />
    <div class="item-info">
      <div class="item-name">{{ item.name }}</div>
      <div class="sales">月售 {{ item.month_saled }}</div>
      <div class="price">￥{{ item.skus[0].price }}</div>
    </div>
    <el-input-number
      class="item-count"
      v-model="num"
      :min="0"
      :max="10"
      @change="onNumberChange"
    />
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({ item: { type: Object } })
const emit = defineEmits(["numberChanged"])

const itemImgUrl = ref(
  new URL("../assets/images/alice.jpg", import.meta.url).href
)

const num = ref(0)
const onNumberChange = (currentValue, oldValue) => {
  const itemPrice = parseFloat(props.item.skus[0].price)
  const changedItem = {
    id: props.item.skus[0].id,
    price: itemPrice,
    name: props.item.name,
    picUrl: props.item.pic_url,
  }
  emit("numberChanged", changedItem, num)
}
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  height: 2.8rem;
  padding: 0.2rem 0;
}

.item .item-img {
  width: 2.4rem;
  height: 2.4rem;
}
.item .item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 12px;
  height: 100%;
  margin-left: 0.4rem;
}

.item .item-info .price {
  font-size: 14px;
  font-weight: bold;
  color: #ff0000;
}

.item .item-count {
  width: 3.2rem;
  margin-right: 0.4rem;
}
</style>
