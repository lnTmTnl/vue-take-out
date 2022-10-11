<template>
  <div id="store-items-view">
    <div class="main-container">
      <el-scrollbar class="sider-scroll">
        <div class="tab-sider">
          <div class="tab tab-active" v-for="category in menu">
            {{ category.name }}
          </div>
        </div>
      </el-scrollbar>

      <el-scrollbar class="item-list">
        <div class="list-part" v-for="category in menu">
          <div class="part-title">
            {{ category.name }}
            <StoreMenuItem
              v-for="item in category.spus"
              :item="item"
              @numberChanged="changeOrder"
            ></StoreMenuItem>
          </div>
        </div>
      </el-scrollbar>
    </div>

    <div class="bottom">
      <span
        class="iconfont cart-icon"
        :class="{ 'cart-icon-active': orders.length !== 0 }"
      >
        &#xe651;
        <span class="count"></span>
      </span>
      <div class="prices">
        <span class="price">￥{{ amountPrice }}</span>
        <span class="delivery-fee">免配送费</span>
      </div>
      <el-button
        class="amount-btn"
        :disabled="orders.length === 0"
        @click="submit"
        >去结算</el-button
      >
    </div>
  </div>
</template>

<script setup>
import StoreMenuItem from "../components/StoreMenuItem.vue"
import { ref, inject } from "vue"
import { getMenu } from "@/js/api/stores"
import { submitOrder } from "@/js/api/order"
import { computed } from "@vue/reactivity"
import { getAllAddress } from "@/js/api/address"

const urlParams = new URLSearchParams(window.location.search)

const cartItems = inject("cartItems")

const storeId = urlParams.get("storeId")
const menu = ref([])
getMenu({ id: storeId }).then((res) => {
  menu.value = res.data.data
  //console.log(res.data.data)
})

const orders = ref([])
function changeOrder(item, num) {
  //更新订单
  const orderItemIndex = orders.value.findIndex((target) => {
    return target.id === item.id
  })
  if (orderItemIndex === -1) {
    item.num = num.value
    orders.value.push(item)
  } else {
    orders.value[orderItemIndex].num = num.value
  }
  if (orderItemIndex !== -1 && orders.value[orderItemIndex].num === 0) {
    orders.value.splice(orderItemIndex, 1)
  }

  //更新购物车
  const cartIndex = cartItems.value.findIndex((target) => {
    return target.storeId === storeId
  })
  if (cartIndex === -1) {
    cartItems.value.push({
      storeId,
      items: orders.value,
    })
  } else {
    cartItems.value[cartIndex].items = orders.value
  }
  if (cartIndex !== -1 && cartItems.value[cartIndex].items.length === 0) {
    cartItems.value.splice(cartIndex, 1)
  }
}

const amountPrice = computed(() => {
  return orders.value
    .reduce((pre, current) => {
      return pre + current.price * current.num
    }, 0)
    .toFixed(2)
})

function submit() {
  const foods = []
  orders.value.forEach((item) => {
    foods.push({ skus_id: item.id, num: item.num })
  })
  getAllAddress()
    .then((res) => res.data.address[0].id)
    .then((res) => {
      return submitOrder({
        restaurant_id: storeId,
        foods,
        address_id: res,
      })
    })
    .then((res) => console.log(res))
}
</script>

<style scoped>
.list-part .part-title {
  font-size: 16px;
  font-weight: bold;
  padding: 0.2rem 0;
}

.item-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 18.4rem;
  margin-left: 20px;
}

#store-items-view {
  height: 100%;
}
.main-container {
  display: flex;
  height: 100%;
  margin-top: 0;
}

.sider-scroll {
  height: 18.4rem;
}

.tab-sider .tab {
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 2.6rem;
  min-height: 2rem;
  padding-left: 5px;
  border-bottom: 1px solid #ccc;
  background-color: #f2f2f2;
}

.tab-sider .tab-active {
  background-color: #fff;
}

.bottom {
  position: fixed;
  z-index: 999;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 1.8rem;
  background-color: #333;
}

.bottom .cart-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  font-size: 45px;
  margin-left: 0.8rem;
  border-radius: 50%;
  background-color: #f2f2f2;
}

.bottom .prices {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-bottom: 5px;
  color: #fff;
}

.bottom .prices .price {
  font-size: 20px;
}

.bottom .prices .delivery-fee {
  font-size: 12px;
}

.bottom .amount-btn {
  height: 100%;
  font-size: 14px;
  border-radius: 0;
}

.cart-icon-active {
  background-color: coral !important;
  color: #f2f2f2;
}
</style>
