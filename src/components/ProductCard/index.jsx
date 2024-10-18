import React from "react";
import s from "./index.module.scss";
import bag from "./images/bag.svg";
import heart from "./images/heart.svg";
import img from "./images/2.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCartAction } from "../../store/reducers/cartReducer";
import { addProductToFavoriteAction } from "../../store/reducers/favoriteReducer";


const ProductsCard = (
  {
    id,
    title,
    image,
    price,
    discont_price,
  }
) => {
    // const truncateDescription = (description) => {
    //   const words = title.split(" ");
    //   return words.length > 2 ? `${words.slice(0, 2).join(" ")}...` : title;
    // };

    // const favoriteState = useSelector(store => store.favorite);

    // const cartState = useSelector(store => store.cart);

    // const target = cartState.find(elem => elem.id === id);

    const dispatch = useDispatch();

    const discountPercentage = discont_price
      ? Math.round(((price - discont_price) / price) * 100)
      : null;
  
    return (
        <div key={id} className={s.sales_card}>
          <div className={s.icon_container}>
            <img src={heart} className={s.icon} alt="Heart Icon"
            onClick={() => dispatch(addProductToFavoriteAction({ id, image, title, price, discont_price }))}
            />
            <img src={bag} className={s.icon} alt="Bag Icon" 
            onClick={() => dispatch(addProductToCartAction({ id, image, title, price, discont_price }))}
            />
          </div>
          <Link to = {`/products/${id}`} >
        <div className={s.image_container}>
          <img
            src={`http://localhost:3333${image}`}
            alt={title}
            className={s.sale_image}
          />
          {discont_price && (
            <div className={s.discount_info}>-{discountPercentage}%</div>
          )}
          
        </div>
        <div className={s.price_box}>
          <div className={s.description}>
            <p className={s.descriptionp}>{(title)}</p>
          </div>          
          <div className={s.price_container}>
            {/* Если есть скидочная цена, показываем ее и оригинальную цену */}
            {discont_price ? (
              <>
                <p className={s.new_price}>${discont_price}</p>
                <p className={s.old_price}>${price}</p>
              </>
            ) : (
              // Если скидочной цены нет, просто показываем оригинальную цену
              <p className={s.new_price}>${price}</p>
            )}
          </div>
        </div>
        </Link>       
        </div>      
    );
  };
  
  export default ProductsCard;
  


