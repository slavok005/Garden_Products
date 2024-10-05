import React, { useContext } from 'react'
import { LuMoon, LuSunDim } from 'react-icons/lu'
import { ThemeContext } from '../../ThemeContext'

const Nav = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <nav className={`nav ${theme === "dark" ? "bg-nav-dark" : ""}`}>
        <div className="container">
            <a href="" className='nav-logo'>Logo</a>

            <ul className='nav-list'>
                <li><a href="" className='nav__item'>Main Page</a></li>
                <li><a href="" className='nav__item'>Categories</a></li>
                <li><a href="" className='nav__item'>All product</a></li>
                <li><a href="" className='nav__item'>All sales</a></li>
            </ul>

            <div className="switch" onClick={toggleTheme}>
              {
                theme === "dark" 
                ? <LuMoon className='switch-icon'/> 
                : <LuSunDim className='switch-icon'/>
              }

            </div>
        </div>
    </nav>
  )
}

export default Nav