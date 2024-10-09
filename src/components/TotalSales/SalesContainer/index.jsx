import React from 'react';
import SalesCard from '../SalesCard';
import s from './index.module.scss'
const SalesContainer = () => {
    return (
        <div className={s.sales_container}>
            <SalesCard/>
            <SalesCard/>
            <SalesCard/>
            <SalesCard/>
        </div>
    );
};

export default SalesContainer;