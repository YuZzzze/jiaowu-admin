import axios from 'axios';
import { ElMessage } from 'element-plus';

const instance = axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? 'http://119.23.244.10:10001' : 'https://mock.apifox.cn/m1/2452451-0-default',
  baseURL: 'http://159.75.186.40:11000',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    if (!config.headers.notoken) {
      const token = JSON.parse(localStorage.getItem('token'));
      config.headers.token = token.value;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    ElMessage({
      message: error.message,
      type: 'error'
    });
    console.error(error.message);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    console.error(error.message);
    return Promise.reject(error);
  }
);

export default instance;
