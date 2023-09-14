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
      <el-table-column prop="actions" label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="toggleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
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
    <el-dialog v-model="deleteDialogVisible" title="提示" width="30%" center>
      <span>确定要删除该商品吗 </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="deleteDialogVisible = false">取消</el-button>
          <el-button type="danger" @click="handleDelete(currentId)"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </PageContainer>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import PageContainer from '@/components/PageContainer';
import TableActions from './components/TableActions.vue';
import { useCommodityStore } from '@/stores/commodity.js';
import { fetchCommodityList, deleteCommodity } from '../../api/commodity';

const tableData = ref([]);
const currentPage = ref(1);
const pageSize = ref(15);
const total = ref(0);
const loading = ref(false);
const deleteDialogVisible = ref(false);
const commodityStore = useCommodityStore();
const currentId = ref('');

// 监听搜索
watch(
  () => commodityStore.shouldRefresh,
  (cur, pre) => {
    if (commodityStore.shouldRefresh) {
      console.log(commodityStore.searchOptions, 111);
      getCommodityList();
      commodityStore.changeShouldRefresh(false);
      console.log(commodityStore.searchOptions, 222);
    }
  }
);

const getCommodityList = async () => {
  const options = {};
  options[commodityStore.searchOptions.select] = commodityStore.searchOptions.search;

  try {
    loading.value = true;
    const data = await fetchCommodityList({ start: currentPage.value, limit: pageSize.value, options });
    tableData.value = data;
    total.value = data.total;
  } finally {
    loading.value = false;
  }
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

const toggleDelete = (scope) => {
  deleteDialogVisible.value = true;
  currentId.value = scope.row.id;
};

const handleDelete = async (id) => {
  const result = await deleteCommodity({ id });
  if (result) {
    getCommodityList();
  }
  deleteDialogVisible = false;
};

onMounted(() => {
  getCommodityList();
});
</script>
