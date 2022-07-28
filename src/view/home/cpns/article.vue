<template>
  <div class="article">
    <div class="article-desc">
      <div class="tags">和马老师</div>
      <div class="tags">2天前</div>
      <div class="tags">程序员</div>
    </div>
    <div class="title ellipsis">2022身份转变的上半年2022身份转变的上半年2022身份转变的上半年2022身份转变的上半年2022身份转变的上半年</div>
    <div class="content ellipsis-2">踩着7月的尾巴，爬上来，写下这篇总结，上半年的经历 历历在目，有太多太多想说，尤其是在身份上，有了重大的转变。我老婆和我两个人度过了孕期和月子历历在目，有太多太多想说，尤其是在身份上，有了重大的转变。我老婆和我两个人度过了孕期和月子</div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue-demi";

  const isActive = ref(1)
</script>

<style lang="less" scoped>
  .article {
    padding: 24px 0;
    border-bottom: 1px solid #eaeaea;
    .article-desc {
      display: flex;
      .tags {
        font-size: 13px;
        color: #4e5969;
        padding: 0 12px;
        border-right: 1px solid #999;
        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          border-right: none;
        }
      }
    }
    .title {
      width: 50%;
      margin: 8px 0;
      color: #1d2129;
      font-size: 16px;
      font-weight: 700;
    }

    .content {
      color: #86909c;
      font-size: 13px;
      line-height: 22px;
      height: 44px;
    }
  }
</style>
