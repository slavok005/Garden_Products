import React, { useContext, useEffect, useState } from "react";
import s from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import FavoriteItemsContainer from "../../components/FavoriteContainer";
import { Link } from "react-router-dom";

import {
  getDiscountFavoriteAction,
  sortAllFavoriteAction,
  sortByPriceFavoriteAction,
} from "../../store/reducers/favoriteReducer";
import { ThemeContext } from "../../ThemeContext";

export default function FavoritePage() {
  const { theme } = useContext(ThemeContext);

  const favoriteState = useSelector((store) => store.favorite);

  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState(Infinity);

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(getDiscountFavoriteAction(!checked));
  };

  const handleMinValue = (e) => setMinValue(e.target.value || 0);
  const handleMaxValue = (e) => setMaxValue(e.target.value || Infinity);
  const handleOrder = (e) => dispatch(sortAllFavoriteAction(e.target.value));

  useEffect(() => {
    dispatch(
      sortByPriceFavoriteAction({
        min: minValue,
        max: maxValue,
      })
    );
  }, [minValue, maxValue, dispatch]);

  const filteredAndSortedFavorites = favoriteState.filter((el) => el.visible);

  useEffect (
    () => localStorage.setItem("favorite", JSON.stringify(favoriteState)),
    [favoriteState]
  );

  return (
    <div
      className={`${s.favoritepage} ${
        theme === "dark" ? s["favoritepage_dark"] : ""
      }`}
    >
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
      <div className={s.favorites}>
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
            <div>
              <div className={s.sortedby}>
                <div className={s.sortproductscontainer}>
                  <div
                    className={s.sortedbyprice}
                    // onSubmit={handleFilter}
                  >
                    <b>Price</b>
                    <input
                      type="number"
                      value={minValue}
                      onChange={handleMinValue}
                      placeholder="from"
                    />
                    <input
                      type="number"
                      value={maxValue}
                      onChange={handleMaxValue}
                      placeholder="to"
                    />
                    <button></button>
                  </div>
                  <div className={s.sortedbydiscount}>
                    <b>Discounted items</b>
                    <div className={s.checkbox}>
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="checkbox"
                        checked={checked}
                        onChange={handleCheck}
                        // onClick={handleClick}
                      />
                    </div>
                  </div>
                  <div className={s.sortedoptin}>
                    <b>Sorted</b>
                    <select
                      onInput={handleOrder}
                      className={s.sortedoptinselect}
                    >
                      <option value="default">By Default</option>
                      <option value="price_asc">By price ASC</option>
                      <option value="price_desc">By price DESC</option>
                      <option value="title">By title (A-Z)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={s.favoritesitemcontainer}>
                <FavoriteItemsContainer favorite={filteredAndSortedFavorites} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
