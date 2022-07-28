<template>
  <div class="navbar">
    <div @click="isActive = 1" class="navbar-item" :class="{ 'active': isActive === 1 }">推荐</div>
    <div @click="isActive = 2" class="navbar-item" :class="{ 'active': isActive === 2 }">最新</div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue-demi";

  const isActive = ref(1)
</script>

<style lang="less" scoped>
  .navbar {
    border-radius: 4px 4px 0 0;
    background: #fff;
    padding: 15px 12px;
    border-bottom: 1px solid #eaeaea;
    .navbar-item {
      display: inline-block;
      font-size: 13px;
      padding: 0 12px;
      border-right: 1px solid #999;

      &:hover {
        cursor: pointer;
      }

      &.active {
        color: #007fff;
      }
    }
  }
</style>
