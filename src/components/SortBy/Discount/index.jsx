import React from 'react';
import s from './index.module.scss';

const SortByDiscount = ({ showDiscounted, onCheckboxChange  }) => {
    return (
        <div className={s.sortedbydiscount}>
            <b>Discounted items</b>
            <input type="checkbox" checked={showDiscounted} onChange={onCheckboxChange}/>
        </div>
    );
};

export default SortByDiscount;