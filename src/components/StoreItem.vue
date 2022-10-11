<template>
  <div id="store-item">
    <router-link
      :to="{
        path: currentUser.userid ? '/store' : '/login',
        query: { storeId: storeId },
      }"
      ><div class="main-container">
        <div class="img-container">
          <img class="store-img" :src="storeImgUrl" alt="" />
        </div>
        <div class="store-info-container">
          <div class="store-name">{{ storeName }}</div>
          <div class="brief-situation-bar">
            <el-rate class="stars" v-model="storeScore" disabled size="small" />
            <span class="sales">{{ monthSalesTip }}</span>
            <span class="distance">{{ deliveryTimeTip }}/{{ distance }}</span>
          </div>
          <div class="approximate-prices">
            <span class="starting-price">{{ minPriceTip }}</span>
            <span class="delivery-fee">{{ shippingFeeTip }}</span>
            <span class="average-price">{{ averagePriceTip }}</span>
          </div>
          <div class="discount" v-for="(item, index) in discounts" :key="index">
            <img class="discount-icon" :src="item.icon_url" alt="" />
            {{ item.info }}
          </div>
        </div>
      </div></router-link
    >
  </div>
</template>

<script setup>
import Stars from "@/components/Stars.vue"
import { ref, inject } from "vue"

const currentUser = inject("currentUser")

const props = defineProps({
  storeData: {
    type: Object,
    default: {
      id: 0,
      name: "鸡你太美",
      month_sales_tip: "月售114514笔",
      wm_poi_score: 5,
      delivery_time_tip: "11.4分钟",
      distance: "51.4km",
      min_price_tip: "起送￥11",
      shipping_fee_tip: "配送￥4",
      average_price_tip: "人均￥51",
      discounts2: [],
      pic_url: "",
    },
  },
})

const storeId = ref(props.storeData.id)
const storeName = ref(props.storeData.name)
const monthSalesTip = ref(props.storeData.month_sales_tip)
const storeScore = ref(props.storeData.wm_poi_score)
const deliveryTimeTip = ref(props.storeData.delivery_time_tip)
const distance = ref(props.storeData.distance)
const minPriceTip = ref(props.storeData.min_price_tip)
const shippingFeeTip = ref(props.storeData.shipping_fee_tip)
const averagePriceTip = ref(props.storeData.average_price_tip)
const discounts = ref(props.storeData.discounts2)
const storeImgUrl = ref(props.storeData.pic_url)
</script>

<style scoped>
.main-container {
  display: flex;
  width: 100%;
  margin-top: 0;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

.main-container .store-img {
  width: 100%;
}

.img-container {
  flex: 1;
  margin: 0 0.2rem;
}

.store-info-container {
  flex: 3;
  display: flex;
  flex-direction: column;
}

.store-info-container .store-name {
  font-size: 16px;
  font-weight: bold;
}

.store-info-container .brief-situation-bar {
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
}

.brief-situation-bar > .sales,
.brief-situation-bar > .distance {
  font-size: 12px;
  margin-left: 0.4rem;
}

.brief-situation-bar > .distance {
  flex: 1;
  text-align: right;
  margin-right: 5px;
}

.approximate-prices {
  font-size: 12px;
  display: flex;
  margin-bottom: 5px;
}

.approximate-prices > span {
  padding-right: 0.2rem;
}

.approximate-prices .delivery-fee {
  border-left: 1px solid #999;
  border-right: 1px solid #999;
}

.discount {
  font-size: 13px;
  display: flex;
  margin-bottom: 0.2rem;
}

.discount > .discount-icon {
  width: 0.6rem;
  height: 0.6rem;
  font-size: 18px;
  margin-right: 0.2rem;
}

.el-rate {
  --el-rate-icon-margin: 0;
}
</style>
