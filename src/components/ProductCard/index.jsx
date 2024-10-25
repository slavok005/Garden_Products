import React from "react";
import s from "./index.module.scss";
import bag from "./images/bag.svg";
import heart from "./images/heart.svg";
import baggreen from "./images/cart green.svg";
import heartgreen from "./images/heart green.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCartAction, deleteProductFromCartAction } from "../../store/reducers/cartReducer";
import { addProductToFavoriteAction, deleteProductFromFavoriteAction } from "../../store/reducers/favoriteReducer";

const ProductsCard = ({ id, title, image, price, discont_price }) => {
  const dispatch = useDispatch();

  const discountPercentage = discont_price
    ? Math.round(((price - discont_price) / price) * 100)
    : null;

  // Проверка корзины
  const cart = useSelector((state) => state.cart);
  const isInCart = cart.some((product) => product.id === id);

  // Проверка избранного
  const favorites = useSelector((state) => state.favorite);
  const isInFavorite = favorites.some((product) => product.id === id);

  // Обработчик для добавления/удаления товара из корзины
  const handleCartClick = () => {
    if (isInCart) {
      dispatch(deleteProductFromCartAction(id)); // Если товар в корзине, удаляем его
    } else {
      dispatch(addProductToCartAction({ id, discont_price, price, title, image })); // Если товара нет в корзине, добавляем его
    }
  };

  // Обработчик для добавления/удаления товара из избранного
  const handleFavoriteClick = () => {
    if (isInFavorite) {
      dispatch(deleteProductFromFavoriteAction(id)); // Если товар в избранном, удаляем его
    } else {
      dispatch(addProductToFavoriteAction({ id, image, title, price, discont_price })); // Если товара нет в избранном, добавляем его
    }
  };

  return (
    <div key={id} className={s.sales_card}>
      <div className={s.icon_container}>
        {/* Показ иконки сердца */}
        <img
          src={isInFavorite ? heartgreen : heart} // Если в избранном, показываем зелёное сердце
          className={s.icon}
          alt={isInFavorite ? "Green Heart Icon" : "Heart Icon"} // Добавляем строку для alt
          onClick={handleFavoriteClick} // Обработка клика на сердце
        />

        {/* Показ иконки корзины */}
        <img
          src={isInCart ? baggreen : bag} // Если в корзине, показываем зелёную корзину
          className={s.icon}
          alt={isInCart ? "Green Bag Icon" : "Bag Icon"} // Добавляем строку для alt
          onClick={handleCartClick} // Обработка клика на корзину
        />
      </div>

      <Link to={`/products/${id}`}>
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
            <p className={s.descriptionp}>{title}</p>
          </div>
          <div className={s.price_container}>
            {discont_price ? (
              <>
                <p className={s.new_price}>${discont_price}</p>
                <p className={s.old_price}>${price}</p>
              </>
            ) : (
              <p className={s.new_price}>${price}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductsCard;
