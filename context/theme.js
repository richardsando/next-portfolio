import { createContext, useState, useEffect } from "react";

export const Context = createContext();

Const Theme = ({children}) => {
    const getInitalTheme = () => JSON.parse(localStorage.getItem("theme"))
    const [theme,setTheme] = useState("dark")
}

useEffect(() => {
    const initialTheme = getInitalTheme()
    if(initialTheme) {
        setTheme(initialTheme)
    }
}, [])

useEffect(() => {
    localStorage.setItem
})