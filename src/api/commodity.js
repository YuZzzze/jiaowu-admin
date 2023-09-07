import request from './request';

export const fetchCommodityList = async (params) => {
  const { start, limit, options } = params;
  const result = await request.post(`/commodity/selectCommodityByKind/${start}/${limit}`, options);

  return result.data;
};
