<template>
  <div id="nav">
    <div id="top-bar">
      <span class="location-bar">
        <span class="iconfont">&#xe658;</span>
        <span class="address">浙江理工大学</span>
        <span class="iconfont">&#xe653;</span>
      </span>
      <span class="search-bar">
        <span class="iconfont">&#xe65a;</span>
        <span class="notice">请输入商家/商品名</span>
      </span>
    </div>
    <ul id="category-list">
      <li
        class="category-item"
        v-for="(item, index) in categoryList"
        :key="index"
      >
        <svg class="iconfont" aria-hidden="true">
          <use :xlink:href="item.url"></use>
        </svg>
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from "vue"

const categoryList = reactive([
  {
    name: "美食",
    url: "#icon-yinshi",
    type: "food",
  },
  {
    name: "超市",
    url: "#icon-baihuochaoshi",
    type: "supermarket",
  },
  {
    name: "生鲜果蔬",
    url: "#icon-luobu",
    type: "fruit",
  },
  {
    name: "下午茶",
    url: "#icon-tubiaozhizuomoban",
    type: "tea",
  },
  {
    name: "正餐优选",
    url: "#icon-tuijian",
    type: "dinner",
  },
  {
    name: "汉堡披萨",
    url: "#icon-hanbaobao",
    type: "pizza",
  },
  {
    name: "跑腿代购",
    url: "#icon-diandongche",
    type: "buyOnSomebody",
  },
  {
    name: "炸鸡美食",
    url: "#icon-jitui",
    type: "chicken",
  },
])
</script>

<style scoped>
#nav {
  width: 100%;
}
#nav #top-bar {
  display: flex;
  justify-content: space-between;
  height: 1.2rem;
  margin: 0.2rem auto;
  width: 100%;
}

#nav #top-bar .location-bar {
  display: flex;
  align-items: center;
  height: 100%;
  color: #fff;
  background-color: #00000066;
  border-radius: 0.6rem;
  margin: 0 0.2rem;
  max-width: 50%;
}

#nav #top-bar .search-bar {
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  color: #666;
  background-color: #eaeaea;
  border-radius: 0.6rem;
  margin: 0 0.2rem;
}

#nav #top-bar .location-bar .iconfont,
#nav #top-bar .search-bar .iconfont {
  margin: 0 0.2rem;
}

#nav #top-bar .address,
#nav #top-bar .notice {
  height: 100%;
  line-height: 1.2rem;
  font-size: 14px;
}

#nav #top-bar .address {
  text-overflow: ellipsis;
  max-width: 70%;
  overflow: hidden;
  white-space: nowrap;
}

#nav #category-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#nav #category-list .category-item {
  text-align: center;
  width: 25%;
  margin: 0.2rem auto;
}

#nav #category-list .category-item .iconfont {
  width: 2rem;
  height: 2rem;
}

#nav #category-list .category-item p {
  font-size: 14px;
}
</style>
