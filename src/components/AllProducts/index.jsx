import React, { useState, useEffect } from 'react';
import s from './index.module.scss';
import { getAllProducts } from '../requests/products';
import { useDispatch, useSelector } from 'react-redux';
import ProductsCard from '../ProductCard';
import SortByPrice from '../SortBy/Price';
import SortByDiscount from '../SortBy/Discount';
import SortByOption from '../SortBy/Option';

function AllProducts() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts);
    }, []);

    const allProductsState = useSelector(store => store.products);

        return (
            <div className={s.products}>
                <h2>All Products</h2>
                <div className={s.sortedby}>

                </div>
                <div className={s.productsList}>
                    {allProductsState
                        .map(el => (
                        <ProductsCard key= {el.id} {...el} />
                    ))
                        // .filter(el => el.visible)
                    }
                </div>
            </div>
        );
}

export default AllProducts;
