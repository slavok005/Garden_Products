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
function App() {
  return (
    <div className="main_container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
      <TotalSales/>
    </div>
  );
}

export default App;
