import React from 'react'
import AllCategories from '../../components/AllCategories';
import { Link } from 'react-router-dom';
import s from './index.module.scss'

const CategoriesPage = () => {
  return (
    <div>
    <div className={s.breadcrumbs}>
        <div className={s.crumbBox}>
          <Link to="/" className={s.crumbText}>
            Main page
          </Link>
        </div>
        <div className={s.line}></div>
        <div className={s.crumbBox}>
          <div className={s.crumbText}>
            All categories
          </div>
        </div>
      </div>
      <AllCategories />
    </div>
  )
}

export default CategoriesPage