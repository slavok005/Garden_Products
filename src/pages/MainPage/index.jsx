import React from "react";
import Banner from "../../components/MainBanner";
import Categories from "../../components/Categories";
import DiscountForm from "../../components/DiscountForm";
import BannerSales from "../../components/BannerSales";
import React from 'react'
// import Sales from '../../components/Sales'
import Banner from '../../components/MainBanner'
import Categories from '../../components/Categories'
import DiscountForm from '../../components/DiscountForm'
import NavigationBranch from '../../components/NavigationBranch';

const MainPage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <DiscountForm />
      <BannerSales />
          {/* <NavigationBranch /> */}
          <Banner />
          <Categories />
          <DiscountForm/>
          

    </div>
  );
};

export default MainPage;
