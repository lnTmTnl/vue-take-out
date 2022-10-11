<template>
  <div id="cart-view">
    <Header :title="'购物车'" :showBack="true"
      ><span class="edit-btn">编辑</span></Header
    >
    <div class="main-container">
      <AmountStoreItemList
        v-for="item in cartItems"
        :store="item"
        @amountPriceChanged="calculatePrice"
      ></AmountStoreItemList>
    </div>
    <div class="cart-bottom">
      <span class="price">￥{{ amountPrice }}</span>
      <button class="amount-btn">全部结算</button>
    </div>
  </div>
</template>

<script setup>
import AmountStoreItemList from "@/components/AmountStoreItemList.vue"
import Header from "@/components/Header.vue"
import { computed, inject, ref } from "vue"

const cartItems = inject("cartItems")

const checkedPrices = ref([])

const amountPrice = computed(() => {
  return checkedPrices.value.reduce((pre, current) => {
    return pre + current.amountPrice
  }, 0)
})

function calculatePrice(storePrice) {
  //console.log(storePrice)
  const priceIndex = checkedPrices.value.findIndex((target) => {
    return target.storeId === storePrice.storeId
  })
  if (priceIndex === -1) {
    checkedPrices.value.push(storePrice)
  } else {
    checkedPrices.value.splice(priceIndex, 1, storePrice)
  }
}

//console.log(cartItems.value)
</script>

<style scoped>
.edit-btn {
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 100%;
  padding: 0 0.4rem;
}

.main-container {
  padding-bottom: 2.4rem;
}

.cart-bottom {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 18px;
  background-color: #f0f0f0;
}

.cart-bottom .price {
  color: #ff3366;
}

.cart-bottom .amount-btn {
  width: 100px;
  height: 40px;
  margin: 0 0.4rem;
  background-color: pink;
  border: none;
}
</style>
