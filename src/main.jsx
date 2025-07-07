import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import MenuPage from './pages/MenuPage.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
    </HashRouter>
  </React.StrictMode>
);
