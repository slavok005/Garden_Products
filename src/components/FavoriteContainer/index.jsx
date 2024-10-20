import React from 'react';
import FavoriteItem from '../FavoriteItem';
import s from './index.module.scss'

export default function FavoriteItemsContainer({ favorite }) {
    return (
        <div className={s.FavoriteItemsContainer}>
            {
                favorite.map(elem => <FavoriteItem key={elem.id} {...elem}/>)
            }
        </div>
    )
}