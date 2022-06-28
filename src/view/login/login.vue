<template>
  <div class="login-page">
    <LoginPanel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'
export default defineComponent({
  components: {
    LoginPanel,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
