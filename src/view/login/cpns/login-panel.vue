<template>
  <div class="login-panel">
    <h1>Login</h1>
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
      <el-tab-pane label="Sign In" name="first">
        <LoginIn ref="loginInRef" />
      </el-tab-pane>
      <el-tab-pane label="Sign Up" name="second">用户注册</el-tab-pane>
    </el-tabs>

    <el-button class="login-btn" type="primary" @click="handleLogin"
      >登陆</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { TabsPaneContext } from 'element-plus/es/tokens/tabs'
import { ref } from 'vue'
import LoginIn from './login-in.vue'

const activeName = ref('first')
const loginInRef = ref<InstanceType<typeof LoginIn>>()

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const handleLogin = () => {
  loginInRef.value?.loginAction()
}
</script>

<style lang="less" scoped>
.login-panel {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  width: 350px;
  h1 {
    text-align: center;
  }

  .login-btn {
    width: 100%;
  }
}
</style>
