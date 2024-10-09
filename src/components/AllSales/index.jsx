import React, { useState, useEffect } from 'react';
import s from './index.module.scss';

function AllSales() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3333/products/all')
        .then(res => res.json())
        .then(setProducts)
    }, []);

    const discountedProducts = products.filter(product => product.discont_price > 0);
        return (
            <div className={s.products}>
                <div className={s.header}>
                    <h2>All Sales</h2>
                </div>
                <div className={s.productsList}>
                    {discountedProducts.map((element) => (
                    <div key={element.id} className={s.productsItem}>
                        <img src={`http://localhost:3333${element.image}`} alt={element.title} />
                        <p>{element.title}</p>
                    </div>
                    ))}
                </div>
            </div>
        );
}

export default AllSales;