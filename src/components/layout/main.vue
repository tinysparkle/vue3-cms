<script setup lang="ts">

</script>

<template>
  <div class="main-body">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .main-body {
    margin-top: 84px;
    padding: 12px 200px 0 200px;
    background: #ddd;
    .content {
      min-height: 100vh;
    }
  }
</style>
