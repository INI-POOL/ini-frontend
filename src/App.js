import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Toaster } from '@/components/ui/toaster' // 路径按你项目实际路径调整
// import './i18n';

import './App.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
