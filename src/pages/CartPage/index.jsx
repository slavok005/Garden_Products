import React from 'react'
import { Link } from 'react-router-dom';
import s from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import CartItemsContainer from '../../components/CartItemContainer';
import { deleteAllAction } from '../../store/reducers/cartReducer';


export default function CartPage() {

    const cartState = useSelector(store => store.cart);

    const dispatch = useDispatch();

    const totalCount = cartState.reduce((acc, elem) => acc + elem.count, 0);

    const totalPrice = +cartState.reduce((acc, elem) => acc + (elem.price * elem.count), 0).toFixed(2);

return (
    <div className={s.cart}>
        <div className={s.cardheader}>
                <h2>Shopping Cart</h2>
                <div className={s.line}></div>
                <button className={s.backtostorebtn}>
                    <Link to='/products'>Back to the store</Link>
                </button>
        </div>
        {
            cartState.length === 0
            ? <div className={s.cardempty}>
                <p>Looks like you have no items in your basket currently.</p>
                <button className={s.continuebtn}>
                    <Link to='/products'>Continue Shopping</Link>
                </button>
            </div>
            : <div className={s.cartitemscontainer}>
                <CartItemsContainer cart={cartState} />
                <button onClick={() => dispatch(deleteAllAction())}>
                    Delete All
                </button>
                <p>Items count: {totalCount}</p>
                <p>Total sum: {totalPrice}$</p>
            </div>
        }     
    </div>
)
}
