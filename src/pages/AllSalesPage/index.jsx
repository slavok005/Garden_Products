import React from 'react'
import NavigationBranch from '../../components/NavigationBranch';
import AllSales from '../../components/AllSales';
import s from './index.module.scss'

const AllSalesPage = () => {
  return (
    <div>
      <NavigationBranch />
      <AllSales />
    </div>
  )
}

export default AllSalesPage