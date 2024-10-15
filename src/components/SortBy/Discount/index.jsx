import React, { useState } from 'react';
import s from './index.module.scss';

const SortByDiscount = ({ showDiscounted, onCheckboxChange  }) => {
    
    return (
        <div className={s.sortedbydiscount}>
            <b>Discounted items</b>
            <div className={s.checkbox}>
                <input 
                type="checkbox" 
                checked={showDiscounted} 
                onChange={onCheckboxChange}
                // style={{ display: 'none' }}
                />
            </div>
            
        </div>
    );
};

export default SortByDiscount;