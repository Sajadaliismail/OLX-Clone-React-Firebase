import React, { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function Themes({children}){
    const [theme,setTheme] = useState(false)

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

