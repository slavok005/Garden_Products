import React from "react";

import s from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import FavoriteItemsContainer from "../../components/FavoriteContainer";
import { Link } from "react-router-dom";

export default function FavoritePage() {
  const favoriteState = useSelector((store) => store.favorite);

  const dispatch = useDispatch();

  return (
    <div className={s.favoritepage}>
      <div className={s.favorites}>
        <div className={s.breadcrumbs}>
          <div className={s.crumbBox}>
            <Link to="/" className={s.crumbText}>
              Main page
            </Link>
          </div>
          <div className={s.line}></div>
          <div className={s.crumbBox}>
            <div className={s.crumbTextBlack}>Liked products</div>
          </div>
        </div>
        <div className={s.favheader}>
          <h2>Liked Products</h2>
        </div>
        <div className={s.favoritesitemcontainer}>
          {favoriteState.length === 0 ? (
            <div className={s.favoritesempty}>
              <p>Looks like you have no items to your favorites</p>
              <button className={s.continuebtn}>
                <Link to="/products">Continue Shopping</Link>
              </button>
            </div>
          ) : (
            <div className={s.favoritesitemcontainer}>
              <FavoriteItemsContainer favorite={favoriteState} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
