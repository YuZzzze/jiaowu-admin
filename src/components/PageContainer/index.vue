<template>
  <div class="h-full flex flex-col flex-1">
    <!-- 页面标题 -->
    <h1 class="text-2xl font-semibold mb-4">{{ pageTitle }}</h1>
    <div class="bg-white p-4 rounded shadow-md flex-grow">
      <!-- 操作按钮 -->
      <div class="flex justify-between items-center mb-4">
        <slot name="actions"></slot>
      </div>

      <!-- 主要内容 -->
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  pageTitle: String
});
</script>
