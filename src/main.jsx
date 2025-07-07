import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MenuPage from './pages/MenuPage.jsx'; // 👈 your menu page
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
import { Toaster } from 'react-hot-toast';

<React.StrictMode>
  <App />
  <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
</React.StrictMode>
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/menu" element={<MenuPage />} /> {/* 👈 route for menu */}
    </Routes>
  </BrowserRouter>
);