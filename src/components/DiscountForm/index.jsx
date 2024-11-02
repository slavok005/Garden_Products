import React, { useState } from "react";
import s from "./index.module.scss";
import img from "./image_discount/1.svg";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function DiscountForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // предотвращаем перезагрузку страницы
    // console.log('Form Data:', formData);
    // Здесь можно добавить дальнейшую обработку данных, например, отправку на сервер
  };
  return (
    <div className={s.discountSection}>
        <h2>5% off on the first order</h2>
        <div className={s.constentSection}>
          <div className={s.handsImg}>
            <img src={img} alt="Hands with gardening tools" />
          </div>
          <form 
          className={s.discountForm}
          onSubmit={handleSubmit}
          >
            <label htmlFor="name">
              <input
              type="text" 
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              />
            </label>
            <label htmlFor="phone">
              <input
              type="text"
              placeholder="Phone number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              />
            </label>
            <label htmlFor="email">
              <input 
                type="email" 
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <Link to='/sales'>
              <button className={s.discountbutton}>Get a discount</button>
            </Link>            
          </form>
        </div>
    </div>
  );
}

export default DiscountForm;
