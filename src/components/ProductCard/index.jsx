import React from 'react';
import s from './index.module.scss'
import bag from './images/bag.svg'
import heart from './images/heart.svg'
import img from './images/2.svg'
const ProductsCard = ({ id, title, image, price, description }) => {
    const truncateDescription = (description) => {
      const words = description.split(" ");
      return words.length > 2 ? `${words.slice(0, 3).join(" ")}...` : description;
    };
  
  
    return (
      <div key={id} className={s.sales_card}>
        <div className={s.image_container}>
          <img src={`http://localhost:3333${image}`} alt={title} className={s.sale_image} />
          <div className={s.discount_info}></div>
          <div className={s.icon_container}>
            <img src={heart} className={s.icon} alt="Heart Icon" />
            <img src={bag} className={s.icon} alt="Bag Icon" />
          </div>
        </div>
        {/* Если есть описание, используем truncateDescription для сокращения */}
        <p className={s.description}>{truncateDescription(description)}</p>
        <div className={s.price_container}>
          <p className={s.old_price}>{price}</p>
          <p className={s.new_price}>$399</p>
        </div>
      </div>
    );
  };
  
  export default ProductsCard;
  

 // Функция для сокращения текста до 3 слов
  // const truncateDescription = (description) => {
  //   const words = description.split(" ");
  //   return words.length > 2 ? `${words.slice(0, 2).join(" ")}...` : description;
  // };

  // const truncateText = (text) => {
  //   const words = text.split(" ");
  //   return words.length > 3 ? `${words.slice(0, 3).join(" ")}...` : text;
  // };

{/* <div key={product.id} className={s.ProductsCard}>
            <div className={s.discount_info}></div>
            <div className={s.icon_container}>
                    <img src={heart} className={s.icon} alt="Heart Icon" />
                    <img src={bag} className={s.icon} alt="Bag Icon" />
            </div>
            <img
              src={`http://localhost:3333${product.image}`}
              alt={product.title}
              className={s.productImage}
            />
            <div className={s.tegi}>
              <h3>{truncateText(product.title)}</h3>
              <div className={s.price_container}>
                <p className={s.old_price}>${product.price}</p>
                <p className={s.new_price}>$100</p>
              </div>
            </div>
          </div> */}