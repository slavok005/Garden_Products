import React from 'react';
import s from './index.module.scss';
import { Link } from 'react-router-dom';

function Favorites() {
    return(
        <div className={s.favorites}>
            <div className={s.favheader}>
                <h2>Liked products</h2>
            </div>
        </div>   
    )
}

export default Favorites;