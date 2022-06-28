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
      <el-input v-model="model.password" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref } from 'vue'
import { rules } from '../config/login-config'
import { ElForm } from 'element-plus'

const model = reactive({
  user: '',
  password: '',
})

const modelRef = ref<InstanceType<typeof ElForm>>()

const loginAction = () => {
  modelRef.value?.validate((valid) => {
    if (!valid) return
  })
}
defineExpose({
  loginAction,
})
</script>

<style scoped></style>
