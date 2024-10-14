import React, { useState, useEffect } from 'react';
import s from './index.module.scss';
import heart from '/public/heart.svg';
import bag from '/public/bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../requests/products';
import ProductsCard from '../ProductCard';

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
                    <ProductsCard key={element.id} {...element}/>
                    ))}
                </div>
            </div>
        );
}

export default AllSales;

