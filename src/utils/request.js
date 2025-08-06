import axios from 'axios';

// const baseURL = process.env.REACT_APP_API_URL || 'http://106.15.102.142:8080/api/v1';
// const baseURL = process.env.REACT_APP_API_URL || 'https://www.inipool.com/api/v1';
const baseURL = process.env.REACT_APP_API_URL || 'https://www.inipool.com/api/v1';
const request = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权错误
          break;
        case 404:
          // 处理未找到错误
          break;
        default:
          // 处理其他错误
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default request;