import React from 'react';
import s from './index.module.scss';

function SortByPrice({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange }) {
    return (
        <div className={s.sortedbyprice}>
            <b>Price</b>
            <input type="number" value={minPrice} onChange={onMinPriceChange} placeholder='from'/>
            <input type="number" value={maxPrice} onChange={onMaxPriceChange} placeholder='to'/>
        </div>
    )
}

export default SortByPrice;