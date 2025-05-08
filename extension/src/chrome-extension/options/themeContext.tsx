
import { createContext, useEffect, useContext, useState, ChangeEventHandler} from 'react'
import React from 'react'
import '../options/options.css'

type Theme = "light" | "dark"

interface ThemeContextInterface{
    theme: Theme;
    toggleTheme: () => void;
}

let ThemeContext = createContext<ThemeContextInterface | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
      const saved = localStorage.getItem("theme");
      return (saved as Theme) || "light";
});

useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };


return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextInterface => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
  };
  





