import React from 'react'
// import s from '/index.module.scss'
import NavigationBranch from '../../components/NavigationBranch';
import Products from '../../components/AllProducts';

const AllProductsPage = () => {
  return (
    <div>
      <NavigationBranch />
      <Products />
    </div>
  )
}

export default AllProductsPage