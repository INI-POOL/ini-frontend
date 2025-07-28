import request from '../utils/request';

// 用户相关接口
export const userApi = {
  login: (data) => request.post('/auth/login', data),
  register: (data) => request.post('/auth/register', data),
  getUserInfo: () => request.get('/user/info'),
  updateUserInfo: (data) => request.put('/user/info', data),
};

// 测试接口: 获取矿池统计
// URL: GET http://localhost:8080/api/v1/pool/stats
// 矿池业务接口
export const poolApi = {
  getPoolStats: (params) => request.get('/pool/stats', { params }),// 获取矿池统计
  getPerReward: (params) => request.get('/pool/reward-history', { params }),// 每M收益
  getBlockReward: (params) => request.get('/pool/recent-blocks', { params }),// 获取奖励历史
  getMinersHashrate: (walletAddress) => request.get(`/miners/${walletAddress}/info`),// 获取详情
  getMinersMachine: (walletAddress) => request.get(`/miners/${walletAddress}/machines`),// 获取详情
  getMinersReward: (walletAddress) => request.get(`/miners/${walletAddress}/rewards`),// 获取详情
  // create: (data) => request.post('/business/create', data),
  // update: (id, data) => request.put(`/business/update/${id}`, data),
  // delete: (id) => request.delete(`/business/delete/${id}`),
};