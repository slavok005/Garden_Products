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
    const totalPrice = +cartState.reduce((acc, elem) => {
        const priceToUse = elem.discont_price ? elem.discont_price : elem.price;
        return acc + (priceToUse * elem.count);
    }, 0).toFixed(2);

    // Состояние для формы
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    // Состояние для модального окна
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        e.preventDefault();
        console.log('Form Data:', formData);
        setIsModalOpen(true); // Открываем модальное окно

        // Через 3 секунды перезагружаем страницу и сбрасываем состояние инпутов и корзины
    //     setTimeout(() => {
    //         setFormData({
    //             name: '',
    //             phone: '',
    //             email: ''
    //         });
    //         dispatch(deleteAllAction()); // Очищаем корзину
    //         setIsModalOpen(false);
    //          // Закрываем модальное окно
    //     }
    //     , 5000
    // );
    };
    const closeSubmit = () => {
        setFormData({
            name: '',
            phone: '',
            email: '',
        });
        dispatch(deleteAllAction());
        setIsModalOpen(false);
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

                    <button type="submit"className={s.submitButton}>
                    <button 
                    type="submit" 
                    className={s.submitButton}
                    ></button>
                        Submit
                        </button>
                    <button type="submit" className={s.submitButton}>
                        Order
                    </button>
                </form>
            </div>

            {isModalOpen && (
                <div className={s.modalOverlay}>
                    <div className={s.modal_content}>
                        <div className={s.modal_content_title}>
                            <div className={s.modal_content_title_txt}>
                                <h2>Congratulations!</h2>
                            </div>
                            <div className={s.modal_content_title_txt}>
                                <p>Your order has been successfully placed on the website. <p>
                                </p>A manager will contact you shortly to confirm your order.</p>
                            </div>
                        </div>                            
                        <button onClick={closeSubmit}>X</button>                    
                    </div>
                </div>
            )}
        </div>
    );
}
