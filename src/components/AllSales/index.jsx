import React, { useState, useEffect } from 'react';
import s from './index.module.scss';
import heart from '/public/heart.svg';
import bag from '/public/bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../requests/products';

function AllSales() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllProducts);
    }, []);
  
    const productsState = useSelector((store) => store.products);


    const discountedProducts = productsState.filter(product => product.discont_price > 0);
        return (
            <div className={s.products}>
                <div className={s.header}>
                    <h2>All Sales</h2>
                </div>
                <div className={s.productsList}>
                    {discountedProducts.map((element) => (
                    <div key={element.id} className={s.productsItem}>
                        <img src={`http://localhost:3333${element.image}`}
                       
                        />
                    <div className={s.icon_container}>
                        <img src={heart} className={s.icon} alt="Heart Icon" />
                        <img src={bag} className={s.icon} alt="Bag Icon" />
                    </div>                        
                        <p>{element.title}</p>
                        <p className={s.new_price}>${element.price}</p>
                    </div>
                    ))}
                </div>
            </div>
        );
}

export default AllSales;