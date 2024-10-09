

import React from 'react';
import s from './index.module.scss';
import img from '../images/image_categories/1.svg';
import heart from '../images/image_categories/heart.svg';
import bag from '../images/image_categories/bag.svg';

const SalesCard = () => {
    return (
        <div className={s.sales_card}>
            <div className={s.image_container}>
                <img src={img} alt="Sale" className={s.sale_image} />
                <div className={s.discount_info}></div>
                <div className={s.icon_container}>
                    <img src={heart} className={s.icon} alt="Heart Icon" />
                    <img src={bag} className={s.icon} alt="Bag Icon" />
                </div>
            </div>
            <p className={s.description}>Text of paragraph</p>
            <div className={s.price_container}>
                <p className={s.old_price}>$500</p>
                <p className={s.new_price}>$399</p>
            </div>
        </div>
    );
};

export default SalesCard;
