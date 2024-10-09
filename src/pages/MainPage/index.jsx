import React from 'react'
// import Sales from '../../components/Sales'
import Banner from '../../components/MainBanner'
import Categories from '../../components/Categories'
import DiscountForm from '../../components/DiscountForm'
import NavigationBranch from '../../components/NavigationBranch';

const MainPage = () => {
  return (
    <div>
          {/* <NavigationBranch /> */}
          <Banner />
          <Categories />
          <DiscountForm/>
      {/* <Sales/> */}
    </div>
  )
}

export default MainPage