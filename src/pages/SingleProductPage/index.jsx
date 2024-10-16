import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../components/requests/products';
import { useDispatch, useSelector } from 'react-redux';
import s from "./index.module.scss";
import SingleProductCard from '../../components/SingleProductCard';
import NavigationBranch from '../../components/NavigationBranch';

export default function SingleProductPage() {
  const { id } = useParams(); // Получаем ID продукта из URL
  const dispatch = useDispatch();

  useEffect(() => {dispatch(getSingleProduct(id))
},[]); // Отправляем запрос на получение 

  // Получаем состояние продукта из хранилища Redux
  const singleProductState = useSelector((store) => store.singleProduct);

  return (
    <div>
      <h2>
      {singleProductState && singleProductState.title}
      </h2>
      <NavigationBranch />
      <SingleProductCard />


    </div>
    // <div className={s.container_single_card}>
    //   <div className={s.image_section}>
    //     <img
    //     src={`http://localhost:3333/prodicts${image}`}// Используем изображение продукта
    //       alt={title} // Используем название продукта для alt
    //       className={s.image}
    //     />
    //   </div>
    
    // </div>
  );
}