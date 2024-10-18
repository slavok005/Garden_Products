import React from 'react';
import CartItem from '../CartItem';

export default function CartItemsContainer({ cart }) {
    return (
        <div>
            {
                cart.map(elem => <CartItem key={elem.id} {...elem}/>)
            }
        </div>
    )
}