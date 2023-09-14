<template>
  <div class="flex w-full justify-between">
    <div class="w-3/4">
      <el-input v-model="search" @keyup.enter="handleSearch" placeholder="请输入...">
        <template #prepend>
          <el-select v-model="select" placeholder="Select" style="width: 115px">
            <el-option label="学院" value="name" />
            <el-option label="年级" value="level" />
            <el-option label="专业" value="master" />
          </el-select>
        </template>
        <template #append>
          <el-button @click="handleSearch">搜索</el-button>
        </template>
      </el-input>
    </div>

    <router-link to="/commodity/create">
      <el-button type="primary">新增商品</el-button>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCommodityStore } from '@/stores/commodity.js';

const search = ref('');
const select = ref('name');
const { setSearchOptions } = useCommodityStore();

const handleSearch = () => {
  setSearchOptions({
    search,
    select
  });
};
</script>
