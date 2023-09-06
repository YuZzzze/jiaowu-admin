<template>
	<div class="min-h-screen flex items-center justify-center">
		<div class="bg-white p-8 rounded-lg shadow-md w-96">
			<h2 class="text-2xl font-semibold mb-6">后台管理系统登录</h2>
			<form @submit.prevent="login">
				<div class="mb-4">
					<label
						class="block text-gray-700 text-sm font-bold mb-2"
						for="username"
					>
						用户名
					</label>
					<input
						v-model="loginForm.username"
						type="text"
						id="username"
						name="username"
						class="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
						placeholder="请输入用户名"
					/>
				</div>
				<div class="mb-4">
					<label
						class="block text-gray-700 text-sm font-bold mb-2"
						for="password"
					>
						密码
					</label>
					<input
						v-model="loginForm.password"
						type="password"
						id="password"
						name="password"
						class="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
						placeholder="请输入密码"
					/>
				</div>
				<div class="mb-4">
					<button
						type="submit"
						class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
					>
						登录
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const loginForm = ref({
	username: '',
	password: ''
});

const login = () => {
	// 这里可以添加登录逻辑，例如发送请求到后端
	// 如果登录成功，可以跳转到后台管理页面
	console.log('登录成功');
};
</script>
