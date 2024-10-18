import React from 'react'
import NavigationBranch from '../../components/NavigationBranch';
import s from './index.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import FavoriteItemsContainer from '../../components/FavoriteContainer';
import { delteAllFavorite } from '../../store/reducers/favoriteReducer';
import { Link } from 'react-router-dom';

export default function FavoritePage() {

    const favoriteState = useSelector(store => store.favorite);

    const dispatch = useDispatch();

return (
    <div>
        <NavigationBranch />
        <div className={s.favorites}>
            <div className={s.favheader}>
                <h2>Liked Products</h2>
                <div className={s.line}></div>
                <button className={s.backtostorebtn}>
                    <Link to='/products'>Back to the store</Link>
                </button>
            </div>            
        {
            favoriteState.length === 0
            ? <div className={s.favoritesempty}>
                <p>Looks like you have no items to your favorites</p>
                <button className={s.continuebtn}>
                    <Link to='/products'>Continue Shopping</Link>
                </button>
            </div>
            : <div>
                <FavoriteItemsContainer favorite={favoriteState} />
                <button onClick={() => dispatch(delteAllFavorite())}>
                    Delete All
                </button>
            </div>
        }
        </div>
    </div>
)
}
