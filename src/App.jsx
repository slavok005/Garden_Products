import React from "react";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/MainBanner";
import Sales from "./components/DiscountForm/index";
import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import DiscountForm from "./components/DiscountForm/index";
import MainPage from "./pages/MainPage";
import Layout from "./pages/Layout";

import TotalSales from "./components/TotalSales";

import AllProductsPage from './pages/AllProductsPage';
import AllSalesPage from './pages/AllSalesPage';
import CategoriesPage from './pages/CategoriesPage';



function App() {
  return (
    <div className="main_container">
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
