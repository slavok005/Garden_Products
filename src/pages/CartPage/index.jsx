import React, { useState } from 'react';
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

    // Состояние для формы
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    // Обработчик изменения инпутов
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault(); // предотвращаем перезагрузку страницы
        console.log('Form Data:', formData);
        // Здесь можно добавить дальнейшую обработку данных, например, отправку на сервер
    };

    return (
        <div className={s.cart}>
            <div className={s.cardheader}>
                <h2>Shopping Cart</h2>
                <div className={s.line}></div>
                <button className={s.backtostorebtn}>
                    <Link to='/products'>Back to the store</Link>
                </button>
            </div>
            <div className={s.cartContent}>
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
                        <button className={s.deleteButton} onClick={() => dispatch(deleteAllAction())}>
                            Delete All
                        </button>
                        
                    </div>
                }
                {/* Форма для ввода данных */}
                <form onSubmit={handleSubmit} className={s.orderForm}>
                    <h3 className={s.order_details}>Order Details</h3>
                    <p className={s.items}> {totalCount} Items</p>
                   
                    <p className={s.total}>Total <p className={s.price}>${totalPrice}</p> </p>
                      
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className={s.submitButton}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
