import React from 'react';
import s from './index.module.scss'
import heart from '../ProductCard/images/heart.svg'
import picture from './main.png'
const SingleProductCard = () => {
    return (
        <div className={s.singleProductContainer}>
            <div className={s.img_container}>
                <img src={picture}/>
            </div>
            <div className={s.content_container}>
                <div className={s.title_container}>
                    <h2 className={s.title}>Product Name</h2>
                    <img src={heart} alt="heart" />
                </div>
                <div className={s.price_container}>
                    <p className={s.new_price}>$199</p>
                    <p className={s.old_price}>$240</p>
                    <div className={s.sale_info}>-17%</div>
                </div>
                    <div className={s.button_container}>
                        <div className={s.quantity_container}>
                            <button className={s.plus_minus}>-</button>
                            <div className={s.number_container}>1</div>
                            <button className={s.plus_minus}>+</button>
                        </div>
                        <div className={s.green_button}>Add to cart</div>
                    </div>
                    <div className={s.description_container}>
                        <h3>Description</h3>
                        <p>This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.
                        This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against man...</p>
                        <p>Read more</p>
                    </div>
            </div>
        </div>
    );
};

export default SingleProductCard;