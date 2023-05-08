import React, { createContext, useState } from "react";

export interface ThemeContext {
    currentTheme: string,
    setTheme( theme: string ): void
}

interface ThemeProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

export const ThemeContext = createContext<ThemeContext | null>(null);

export default function ThemeProvider({ children }: ThemeProviderProps) {
    
    const [ currentTheme, setTheme ] = useState<string>("dark");

    return <ThemeContext.Provider value={ { currentTheme, setTheme } }>
        { children }
    </ThemeContext.Provider>
}
