import React, { useState } from 'react';
import s from './index.module.scss';

function SortByPrice({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange }) {
    const handleFilter = e => {
        e.preventDefault();
        const {min_price, max_price } = e.target;
    
    const [ minValue, setMinValue ] = useState(0);
    const [ maxValue, setMaxValue ] = useState(Infinity);

    const handleMinPrice = e => setMinValue(e.target.value);
    const handleMaxPrice = e => setMaxValue(e.target.value);
    }

    const priceValues = {
        min: minValue,
        max: maxValue
    }

    


    return (
        <div className={s.sortedbyprice}>
            <b>Price</b>
            <input type="number" value={minPrice} onChange={onMinPriceChange} placeholder='from'/>
            <input type="number" value={maxPrice} onChange={onMaxPriceChange} placeholder='to'/>
            <button></button>
        </div>
    )
}

export default SortByPrice;