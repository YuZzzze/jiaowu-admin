<template>
  <div class="flex h-screen">
    <el-container>
      <el-header class="bg-gray-900 text-white flex items-center" height="48px">
        <div class="text-lg font-semibold">厂里教务后台</div>
      </el-header>
      <el-container>
        <el-aside width="220px">
          <!-- 导航菜单 -->
          <el-menu class="h-full shadow-lg" style="border: none" :default-active="defaultActive" router>
            <div class="w-full flex flex-col gap-2">
              <el-menu-item index="/dashboard" style="height: 45px">仪表盘 </el-menu-item>
              <el-menu-item index="/commodity">二手书管理 </el-menu-item>
            </div>
          </el-menu>
        </el-aside>
        <!-- 内容区域 -->
        <div class="flex flex-col flex-1 flex-grow overflow-y-auto bg-gray-100">
          <!-- 页面主体内容 -->
          <el-main class="flex-grow">
            <!-- 页面内容 -->
            <router-view></router-view>
          </el-main>
        </div>
      </el-container>
    </el-container>
    <!-- 侧边栏 -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// 路由实例
const router = useRouter();

const route = useRoute();
console.log(route);

// 默认选中的菜单项
const defaultActive = ref(route.path);

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
.el-menu-item {
  height: 45px;
}
.el-menu-item.is-active {
  background-color: rgb(230, 247, 255) !important;
  border-right: 3px solid rgb(24, 144, 255);
}
</style>
