import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import CartItemsContainer from "../../components/CartItemContainer";
import { deleteAllAction } from "../../store/reducers/cartReducer";
import { ThemeContext } from "../../ThemeContext";

export default function CartPage() {
  const { theme } = useContext(ThemeContext);
  const cartState = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const totalCount = cartState.reduce((acc, elem) => acc + elem.count, 0);
  const totalPrice = +cartState
    .reduce((acc, elem) => {
      const priceToUse = elem.discont_price ? elem.discont_price : elem.price;
      return acc + priceToUse * elem.count;
    }, 0)
    .toFixed(2);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    //     setTimeout(() => {
    //         setFormData({
    //             name: '',
    //             phone: '',
    //             email: ''
    //         });
    //         dispatch(deleteAllAction());
    //         setIsModalOpen(false);
    //     }
    //     , 5000
    // );
  };
  const closeSubmit = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
    });
    dispatch(deleteAllAction());
    setIsModalOpen(false);
  };

  useEffect(
    () => localStorage.setItem("cart", JSON.stringify(cartState)),
    [cartState]
  );

  return (
    <div className=
    {`${s.cart} ${theme === "dark" ? s["cart_dark"] : ""}`}
    >
      <div className={s.cardheader}>
        <h2>Shopping Cart</h2>
        <div className={s.line}></div>
        <button className={s.backtostorebtn}>
          <Link to="/products">Back to the store</Link>
        </button>
      </div>
      <div className={s.cartContent}>
        {cartState.length === 0 ? (
          <div className={s.cardempty}>
            <p>Looks like you have no items in your basket currently.</p>
            <button className={s.continuebtn}>
              <Link to="/products">Continue Shopping</Link>
            </button>
          </div>
        ) : (
          <div className={s.cartitemscontainer}>
            <CartItemsContainer cart={cartState} />
            <form onSubmit={handleSubmit} className={s.orderForm}>
              <h3 className={s.order_details}>Order Details</h3>
              <p className={s.items}> {totalCount} Items</p>
              <p className={s.total}>
                Total <span className={s.price}>${totalPrice}</span>{" "}
              </p>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className={s.submitButton}>
                Order
              </button>
            </form>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className={s.modalOverlay}>
          <div className={s.modal_content}>
            <div className={s.modal_content_title}>
              <div className={s.modal_content_title_txt}>
                <h2>Congratulations!</h2>
              </div>
              <div className={s.modal_content_title_txt}>
                <p>
                  Your order has been successfully placed on the website.{" "}
                  <p></p>A manager will contact you shortly to confirm your
                  order.
                </p>
              </div>
            </div>
            <button onClick={closeSubmit}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}
