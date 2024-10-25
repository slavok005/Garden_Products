import React, { useState, useEffect } from 'react';
import s from './index.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../requests/products';
import ProductsCard from '../ProductCard';
import { sortAllProductsAction, sortByPriceAction } from '../../store/reducers/productsReducers';

function AllSales() {
    const dispatch = useDispatch();

    const productsState = useSelector((store) => store.products);
    const [discountedProducts] = useState(true);

    const [ minValue, setMinValue ] = useState(0);
    const [ maxValue, setMaxValue ] = useState(Infinity);

    const handleMinValue = e => setMinValue(e.target.value || 0);
    const handleMaxValue = e => setMaxValue(e.target.value || Infinity);

    // const filteredProducts = productsState
    // .filter((product) => {
    //     return discountedProducts ? product.discont_price !== null : true;
    // });

    const handleOrder = e => dispatch(sortAllProductsAction(e.target.value));


    useEffect(() => {
        dispatch(getAllProducts);
    }, []);

    useEffect(() => {
        dispatch(sortByPriceAction({
            min: minValue,
            max: maxValue
        }))
    }, [minValue, maxValue]);

    return (
        <div className={s.products}>
            <h2>Discount Items</h2>
            <div className={s.sortproductscontainer}>
                <div className={s.sortedby}>
                    <div 
                    className={s.sortedbyprice} 
                    // onSubmit={handleFilter}
                    >
                        <b>Price</b>
                        <input type="number" 
                        value={minValue} 
                        onChange={handleMinValue} 
                        placeholder='from'
                        />
                        <input type="number" 
                        value={maxValue} 
                        onChange={handleMaxValue} 
                        placeholder='to'
                        />
                        <button></button>
                    </div>
                    <div className={s.sortedoptin}>
                        <b>Sorted</b>
                        <select onInput={handleOrder} className={s.sortedoptinselect}>
                            <option value="default">By Default</option>
                            <option value="price_asc">By price ASC</option>
                            <option value="price_desc">By price DESC</option>  
                            <option value="title">By title (A-Z)</option>        
                        </select>
                    </div>
                </div>

            </div>
            
            <div className={s.productsList}>
                {productsState
                .filter((product) => {
                        return discountedProducts ? product.discont_price !== null : true;
                    })
                .filter(el => el.visible)
                .map(element => (
                <ProductsCard key={element.id} {...element}/>
                ))}
            </div>
        </div>
    );
}

export default AllSales;

