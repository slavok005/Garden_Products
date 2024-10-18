import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProductFromFavoriteAction } from '../../store/reducers/favoriteReducer';



export default function FavoriteItem({ id, title, price, image }) {

    const dispatch = useDispatch();

    return(
        <div>
            <img 
            src={image} 
            alt={title}
            />
            <p>{ title }</p>
            <p>{ price }$</p>
            <p onClick={() => dispatch(deleteProductFromFavoriteAction(id))}>
                del
            </p>
        </div>
    )
}
