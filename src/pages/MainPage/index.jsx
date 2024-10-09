import React from "react";
import Banner from "../../components/MainBanner";
import Categories from "../../components/Categories";
import DiscountForm from "../../components/DiscountForm";
import BannerSales from "../../components/BannerSales";

const MainPage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <DiscountForm />
      <BannerSales />
    </div>
  );
};

export default MainPage;
