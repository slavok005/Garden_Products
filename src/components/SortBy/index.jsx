import React from 'react';
import s from './index.module.scss';

function SortBy() {
    return (
        <div className={s.sortedby}>
            <div className={s.sortedbyprice}>
                <b>Price</b>
                <input type="number" name="from" id="from" placeholder='from'/>
                <input type="number" name="to" id="to" placeholder='to'/>
            </div>
            <div className={s.sortedbydiscount}>
                <b>Discounted items</b>
                <input type="checkbox" name="" id="" />
            </div>
            <div className={s.sortedoptin}>
                <b>Sorted</b>
                <select className={s.sortedoptinselect}>
                    <option label="by Default"></option>
                    <option label="by Price"></option>
                    <option label="by Discount"></option>                
                </select>
            </div>
        </div>
        
        
    )    
}

export default SortBy;