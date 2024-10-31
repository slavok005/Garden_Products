import React, { useContext, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';
import s from "./index.module.scss"
import { ThemeContext } from '../../ThemeContext';


const Layout = () => {

    const {theme} = useContext(ThemeContext);


    return (
        <div 
        className={`${s.theme} ${theme === 'dark' ? s['theme-dark'] : ''}`}
        >
            <Header/>

            <main 
            >
                <Outlet />
            </main>

            <Footer/>
        </div>
    );
};

export default Layout;