import React from "react";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Layout from "./pages/Layout";
import AllProductsPage from "./pages/AllProductsPage";
import AllSalesPage from "./pages/AllSalesPage";
import CategoriesPage from "./pages/CategoriesPage";
import "./index.css";
import CartPage from "./pages/CartPage";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <div className="main_container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/error" element={<NotFoundPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/sales" element={<AllSalesPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
