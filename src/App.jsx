// src/App.jsx

import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import Layout from "./pages/Layout";
import AllProductsPage from "./pages/AllProductsPage";
import AllSalesPage from "./pages/AllSalesPage";
import CategoriesPage from "./pages/CategoriesPage";
import CartPage from "./pages/CartPage";
import FavoritePage from "./pages/FavoritePage";
import SingleProductPage from "./pages/SingleProductPage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import { fetchData } from './api';
import "./index.css";

function App() {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Вызов API при загрузке компонента
    const getData = async () => {
      try {
        const data = await fetchData("https://gardenshopback-erpo.onrender.com"); 
        setData(data);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className={`main_container ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
  
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Загрузка..."}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/products/:product_id" element={<SingleProductPage />} />
          <Route path="/sales" element={<AllSalesPage />} />
          <Route path="/categories/" element={<CategoriesPage />} />
          <Route path="/categories/:id" element={<ProductsByCategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
