import img from "./image_header/logo.svg";
import img1 from "./image_header/mode.svg";
import img2 from "./image_header/heart.svg";
import img3 from "./image_header/tache.svg";
import s from "./index.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Header() {
  const cartState = useSelector((store) => store.cart);

const [count, setCount] = useState(1); 
  const totalCount = cartState.reduce((acc, elem) => acc + elem.count, 0);

  const favoriteState = useSelector((store) => store.favorite);

  const favoriteCount = favoriteState.reduce(
    (acc, elem) => acc + elem.count,0);

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img className="logo" src={img} alt="logo" />
        <img className={s.mode} src={img1} alt="mode" />
      </div>

      <nav className="style-centr">
        <div className={s["discount-banner"]}>
          <Link>1 day discount!</Link>
        </div>
        <div className={s.navList}>
          <Link to="/">Main Page</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/products">All products</Link>
          <Link to="/sales">All sales</Link>
        </div>
      </nav>

      <div className={s.icons}>
        <Link to="/favorites">
          <img className="icon" src={img2} alt="icon" />
          <span>{favoriteCount}</span>
        </Link>
        <Link to="/cart">
          <img className="card" src={img3} alt="card" />
          <span>{totalCount}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
