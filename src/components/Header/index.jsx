import img from "./image_header/logo.svg";
import img1 from "./image_header/mode.svg";
import img2 from "./image_header/heart.svg";
import img3 from "./image_header/tache.svg";
import s from "./index.module.scss";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addProductToCartAction } from "../../store/reducers/cartReducer"
import { getSingleProduct } from "../requests/products";

function Header() {
  const productsState = useSelector((store) => store.products);
  const cartState = useSelector((store) => store.cart);
  const favoriteState = useSelector((store) => store.favorite);
  const singleProductState = useSelector((store) => store.singleProduct);

  const dispatch = useDispatch();
  const { product_id } = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(product_id));
  }, [dispatch, product_id]);

  const { id, title, price, discont_price, description, image } =
    singleProductState;


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomProduct, setRandomProduct] = useState(null);

  const totalCount = cartState.reduce((acc, elem) => acc + elem.count, 0);
  const favoriteCount = favoriteState.reduce((acc, elem) => acc + elem.count, 0);

  const handleDiscountClick = () => {
    const randomIndex = Math.floor(Math.random() * productsState.length);
    const selectedProduct = productsState[randomIndex];

    setRandomProduct({
      ...selectedProduct,
      discountedPrice: (selectedProduct.price * 0.5).toFixed(2)
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
            <div className={s.modal_content}>
              <div className={s.modal_title}>
                <p>50% discount on product of the day!</p>
                <button onClick={closeDiscount}>X</button>
              </div>              
              <div className={s.modal_product}>
                <div className={s.modal_product_content}>
                  <img src={`http://localhost:3333${randomProduct.image}`} alt={title}/>
                  <div className={s.modal_product_txt}>
                    <div className={s.module_product_title}>
                      <h2>{randomProduct.title}</h2>
                    </div>
                    <div className={s.modal_product_price}>
                      <div className={s.modal_product_price_main}>
                        <p>${randomProduct.discountedPrice}</p>
                      </div>
                      <div className={s.modal_product_discount}>
                        <p>${randomProduct.price}</p>
                      </div> 
                    </div>                                  
                  </div>
                </div>                
                <div className={s.modal_product_button_container}>
                  <button onClick={handleAddToCart}>
                    <p>Add to Cart</p>
                    </button>
                </div>                              
              </div>
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
