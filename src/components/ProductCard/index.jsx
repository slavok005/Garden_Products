import React from "react";
import s from "./index.module.scss";
import bag from "./images/bag.svg";
import heart from "./images/heart.svg";
import img from "./images/2.svg";
import { Link } from "react-router-dom";


const ProductsCard = ({
    id,
    title,
    image,
    price,
    discont_price,
    description,
  }) => {
    const truncateDescription = (description) => {
      const words = description.split(" ");
      return words.length > 2 ? `${words.slice(0, 3).join(" ")}...` : description;
    };
  
    const discountPercentage = discont_price
      ? Math.round(((price - discont_price) / price) * 100)
      : null;
  
    return (
        <Link to = {`/products/${id}`} >
        <div key={id} className={s.sales_card}>
        <div className={s.image_container}>
          <img
            src={`http://localhost:3333${image}`}
            alt={title}
            className={s.sale_image}
          />
          {discont_price && (
            <div className={s.discount_info}>-{discountPercentage}%</div>
          )}
          <div className={s.icon_container}>
            <img src={heart} className={s.icon} alt="Heart Icon" />
            <img src={bag} className={s.icon} alt="Bag Icon" />
          </div>
        </div>
        <p className={s.description}>{truncateDescription(description)}</p>
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


      
    );
  };
  
  export default ProductsCard;
  


