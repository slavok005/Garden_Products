import React, { useState , useDispatch, useEffect } from 'react';
import s from './index.module.scss';
import { getDiscountProductsAction } from '../../../store/reducers/productsReducers';
import { getAllProducts } from '../../requests/products';

const SortByDiscount = () => {

    const dispatch = useDispatch();

    const [ checked, setChecked ] = useState(false);
    const handleCheck = () => setChecked(!checked)
    const handleClick = e => dispatch(getDiscountProductsAction(e.target.checked))

    useEffect(() => dispatch(getAllProducts), []);

    // const allProductsState = useSelector(store => store.allProducts);
    
    return (
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
                {/* <label for="checkbox">discount</label> */}
            </div>
            
        </div>
    );
};

export default SortByDiscount;