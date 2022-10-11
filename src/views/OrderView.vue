<template>
  <div id="order-view">
    <Header :title="'订单'"></Header>
    <div class="main-container">
      <div class="order-list" v-if="orderInfos.length > 0">
        <OrderItem
          v-for="(item, index) in orderInfos"
          :orderInfo="item"
          :key="index"
        ></OrderItem>
      </div>
    </div>
    <Bottom :activeIconIndex="1"></Bottom>
  </div>
</template>

<script setup>
import Bottom from "@/components/Bottom.vue"
import Header from "@/components/Header.vue"
import OrderItem from "@/components/OrderItem.vue"
import { ref } from "vue"
import { orders, orderInfo } from "@/js/api/order"

const orderInfos = ref([])
orders().then((res) => {
  console.log(res.data.data)
  const orders = []
  res.data.data.forEach((order) => {
    const price = order.total_price.toFixed(2)
    orders.push({
      id: order.id,
      items: order.foods,
      storeName: order.restaurant.name,
      storeId: order.restaurant_id,
      storePic: order.restaurant.pic_url,
      price,
      status: order.status,
    })
  })
  orderInfos.value = orders
})

//orderInfo({ order_id: 1021 }).then((res) => console.log(res))
</script>

<style scoped>
#order-view {
  display: flex;
  flex-direction: column;
}
.main-container {
  flex: 1;
  background-color: #f2f2f2;
  padding-bottom: 2.4rem;
}
</style>
