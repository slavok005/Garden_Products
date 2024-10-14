import React from "react";
import s from "./index.module.scss";
import img from "./image_discount/1.svg";

function DiscountForm() {
  return (
    <div className={s.discountSection}>
        <h2>5% off on the first order</h2>
        <div className={s.constentSection}>
                <div className={s.handsImg}>
                  <img src={img} alt="Hands with gardening tools" />
                </div>
            <div className={s.discountForm}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone number" />
              <input type="email" placeholder="Email" />
              <button className={s.discountbutton}>Get a discount</button>
            </div>
        </div>
    </div>
  );
}

export default DiscountForm;
