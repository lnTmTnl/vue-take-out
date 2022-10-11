<template>
  <div id="login-view">
    <Header :title="'登录'" :showBack="true"></Header>
    <div class="main-container">
      <el-input-number
        class="input-number"
        v-model="userNumber"
        placeholder="请输入手机号"
        :controls="false"
      ></el-input-number>
      <el-input
        class="input-password"
        v-model="userPassword"
        placeholder="请输入密码"
        show-password
      ></el-input>
      <el-button type="primary" size="large" @click="userLogin">登录</el-button>
      <div class="alert-bar" :style="{ color: alertColor }">
        {{ alertText }}
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue"

import { ref, inject } from "vue"
import { login } from "@/js/api/user"
import { useRouter } from "vue-router"
import { setCookie, getCookie } from "@/js/function/cookies"

const userNumber = ref()
const userPassword = ref()
const alertText = ref("")
const alertColor = ref("#ff0000")
const router = useRouter()

const reloadUser = inject("reloadUser")

const userLogin = () => {
  if (userNumber.value === undefined || userPassword.value === undefined) {
    alertText.value = "账号和密码不能为空"
    return
  }
  login({
    username: userNumber.value.toString(),
    password: userPassword.value,
  })
    .then((res) => {
      console.log(res.data)
      alertText.value = res.data.message || res.data.success
      alertColor.value = res.data.success ? "#00ff00" : "#ff0000"
      setCookie("userid", res.data.user_id)
      setCookie("username", res.data.username)
      reloadUser()
      router.go(-1)
    })
    .catch((err) => (alertText.value = err.message))
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
}

.input-number,
.input-password {
  width: 11.2rem;
  margin-bottom: 0.6rem;
}

:deep(.el-input__wrapper) {
  padding: 0 15px;
  height: 1.2rem;
}

:deep(.el-input__inner) {
  text-align: left;
  font-size: 14px;
}

:deep(.el-button) {
  width: 11.2rem;
}

.alert-bar {
  font-size: 16px;
  margin-top: 0.4rem;
}
</style>
