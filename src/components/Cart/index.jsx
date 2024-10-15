import React from 'react';
import s from './index.module.scss';
import { Link } from 'react-router-dom';

function Cart() {
    return(
        <div className={s.cart}>
            <div className={s.cardheader}>
                <h2>Shopping Cart</h2>
                <div className={s.line}></div>
                <button className={s.backtostorebtn}>
                    <Link to='/products'>Back to the store</Link>
                </button>
            </div>
            
            <button className={s.continuebtn}>
                <Link to='/products'>Continue Shopping</Link>
            </button>
        </div>        
    )
}

export default Cart;