import React, { useState } from 'react';
import s from './index.module.scss';

const SortByDiscount = ({ showDiscounted, onCheckboxChange  }) => {
    
    return (
        <div className={s.sortedbydiscount}>
            <b>Discounted items</b>
            <div className={s.checkbox}>
                <input 
                type="checkbox"
                class='checkbox'
                id='checkbox'
                checked={showDiscounted} 
                onChange={onCheckboxChange}
                />
                {/* <label for="checkbox">discount</label> */}
            </div>
            
        </div>
    );
};

export default SortByDiscount;