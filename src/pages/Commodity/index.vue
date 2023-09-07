<template>
  <PageContainer pageTitle="二手书管理">
    <template #actions>
      <TableActions />
    </template>
    <el-table :data="tableData.records" :border="true" stripe show-overflow-tooltip="true">
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="originalCost" label="原价(元)" />
      <el-table-column prop="currentCost" label="现价(元)" />
      <el-table-column prop="writer" label="版本" />
    </el-table>
    <el-pagination
      class="py-3"
      background
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total"
      :hide-on-single-page="true"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"></el-pagination>
  </PageContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PageContainer from '@/components/PageContainer';
import TableActions from './components/TableActions.vue';
import { fetchCommodityList } from '../../api/commodity';

const tableData = ref([]);
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);

const getCommodityList = async () => {
  const data = await fetchCommodityList({ start: currentPage.value, limit: pageSize.value, options: {} });
  tableData.value = data;
  total.value = data.total;
};

// 处理页码变化
const handleCurrentChange = (newPage) => {
  currentPage.value = newPage;
  getCommodityList();
};

// 处理每页显示条目数变化
const handleSizeChange = (newSize) => {
  pageSize.value = newSize;
  getCommodityList();
};

onMounted(() => {
  getCommodityList();
});
</script>
