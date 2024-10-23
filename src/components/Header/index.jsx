import img from "./image_header/logo.svg";
import img1 from "./image_header/mode.svg";
import img2 from "./image_header/heart.svg";
import img3 from "./image_header/tache.svg";
import s from "./index.module.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addProductToCartAction } from "../../store/reducers/cartReducer"

function Header() {
  const productsState = useSelector((store) => store.products);
  const cartState = useSelector((store) => store.cart);
  const favoriteState = useSelector((store) => store.favorite);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomProduct, setRandomProduct] = useState(null);

  const dispatch = useDispatch();

  const totalCount = cartState.reduce((acc, elem) => acc + elem.count, 0);
  const favoriteCount = favoriteState.reduce((acc, elem) => acc + elem.count, 0);

  const handleDiscountClick = () => {
    const randomIndex = Math.floor(Math.random() * productsState.length);
    const selectedProduct = productsState[randomIndex];

    setRandomProduct({
      ...selectedProduct,
      discountedPrice: selectedProduct.price * 0.5,
    });

    setIsModalOpen(true);
  };

  const closeDiscount = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = () => {
    if (randomProduct) {
      dispatch(addProductToCartAction({ ...randomProduct, count: 1 }));
    }
    setIsModalOpen(false);
  };

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img className="logo" src={img} alt="logo" />
        <img className={s.mode} src={img1} alt="mode" />
      </div>

      <nav className="style-centr">
        <div className={s["discount-banner"]}>
          <Link onClick={handleDiscountClick}>1 day discount!</Link>
        </div>

        {isModalOpen && randomProduct && (
          <div className={s.modal}>
            <div className={s.modalContent}>
              <img src={`http://localhost:3333${image}`}/>
              <h2>{randomProduct.title}</h2>
              <p>Original Price: ${randomProduct.price}</p>
              <p>Discounted Price: ${randomProduct.discountedPrice}</p>
              <button onClick={handleAddToCart}>Add to Cart</button>
              <button onClick={closeDiscount}>Close</button>
            </div>
          </div>
        )}

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
