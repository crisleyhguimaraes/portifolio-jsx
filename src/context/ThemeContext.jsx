import React, { createContext, useState, useContext, useEffect } from "react";
import { theme as defaultTheme } from "../styles/theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [theme, setTheme] = useState(defaultTheme);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const lightTheme = {
            ...defaultTheme,
            colors: {
                ...defaultTheme.colors,
                background: {
                    default: "#FFFFFF",
                    paper: "#F5F5F5",
                    variant: "#E0E0E0",
                },
                text: {
                    primary: "#333333",
                    secondary: "rgba(0, 0, 0, 0.7)",
                    disabled: "rgba(0, 0, 0, 0.5)",
                },
            },
        };

        setTheme(isDarkMode ? defaultTheme : lightTheme);
        document.body.style.backgroundColor = isDarkMode
            ? defaultTheme.colors.background.default
            : lightTheme.colors.background.default;
        document.body.style.color = isDarkMode
            ? defaultTheme.colors.text.primary
            : lightTheme.colors.text.primary;
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
