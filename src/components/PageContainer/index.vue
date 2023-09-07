<template>
  <div class="bg-white p-4 rounded shadow-md h-full">
    <!-- 页面标题 -->
    <h2 class="text-2xl font-semibold mb-4">{{ pageTitle }}</h2>

    <!-- 操作按钮 -->
    <div class="flex justify-between items-center mb-4">
      <slot name="actions"></slot>
    </div>

    <!-- 主要内容 -->
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  pageTitle: String
});
</script>

<style scoped>
/* 在这里可以添加自定义样式 */
</style>
