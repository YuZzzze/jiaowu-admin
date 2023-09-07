<template>
  <div class="min-h-screen flex items-center justify-center">
    <el-card class="w-96">
      <h2 class="text-2xl font-semibold mb-6">后台管理系统登录</h2>
      <el-form :model="loginForm" label-width="0" @submit.native.prevent="login">
        <el-form-item class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">用户名</label>
          <el-input v-model="loginForm.account" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">密码</label>
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="mb-4">
          <el-button type="primary" class="w-full" round @click="onLogin"> 登录 </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../../api/user';

const loginForm = ref({
  account: '',
  password: ''
});

const router = useRouter();

const onLogin = async () => {
  const result = await login(loginForm.value);
  if (!!result) {
    localStorage.setItem('token', result);
    router.replace('/');
  }
};
</script>
