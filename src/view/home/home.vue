<template>
  <div class="home-page">
    <div class="content">
      <Navbar />
      <div class="article-list">
        <Article />
        <Article />
      </div>
    </div>
    <div class="recommend-list">
      <Recommend />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Recommend from './cpns/recommend.vue'
  import Navbar from './cpns/navbar.vue'
  import Article from './cpns/article.vue'

</script>

<style lang="less" scoped>
  .home-page {
    display: flex;
    .content {
      width: 75%;
      margin-right: 12px;
      .article-list {
        padding: 0 24px;
        background: #fff;
      }
    }
    .recommend-list {
      width: 25%;
    }
  }
</style>
