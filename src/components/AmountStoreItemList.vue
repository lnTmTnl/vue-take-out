<template>
  <div id="amount-store-item-list">
    <div class="title-bar">
      <span
        class="store-check-icon check-icon iconfont"
        :class="{ 'check-active': allChecked }"
        v-if="showCheckIcon"
        @click="onAllChecked"
        >&#xe63b;</span
      >
      <span
        class="store-img"
        :style="{
          'background-image': 'url(' + storePic + ')',
        }"
      ></span>
      <span class="title">{{ storeName }}</span>
    </div>
    <ul class="item-list">
      <li class="cart-item" v-for="(item, index) in store.items" :key="index">
        <span
          class="item-check-icon check-icon iconfont"
          :class="{
            'check-active': checkedItems.find(
              (target) => target.id === item.id
            ),
          }"
          v-if="showCheckIcon"
          @click="onItemChecked(item)"
          >&#xe63b;</span
        >
        <span
          class="item-img-container"
          :style="{ width: itemImgSize + 'px', height: itemImgSize + 'px' }"
        >
          <img :src="item.picUrl" alt="" class="item-img" />
        </span>
        <span class="item-info">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-amount">
            <span class="item-count">x{{ item.num }}</span>
            <span class="price">￥{{ item.price.toFixed(2) }}</span>
          </div>
        </span>
      </li>
      <slot name="addtional-items"></slot>
    </ul>
    <div class="amount-bar">
      <slot name="additional-price"></slot>
      <span class="price">￥{{ amountPrice }}</span>
      <button
        class="amount-btn"
        @click="$router.push({ path: '/cart/submit' })"
        v-if="showCheckIcon"
      >
        去结算
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue"
import { getStore } from "@/js/api/stores"

const backgroundUrl = ref(
  new URL("../assets/images/alice.jpg", import.meta.url).href
)

const props = defineProps({
  store: {
    type: Object,
    default: {
      storeId: -1,
      items: [],
    },
  },
  showCheckIcon: { type: Boolean, default: true },
  itemImgSize: { type: Number, default: 80 },
})
const emit = defineEmits(["amountPriceChanged"])

const storeName = ref("")
const storePic = ref("")
getStore({ id: props.store.storeId }).then((res) => {
  storeName.value = res.data.data.name
  storePic.value = res.data.data.pic_url
  //console.log(res.data.data)
})

const checkedItems = ref([])

const allChecked = computed(() => {
  return checkedItems.value.length === props.store.items.length
})

const amountPrice = computed(() => {
  return checkedItems.value
    .reduce((pre, current) => {
      return current.price * current.num + pre
    }, 0)
    .toFixed(2)
})

function onItemChecked(item) {
  const checkedIndex = checkedItems.value.findIndex((target) => {
    return target.id === item.id
  })
  if (checkedIndex === -1) {
    checkedItems.value.push(item)
  } else {
    checkedItems.value.splice(checkedIndex, 1)
  }
  //console.log(checkedItems.value)
}

function onAllChecked() {
  if (!allChecked.value) {
    checkedItems.value.splice(
      0,
      checkedItems.value.length,
      ...props.store.items
    )
  } else {
    checkedItems.value.splice(0, checkedItems.value.length)
  }
  //console.log(checkedItems.value)
}

watch(amountPrice, (currentPrice) => {
  emit("amountPriceChanged", {
    storeId: props.store.storeId,
    amountPrice: parseFloat(currentPrice),
  })
})
</script>

<style scoped>
#amount-store-item-list {
  padding: 0.4rem 0;
  border-bottom: 1px solid #ccc;
}

.check-icon {
  font-size: 20px;
  color: #ccc;
}

.check-icon.check-active {
  color: #000;
}

.title-bar {
  display: flex;
  align-items: center;
  width: 100%;
}

.title-bar .store-check-icon {
  margin: 0 0.2rem;
}

.title-bar .store-img {
  width: 20px;
  height: 20px;
  margin: 0 0.2rem;
  background-size: cover;
}

.title-bar .title {
  margin: 0 0.2rem;
  font-size: 14px;
}

.item-list {
  display: flex;
  flex-direction: column;
}

.item-list .cart-item {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  background-color: #f2f2f2;
}

.item-list .cart-item .item-check-icon {
  margin: 0 0.4rem;
}

.item-list .item-img-container {
  margin-left: 0.2rem;
}

.item-list .item-img-container .item-img {
  width: 100%;
  height: 100%;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: 0.4rem;
}

.item-info .item-name {
  font-size: 14px;
  font-weight: bold;
  margin-top: 0.2rem;
}

.item-info .item-amount {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
}

.amount-bar {
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 0.8rem;
}

.amount-bar .price {
  font-size: 18px;
  color: #c8595c;
  margin-right: 0.4rem;
}

.amount-bar .amount-btn {
  width: 95px;
  height: 35px;
  font-size: 18px;
  margin-right: 0.2rem;
  background-color: pink;
  border: 1px solid #ccc;
}
</style>
