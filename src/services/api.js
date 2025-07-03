import request from '../utils/request';

// 用户相关接口
export const userApi = {
  login: (data) => request.post('/auth/login', data),
  register: (data) => request.post('/auth/register', data),
  getUserInfo: () => request.get('/user/info'),
  updateUserInfo: (data) => request.put('/user/info', data),
};

// 其他业务接口
export const businessApi = {
  getList: (params) => request.get('/business/list', { params }),
  getDetail: (id) => request.get(`/business/detail/${id}`),
  create: (data) => request.post('/business/create', data),
  update: (id, data) => request.put(`/business/update/${id}`, data),
  delete: (id) => request.delete(`/business/delete/${id}`),
};