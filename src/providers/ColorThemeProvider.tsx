import { useTheme } from 'next-themes';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const colors = [
    { name: 'Default', value: 'zinc' },
    // { name: 'White', value: 'white' },
    // { name: 'Gray', value: 'gray' },
    { name: 'Blue', value: 'blue' },
    { name: 'Neon', value: 'aqua' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Red', value: 'red' },
    { name: 'Green', value: 'green' },
    // { name: 'Orange', value: 'orange' },
    // { name: 'Pink', value: 'pink' },
    { name: 'Purple', value: 'purple' },
];

const ColorThemeContext = createContext<{
    currentColor: string;
    setColor: (color: string) => void;
}>({
    currentColor: 'zinc',
    setColor: () => { },
});

export const useColorTheme = () => useContext(ColorThemeContext);

export const ColorThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentColor, setCurrentColor] = useState('zinc');
    const { theme } = useTheme()
    const setColor = (color: string) => {
        document.documentElement.classList.remove(...colors.map(c => `theme-${c.value}`));
        document.documentElement.classList.add(`theme-${color}`);
        localStorage.setItem('color-theme', color);
        setCurrentColor(color);
    };

    useEffect(() => {
        const savedColor = localStorage.getItem('color-theme');
        if (savedColor) {
            setColor(savedColor);
        }

    }, []);



    return (
        <ColorThemeContext.Provider value={{ currentColor, setColor }}>
            {children}
        </ColorThemeContext.Provider>
    );
};