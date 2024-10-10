import React from "react";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Layout from "./pages/Layout";
import TotalSales from "./components/TotalSales";
import AllProductsPage from './pages/AllProductsPage';
import AllSalesPage from './pages/AllSalesPage';
import CategoriesPage from './pages/CategoriesPage';
import './index.css';


function App() {
  return (
    <div className='main_container'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
        <Route path="/error" element={<Layout />}>
          <Route index element={<NotFoundPage/>} />
        </Route>
        <Route path="/products" element={<Layout />}>
          <Route index element={<AllProductsPage />} />
        </Route>
        <Route path="/sales" element={<Layout />}>
          <Route index element={<AllSalesPage />} />
        </Route>
        <Route path="/categories" element={<Layout />}>
          <Route index element={<CategoriesPage />} />
        </Route>
      </Routes>
      <TotalSales/>
    </div>
  );
}

export default App;
