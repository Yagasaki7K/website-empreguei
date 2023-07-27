import React, { createContext, useState } from 'react';
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import usePersistedState from '@/utils/usePersistedState';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = usePersistedState('theme', 'light'); // Set the initial theme here
    const [isChecked, setIsChecked] = usePersistedState('isChecked', false);

    const toggleTheme = () => {
        console.log(`caiu aqui, prevTheme: ${theme}, check: ${isChecked}`);
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
        setIsChecked((prevChecked) => !prevChecked);
    };


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isChecked }}>
          <StyledThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            {children}
          </StyledThemeProvider>
        </ThemeContext.Provider>
      );
};