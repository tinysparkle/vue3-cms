<script setup lang="ts">
  import { IRootState } from "@/store/types"
import { ref } from "vue-demi"
  import { useStore } from 'vuex'

  let isActivied = ref<number>(1)

  const tabClick = (index: number) => {
    isActivied.value = index
  }

  const store = useStore<IRootState>()
  const isLogin = store.state.islogin
  const username = store.state.username
</script>

<template>
  <div class="nav-header">
    <div class="nav-header-login">
      <div class="login-in" v-if="isLogin">welcome, {{ username }}</div>
      <div class="login-in" v-else>login</div>
    </div>
    <div class="nav-header-navbar">
      <div class="content">
        <div class="nav-item">*</div>
        <div @click="tabClick(1)" class="nav-item" :class="{ 'activied': isActivied === 1 }">首页</div>
        <div @click="tabClick(2)" class="nav-item" :class="{ 'activied': isActivied === 2 }">文章</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .nav-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    .nav-header-login {
      padding: 0 200px;
      height: 40px;
      background: #444;
      text-align: right;
      .login-in {
        height: 100%;
        line-height: 40px;
        color: #f5f5f7;
        opacity: 0.8;
      }
    }
    .nav-header-navbar {
      height: 44px;
      background: #000;
      .content {
        padding: 0 200px;
        display: flex;
        .nav-item {
          height: 44px;
          line-height: 44px;
          padding: 0 15px;
          color: #f5f5f7;
          font-size: 13px;
          opacity: 0.8;
          &:hover {
            cursor: pointer;
          }
          &.activied {
            opacity: 1;
          }
        }
      }
    }
  }
</style>
