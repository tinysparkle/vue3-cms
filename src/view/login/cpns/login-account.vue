<template>
  <el-form
    ref="modelRef"
    :model="model"
    :rules="rules"
    label-width="80px"
    hide-required-asterisk
  >
    <el-form-item label="User" prop="user">
      <el-input v-model="model.user" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="model.password" show-password />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref } from 'vue'
import { rules } from '../config/login-config'
import { ElForm } from 'element-plus'
import LocalStorage from '@/utils/cache'
import { useStore } from 'vuex'

const store = useStore()

const model = reactive({
  user: LocalStorage.getCache('name') ?? '',
  password: LocalStorage.getCache('password') ?? '',
})

const modelRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isKeepPsw: boolean, tabName: string) => {
  modelRef.value?.validate((valid) => {
    if (valid) {
      // 是否记住账号密码
      if (isKeepPsw) {
        LocalStorage.setCache('name', model.user)
        localStorage.setItem('password', model.password)
      } else {
        LocalStorage.deleteCache('name')
        LocalStorage.deleteCache('password')
      }

      // 登录操作
      if (tabName === 'first') {
        store.dispatch('login/accountLoginAction', { ...model })
      } else {
        console.log(111)
      }
    }
  })
}
defineExpose({
  loginAction,
})
</script>

<style scoped></style>
