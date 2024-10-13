import React from "react";
// import s from './index.module.scss' // Проверьте правильность пути к файлу стилей
import NavigationBranch from "../../components/NavigationBranch";
import Products from "../../components/AllProducts";
import SortBy from "../../components/SortBy";

const AllProductsPage = () => {
  return (
    <div>
      <div>
        <NavigationBranch />
        <SortBy/>
        <Products />
      </div>
    </div>
  );
};

export default AllProductsPage;
