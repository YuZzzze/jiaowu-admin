<template>
  <div class="flex w-full justify-between">
    <div class="w-3/4">
      <el-input v-model="input3" placeholder="Please input">
        <template #prepend>
          <el-select v-model="select" placeholder="Select" style="width: 115px">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
        </template>
        <template #append>
          <el-button>搜索</el-button>
        </template>
      </el-input>
    </div>

    <el-button type="primary">新增商品</el-button>
  </div>
</template>

<script setup></script>
