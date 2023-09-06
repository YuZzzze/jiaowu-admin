<template>
  <div class="flex h-screen">
    <!-- 侧边栏 -->
    <el-aside width="250px">
      <!-- 侧边栏内容 -->
      <div class="flex flex-col h-full">
        <!-- Logo -->
        <div class="py-4 px-6 text-2xl font-semibold border-r">My Admin</div>
        <!-- 导航菜单 -->
        <el-menu class="flex-1 h-full overflow-y-auto" :default-active="defaultActive" router>
          <el-menu-item index="dashboard">仪表盘 </el-menu-item>
          <el-menu-item index="commodity">二手书管理 </el-menu-item>
        </el-menu>
      </div>
    </el-aside>

    <!-- 内容区域 -->
    <div class="flex-1 overflow-y-auto">
      <!-- 头部 -->
      <el-header class="border">
        <!-- 头部内容 -->

        <!-- 用户信息和操作 -->
        <div>aaa</div>
      </el-header>

      <!-- 页面主体内容 -->
      <el-main class="p-4">
        <!-- 页面内容 -->
        <router-view></router-view>
      </el-main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 默认选中的菜单项
const defaultActive = ref('dashboard');

// 路由实例
const router = useRouter();

// 展开/折叠侧边栏
const collapseSidebar = () => {
  // 实现侧边栏的展开/折叠逻辑
};

// 切换侧边栏展开/折叠状态
const toggleSidebar = () => {
  // 实现切换侧边栏展开/折叠状态的逻辑
};
</script>

<style scoped>
/* 在这里不需要添加额外的样式 */
</style>
