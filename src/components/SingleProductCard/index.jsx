import React, { useEffect , useState } from 'react';
import s from './index.module.scss'
import heart from '../ProductCard/images/heart.svg'
import picture from './main.png'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../requests/products';

// const {  title, price, discont_price, description, image } = singleProductState


const SingleProductCard = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const dispatch = useDispatch();

    const { product_id } = useParams();

    useEffect(() => dispatch (getSingleProduct(product_id)), [])

    const singleProductState = useSelector((store) => store.singleProduct);

    const {  title, price, discont_price, description, image } = singleProductState

    const discountPercentage = discont_price
        ? Math.round(((price - discont_price) / price) * 100)
        : null; 
        
    return (
        <div className={s.singleProductContainer}>
            <div>
                <div className={s.img_container}>
                    <img
                    src={`http://localhost:3333${image}`}
                    className={s.product_image}
                    onClick={handleImageClick}
                    />
                </div>

                    {isModalOpen && (
                        <div className={s.modal} onClick={closeModal}>
                            <div className={s.modal_content}>
                                <img
                                    src={`http://localhost:3333${image}`}
                                    className={s.full_image}
                                />
                            </div>
                        </div>
                    )}
            </div>
            
            <div className={s.content_container}>
                <div className={s.title_container}>
                    <h2 className={s.title}>{title}</h2>
                    <img
                    src={heart}
                    alt="heart"
                    />
                </div>
                <div className={s.price_container}>
                    
                    {discont_price ? (
                        <>
                            <p className={s.new_price}>${price}</p>
                            <p className={s.old_price}>${discont_price}</p>
                        </>
                    ) : (
                            <p className={s.new_price}>${price}</p>
                        )}
                    {discont_price && (
                        <div className={s.sale_info}>-{discountPercentage}%</div>
                    )}                    
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
                        <p>{description}</p>
                        <h3>Read more</h3>
                    </div>
            </div>
        </div>
    );
};

export default SingleProductCard;