import React, { useState, useEffect } from 'react';
import s from './index.module.scss';
import heart from '/public/heart.svg';
import bag from '/public/bag.svg';
import SortByPrice from '../SortBy/Price';
import SortByOption from '../SortBy/Option';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../requests/products';



function AllSales() {    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllProducts);
    }, []);
  
    const productsState = useSelector((store) => store.products);

    const [discountedProducts] = useState(true);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOption, setSortOption] = useState('');

    const filteredProducts = productsState
    .filter((product) => {
        return discountedProducts ? product.discont_price !== null : true;
    })
    .filter((product) => {
        const priceToCompare = product.discont_price || product.price;
        const minCondition = minPrice === '' || priceToCompare >= parseFloat(minPrice);
        const maxCondition = maxPrice === '' || priceToCompare <= parseFloat(maxPrice);
        return minCondition && maxCondition;
    });

    const sortedProducts = filteredProducts.slice().sort((a, b) => {
        switch (sortOption) {
            case 'alphabet':
                return a.title.localeCompare(b.title);
            case 'price-asc':
                return (a.discont_price || a.price) - (b.discont_price || b.price);
            case 'price-desc':
                return (b.discont_price || b.price) - (a.discont_price || a.price);
            case 'discount-asc':
                return (a.discont_price ? a.price - a.discont_price : 0) - (b.discont_price ? b.price - b.discont_price : 0);
            case 'discount-desc':
                return (b.discont_price ? b.price - b.discont_price : 0) - (a.discont_price ? a.price - a.discont_price : 0);
                default:
                return 0;
        }
    });

        return (
            <div className={s.products}>
                <h2>Discounted Items</h2>
                <div className={s.sortedby}>
                    <SortByPrice
                        minPrice={minPrice} 
                        maxPrice={maxPrice} 
                        onMinPriceChange={(e) => setMinPrice(e.target.value)} 
                        onMaxPriceChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <SortByOption
                        sortOption={sortOption} 
                        onSortChange={(e) => setSortOption(e.target.value)}
                    />
                </div>
                <div className={s.productsList}>
                    {sortedProducts.map((element) => (
                    <div key={element.id} className={s.productsItem}>
                        <img src={`http://localhost:3333${element.image}`}
                        // alt={element.title} 
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