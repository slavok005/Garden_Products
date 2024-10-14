import React from 'react'
// import Sales from '../../components/Sales'
import Banner from '../../components/MainBanner'
import Categories from '../../components/Categories'
import DiscountForm from '../../components/DiscountForm'
import NavigationBranch from '../../components/NavigationBranch';
import BannerSales from '../../components/BannerSales';
import SingleProductCard from '../../components/SingleProductCard';

const MainPage = () => {
  return (
    <div>
          {/* <NavigationBranch /> */}
          <Banner />
          <Categories />
          <SingleProductCard/>
          <DiscountForm/>
          <BannerSales/>
    </div>
  )
}                             

export default MainPage