import React from "react";
import s from "./index.module.scss";
import img from "./image_discount/1.svg";

function DiscountForm() {
  return (
    <div className={s.discountSection}>
      <div className={s.fon}>
        <h2>5% off on the first order</h2>
        <div className={s.discountInfo}>
          <div className={s.handsImg}>
            <img src={img} alt="Hands with gardening tools" />
          </div>
        </div>
      </div>
      <div className={s.discountForm}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone number" />
        <input type="email" placeholder="Email" />
        <button>Get a discount</button>
      </div>
    </div>
  );
}

export default DiscountForm;
