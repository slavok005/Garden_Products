import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if(theme === "ligth"){
            setTheme("dark")
        }else {
            setTheme("ligth")
        }
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}