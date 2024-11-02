import React, { useState, useEffect, useContext } from 'react';
import s from './index.module.scss';
import { getAllProducts } from '../requests/products';
import { useDispatch, useSelector } from 'react-redux';
import ProductsCard from '../ProductCard';
import { getDiscountProductsAction, sortAllProductsAction, sortByPriceAction } from '../../store/reducers/productsReducers';
import { ThemeContext } from '../../ThemeContext';
import { ThemeContext } from '../../ThemeContext';
import Skeleton from '../Skeleton';
import { getDiscountProductsAction, sortAllProductsAction, sortByPriceAction } from '../../store/reducers/productsReducers';

function AllProducts() {
    const {theme} = useContext(ThemeContext);
    
    useEffect(() => dispatch(getAllProducts), []);
    const allProductsState = useSelector(store => store.products);
    const allproductsData = allProductsState.data || [];

    const [ checked, setChecked ] = useState(false);

    const handleCheck = () => setChecked(!checked)
    const handleClick = (e) => 
        dispatch(getDiscountProductsAction(e.target.checked))

    const [ minValue, setMinValue ] = useState('');
    const [ maxValue, setMaxValue ] = useState('');    
    const handleMinValue = (e) => setMinValue(e.target.value || 0);
    const handleMaxValue = (e) => setMaxValue(e.target.value || Infinity);    
    
    const handleOrder = (e) => dispatch(sortAllProductsAction(e.target.value));

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
        dispatch(
            sortByPriceAction({
                min: minValue,
                max: maxValue
            })
        );
    } 
    [minValue, maxValue, dispatch];


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
                            className='number'
                            />
                            <input type="number" 
                            value={maxValue} 
                            onChange={handleMaxValue} 
                            placeholder='to'
                            className='number'
                            />
                            <button></button>
                        </div>
                        <div className={s.sortedbydiscount}>
                            <b>Discounted items</b>
                            <div className={s.checkbox}>
                                <input 
                                type="checkbox"
                                className='checkbox'
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
                                <option value="default">By Default</option>
                                <option value="price_asc">By price ASC</option>
                                <option value="price_desc">By price DESC</option>  
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

                        {allproductsData.length > 0 ?(
                            allproductsData
                            .filter((el) => el.visible)
                            .map((el) => (<ProductsCard key={el.id} {...el} />))
                        ) : (
                            <Skeleton length={12}/>
                        )}

                    </div>
            </div>
        );


export default AllProducts;
