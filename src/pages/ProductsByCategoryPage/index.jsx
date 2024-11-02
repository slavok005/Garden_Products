import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.scss";
import { getProductsByCategory } from "../../components/requests/products.js";
import ProductsCard from "../../components/ProductCard/index.jsx";
import { ThemeContext } from "../../ThemeContext.jsx";
import {
  getDiscountByCategoryAction,
  sortAllByCategoryAction,
  sortByPriceByCategoryAction,
} from "../../store/reducers/productsByCategory.js";

function ProductsByCategoryPage() {
  const {theme} = useContext(ThemeContext);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getProductsByCategory(id));
    }
  }, [dispatch, id]);

  const productsByCategoryState = useSelector(
    (store) => store.productsByCategory
  );
  const productsData = productsByCategoryState.data || [];
  const productsCategory = productsByCategoryState.category || {};

  const [checked, setChecked] = useState(false);

  const handleCheck = () => setChecked(!checked);
  const handleClick = (e) =>
    dispatch(getDiscountByCategoryAction(e.target.checked));

  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const handleMinValue = (e) => setMinValue(e.target.value || 0);
  const handleMaxValue = (e) => setMaxValue(e.target.value || Infinity);

  const handleOrder = (e) => dispatch(sortAllByCategoryAction(e.target.value));

  useEffect(() => {
    dispatch(
      sortByPriceByCategoryAction({
        min: minValue,
        max: maxValue,
      })
    );
  }, [minValue, maxValue, dispatch]);
  console.log(productsByCategoryState);

  return (
    <section>
      {productsCategory && productsCategory ? (
        <>
          <div className=
          {`${s.breadcrumbs} ${theme === 'dark' ? s['breadcrumbs_dark'] : ''}`}
          >
            <div className={s.crumbBox}>
              <Link to="/" className={s.crumbText}>
                Main page
              </Link>
            </div>
            <div className={s.line}></div>
            <div className={s.crumbBox}>
              <Link to="/categories/" className={s.crumbText}>
                Categories
              </Link>
            </div>
            <div className={s.line}></div>
            <div className={s.crumbBox}>
              <div className={s.crumbTextBlack}>
                {productsByCategoryState.categoryTitle?.title}
              </div>
            </div>
          </div>

          <div className={s.ProductsByCategoryPage}>
            <div className={s.ProductsByCategoryPage_header}>
              <h2>{productsByCategoryState.categoryTitle?.title}</h2>
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
                      name="number"
                    />
                    <input
                      type="number"
                      value={maxValue}
                      onChange={handleMaxValue}
                      placeholder="to"
                      name="number"
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
                        onClick={handleClick}
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
            </div>
            <div className={s.productsList}>
              {productsData.length > 0 ? (
                productsData
                  .filter((el) => el.visible)
                  .map((element) => (
                    <ProductsCard key={element.id} {...element} />
                  ))
              ) : (
                <p>No products found</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default ProductsByCategoryPage;
