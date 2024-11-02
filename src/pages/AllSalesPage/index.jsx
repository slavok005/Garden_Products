import React, { useContext } from "react";
import s from "./index.module.scss";
import AllSales from "../../components/AllSales/index";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

const AllSalesPage = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`${s.container} ${theme === 'dark' ? s['container_dark'] : ''}`}>
      <div className={s.breadcrumbs}>
        <div className={s.crumbBox}>
          <Link to="/" className={s.crumbText}>
            <div className={s.crumbText}>
              Main page
            </div>            
          </Link>
        </div>
        <div className={s.line}></div>
        <div className={s.crumbBox}>
          <div className={`${s.crumbTextMain} ${theme === 'dark' ? s['crumbTextMain-dark'] : ''}`}>
            All sales
          </div>
        </div>
      </div>
      <AllSales />
    </div>
  );
};

export default AllSalesPage;
