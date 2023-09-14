import request from './request';
import { ElMessage } from 'element-plus';

export const fetchCommodityList = async (params) => {
  const { start, limit, options } = params;
  const result = await request.post(`/commodity/selectCommodityByKind/${start}/${limit}`, options);

  return result.data;
};

export const createCommodity = async (params) => {
  const result = await request.post('/commodity/insertCommodity', params);
  if (result.code === 20000) {
    ElMessage({
      message: '新增成功！',
      type: 'success'
    });
    return;
  }
  ElMessage({
    message: '新增失败！',
    type: 'error'
  });
};
