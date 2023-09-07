import request from './request';

export const login = async (params) => {
  const result = await request.post('/user/managerLogin', params);
  return result.data;
};
