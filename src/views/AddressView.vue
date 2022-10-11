<template>
  <div id="address-view">
    <Header :title="'我的地址'" :showBack="true"></Header>
    <div class="main-container">
      <div class="top-bar">
        <span class="info-text">我的收货地址</span>
        <span class="edit-btn" @click="isEditing = !isEditing">编辑</span>
      </div>
      <div class="address-list" v-if="addressInfos.length > 0">
        <div class="address-item" v-for="item in addressInfos">
          <div class="address-info">
            <div class="address-text">{{ item.address }}</div>
            <div class="user-info">
              <span class="user-name">{{ item.name }}</span>
              <span class="user-gender">{{ item.gender }}</span>
              <span class="user-phone">{{ item.phone }}</span>
            </div>
          </div>
          <div class="btn-icons" v-show="isEditing">
            <span class="iconfont delete-icon">&#xe621;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue"
import { ref } from "vue"
import { getAllAddress, addAddress } from "@/js/api/address"

//{ name, phone, address, gender, lng, lat }

const addressInfos = ref([])

getAllAddress().then((res) => {
  /*res.data.address.forEach(item => {
    addressInfos.value.put(item)
  });*/
  //console.log(res.data.address)
  addressInfos.value = res.data.address
})

const isEditing = ref(false)

/*addAddress({
  name: "cxk",
  phone: 1145141919810893,
  address: "下北泽",
  gender: "先生",
  lng: 120,
  lat: 30,
}).then((res) => console.log(res))*/
</script>

<style scoped>
.main-container {
  background-color: #f4f4f4;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 0.4rem 0.2rem;
  background-color: #fff;
}

.top-bar .info-text {
  color: #999;
}

.address-list {
  display: flex;
  flex-direction: column;
}

.address-item {
  display: flex;
  margin-top: 0.4rem;
  padding-top: 0.2rem;
  padding-left: 0.2rem;
  border-bottom: 5px solid #e8fefe;
  background-color: #fff;
}

.address-item .address-info {
  flex: 7;
  display: flex;
  flex-direction: column;
}

.address-item .address-info .address-text {
  font-size: 14px;
  font-weight: bold;
  padding: 0.2rem 0;
}

.address-item .address-info .user-info {
  display: flex;
  font-size: 12px;
  padding: 0.2rem 0;
}

.address-item .address-info .user-info .user-gender {
  margin: 0 0.4rem;
}

.address-item .btn-icons {
  flex: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 0.2rem;
}

.delete-icon {
  font-size: 28px;
}
</style>
