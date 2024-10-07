import React from "react";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/MainBanner";
import Sales from "./components/DiscountForm/index";
import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import DiscountForm from "./components/DiscountForm/index";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      
      <Categories />
      <DiscountForm/>
      <Footer />
      <NotFoundPage />
    </div>
  );
}

export default App;
