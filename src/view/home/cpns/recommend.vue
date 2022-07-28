<template>
  <div class="box">
    <div class="left">
      <el-icon :size="20">
        <Calendar />
      </el-icon>
    </div>
    <div class="right">
      <h3>{{ showText }}</h3>
      点亮你的每一天~
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue-demi"

  const now = Date.now()
  const hour = new Date(now).getHours()

  const showText = computed(() => {
    if (hour >= 0 && hour <= 12) {
      return '上午好！'
    } else {
      return '下午好！'
    }
  })
</script>

<style lang="less" scoped>
  .box {
    display: flex;
    padding: 16px;
    background: #fff;
    border-radius: 4px;
    .left {
      margin-right: 12px;
    }
    .right {
      h3 {
        margin: 0;
        margin-bottom: 8px;
      }
    }
  }
</style>
