import React from "react";
import s from "./index.module.scss";
import AllSales from "../../components/AllSales/index";
import { Link } from "react-router-dom";

const AllSalesPage = () => {
  return (
    <div>
      <div className={s.breadcrumbs}>
        <div className={s.crumbBox}>
          <Link to="/" className={s.crumbText}>
            Main page
          </Link>
        </div>
        <div className={s.line}></div>
        <div className={s.crumbBox}>
          <div className={s.crumbTextBlack}>All sales</div>
        </div>
      </div>
      <AllSales />
    </div>
  );
};

export default AllSalesPage;
