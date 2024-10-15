import React from "react";
import NavigationBranch from "../../components/NavigationBranch";
import Products from "../../components/AllProducts";

const AllProductsPage = () => {
  return (
    <div>
      <div>
        <NavigationBranch />
        <Products />
      </div>
    </div>
  );
};

export default AllProductsPage;
