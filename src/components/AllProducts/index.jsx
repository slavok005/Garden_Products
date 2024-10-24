import React, { useState, useEffect } from 'react';
import s from './index.module.scss';
import { getAllProducts } from '../requests/products';
import { useDispatch, useSelector } from 'react-redux';
import ProductsCard from '../ProductCard';
import { getDiscountProductsAction, sortAllProductsAction, sortByPriceAction } from '../../store/reducers/productsReducers';

function AllProducts() {


    const [ checked, setChecked ] = useState(false);

    const handleCheck = () => setChecked(!checked)
    const handleClick = e => dispatch(getDiscountProductsAction(e.target.checked))

    const [ minValue, setMinValue ] = useState(0);
    const [ maxValue, setMaxValue ] = useState(Infinity);
    
    const handleMinValue = e => setMinValue(e.target.value || 0);
    const handleMaxValue = e => setMaxValue(e.target.value || Infinity);

    useEffect(() => dispatch(getAllProducts), []);

    const allProductsState = useSelector(store => store.products);
    
    const handleOrder = e => dispatch(sortAllProductsAction(e.target.value));

    const dispatch = useDispatch();

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
                <h2>All Products</h2>
                <div className={s.sortedby}>
                <div className={s.sortproductscontainer}>
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
            <div className={s.sortedbydiscount}>
                <b>Discounted items</b>
                <div className={s.checkbox}>
                    <input 
                    type="checkbox"
                    class='checkbox'
                    id='checkbox'
                    checked={checked} 
                    onChange={handleCheck}
                    onClick={handleClick}
                    />
                </div>            
            </div>
            <div className={s.sortedoptin}>
                <b>Sorted</b>
                <select onInput={handleOrder} className={s.sortedoptinselect}>
                    <option label="by Default"></option>
                    <option value="price-asc">By price ASC</option>
                    <option value="price-desc">By price DESC</option>  
                    <option value="title">By title (A-Z)</option>        
                </select>
            </div>
            </div>
                </div>
                <div className={s.productsList}>
                    {allProductsState
                        .filter(el => el.visible)
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
