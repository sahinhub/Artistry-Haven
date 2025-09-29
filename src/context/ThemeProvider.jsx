import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('isDark');
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    // Fallback: system preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
