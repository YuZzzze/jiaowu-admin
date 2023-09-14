<template>
  <PageContainer pageTitle="新增商品">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="p-4 mr-20" label-width="auto" status-icon>
      <el-form-item label="商品名：" prop="name">
        <el-input class="w-10" v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="学院：" prop="master">
        <el-input v-model="ruleForm.master" />
      </el-form-item>
      <el-form-item label="专业：" prop="kindName">
        <el-input v-model="ruleForm.kindName" />
      </el-form-item>
      <el-form-item label="年级：" prop="level">
        <el-input v-model="ruleForm.level" />
      </el-form-item>
      <el-form-item label="作者/版本/出版社：" prop="writer">
        <el-input v-model="ruleForm.writer" />
      </el-form-item>
      <el-form-item label="原价：" prop="originalCost">
        <el-input v-model="ruleForm.originalCost" />
      </el-form-item>
      <el-form-item label="现价：" prop="currentCost">
        <el-input v-model="ruleForm.currentCost" />
      </el-form-item>
      <el-form-item label="库存：" prop="stock">
        <el-input v-model="ruleForm.stock" />
      </el-form-item>
      <el-form-item label="ISBN：" prop="ISBN">
        <el-input v-model="ruleForm.ISBN" />
      </el-form-item>
      <el-form-item label="商品描述：" prop="details">
        <el-input v-model="ruleForm.details" type="textarea" rows="4" />
      </el-form-item>
      <el-form-item class="ml-20 mt-10">
        <el-button type="primary" @click="submitForm(ruleFormRef)"> 提交 </el-button>
        <el-button @click="resetForm(ruleFormRef)"> 重置 </el-button>
      </el-form-item>
    </el-form>
  </PageContainer>
</template>

<script setup>
import PageContainer from '@/components/PageContainer';
import { ref } from 'vue';
import { createCommodity } from '@/api/commodity.js';

const ruleFormRef = ref();
const ruleForm = ref({
  name: '',
  master: '',
  kindName: '',
  level: '',
  writer: '',
  originalCost: null,
  currentCost: null,
  stock: null,
  details: '',
  ISBN: ''
});

const rules = ref({
  name: [{ required: true, message: '请输入商品名', trigger: 'blur' }],
  master: [
    {
      required: true,
      message: '请输入学院',
      trigger: 'blur'
    }
  ],
  kindName: [
    {
      required: true,
      message: '请输入专业：',
      trigger: 'blur'
    }
  ],
  level: [
    {
      required: true,
      message: '请输入年级',
      trigger: 'blur'
    }
  ],
  writer: [
    {
      required: true,
      message: '请输入作者/版本/出版社',
      trigger: 'blur'
    }
  ],
  originalCost: [
    {
      required: true,
      message: '请输入原价',
      trigger: 'blur'
    }
  ],
  currentCost: [
    {
      required: true,
      message: '请输入现价',
      trigger: 'blur'
    }
  ],
  stock: [
    {
      required: true,
      message: '请输入库存',
      trigger: 'blur'
    }
  ],
  ISBN: [
    {
      required: true,
      message: 'ISBN',
      trigger: 'blur'
    }
  ],
  details: [{ required: true, message: '请输入商品描述', trigger: 'blur' }]
});

const handleSubmit = async (params) => {
  const result = await createCommodity(params);
};

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      handleSubmit(ruleForm.value);
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
