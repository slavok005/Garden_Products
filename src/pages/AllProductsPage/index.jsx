import React from "react";
import s from './index.module.scss' // Проверьте правильность пути к файлу стилей
import NavigationBranch from "../../components/NavigationBranch";
import AllProducts from "../../components/AllProducts";

const AllProductsPage = () => {
  return (
    <div>
      <div>
        <NavigationBranch />
        <AllProducts />
      </div>
    </div>
  );
};

export default AllProductsPage;
