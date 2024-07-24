import React from 'react';

export const switchTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'coffee' ? 'light' : 'coffee';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);  // Save the theme change to localStorage
};

const ThemeToggle = () => {
    return (
   <></>
    );
};

export default ThemeToggle;
