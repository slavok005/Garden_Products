import React, { useContext } from 'react'
import AllCategories from '../../components/AllCategories';
import { Link } from 'react-router-dom';
import s from './index.module.scss'
import { ThemeContext } from '../../ThemeContext';

const CategoriesPage = () => {
  const {theme} = useContext(ThemeContext);
  
  return (
    <div>
    <div className={s.breadcrumbs}>
        <div className={s.crumbBox}>
          <Link to="/" className={s.crumbText}>
            <div className={s.crumbText}>
              Main page
            </div>
          </Link>
        </div>
        <div className={s.line}></div>
        <div className={s.crumbBox}>
          <div className={`${s.crumbTextMain} ${theme === 'dark' ? s['crumbTextMain-dark'] : ''}`}>
            Categories
          </div>
        </div>
      </div>
      <AllCategories />
    </div>
  )
}

export default CategoriesPage