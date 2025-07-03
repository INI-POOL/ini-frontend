import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
// import './i18n';

import './App.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
