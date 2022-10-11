<template>
  <div id="submit-order-view">
    <Header :title="'提交订单'" :showBack="true"></Header>
    <div class="main-container">
      <div class="add-adress">
        <span class="iconfont add-icon">&#xe601;</span>
        <span class="text">新增收货地址</span>
      </div>
      <div class="arrival-time">
        <span class="iconfont time-icon">&#xe671;</span>
        <span class="text">送达时间</span>
        <span class="text time-text">11:45分到达</span>
      </div>
      <AmountStoreItemList :showCheckIcon="false" :itemImgSize="55">
        <template #addtional-items>
          <li class="addtional-fee">
            <span class="fee-name">包装费</span>
            <span class="fee-price">￥0</span>
          </li>
          <li class="addtional-fee delivery-fee">
            <span class="fee-name">配送费</span>
            <span class="fee-price">￥0</span>
          </li>
        </template>
        <template #additional-price>
          <span class="additional-discount">已优惠￥0</span>
        </template>
      </AmountStoreItemList>
    </div>
    <div class="submit-bottom">
      <div class="discount">已优惠￥0</div>
      <span class="price">￥114514</span>
      <button class="amount-btn">提交订单</button>
    </div>
  </div>
</template>

<script setup>
import AmountStoreItemList from "@/components/AmountStoreItemList.vue"
import Header from "@/components/Header.vue"
</script>

<style scoped>
.main-container {
  padding-bottom: 40px;
}

.add-adress,
.arrival-time {
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-bottom: 1px solid #ccc;
}

.add-adress {
  color: pink;
}

.add-adress .text,
.arrival-time .text {
  font-size: 14px;
  padding: 0.2rem;
}

.arrival-time .time-text {
  color: skyblue;
}

.addtional-fee {
  display: flex;
  justify-content: space-between;
  margin: 0.4rem;
  font-size: 14px;
}

.additional-discount {
  font-size: 16px;
}

.submit-bottom {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 18px;
  background-color: #f0f0f0;
}

.submit-bottom .discount {
  font-size: 14px;
  margin-left: 0.4rem;
  margin-right: auto;
}

.submit-bottom .price {
  color: #ff3366;
}

.submit-bottom .amount-btn {
  width: 100px;
  height: 30px;
  margin: 0 0.4rem;
  background-color: pink;
  border: none;
}
</style>
