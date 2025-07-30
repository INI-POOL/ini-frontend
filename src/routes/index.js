import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home/Home';
import Mining from '../pages/Mining/Mining';
import NotFound from '../pages/NotFound'; // ✅ 引入 404 页面组件

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/mining/:walletAddress',
        element: <Mining />
      },
      // {
      //   path: '*', // ✅ 匹配所有未定义的子路径
      //   element: <NotFound />,
      //   // ✅ 设置状态标识 Layout 识别用
      //   handle: { is404: true } // 或者用 location.state 传
      // }
    ]
  },
  {
    path: '*', // ✅ 匹配 Layout 外的其他路径
    element: <NotFound />,
    // ✅ 设置状态标识 Layout 识别用
    handle: { is404: true } // 或者用 location.state 传
  }
]);