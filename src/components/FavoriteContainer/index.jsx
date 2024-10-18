import React from 'react';
import FavoriteItem from '../FavoriteItem';


export default function FavoriteItemsContainer({ favorite }) {
    return (
        <div>
            {
                favorite.map(elem => <FavoriteItem key={elem.id} {...elem}/>)
            }
        </div>
    )
}