import React from 'react';
import s from './index.module.scss';
import SalesContainer from './SalesContainer';

const TotalSales = () => {

    return (
        <div className={s.sales_container}>
        <div className={s.header}>
            <h2>Sale</h2>
            <div className={s.line}></div>
            <button className={s.allSalesButton}>All sales</button>
        </div>
        <SalesContainer/>
        </div>
  );



};

export default TotalSales;

