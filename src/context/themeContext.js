import { createContext, useState } from "react";

export const ThemeContext=createContext();
export default function ThemeContextProvider({children}){
    
    const [theme,setTheme]=useState(false);
    const toggleTheme=()=>{
        setTheme(!theme);
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>

    )
}