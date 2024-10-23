import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import s from "./index.module.scss";

const NavigationBranch = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const pathNamesMap = {
    products: "All Products",
    sales: "All Sales",
    categories: "Categories",
    favorites: "Liked products",
  };

  return (
    <div>
      <div className={s.navigation_branch}>
        <button className={s.mainpagebutton}>
          <Link to="/" className="mainpagebutton">
            Main Page
          </Link>
        </button>
        <div className={s.line}></div>

        {pathnames.map((segment, index) => {
          const pathTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const displayName = pathNamesMap[segment] || segment;
          return (
            <div className={s.navigation} key={pathTo}>
              <button className={s.navigationbutton}>
                <Link to={pathTo}>{displayName}</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationBranch;
