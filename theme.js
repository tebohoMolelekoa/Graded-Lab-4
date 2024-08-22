import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    textColor: '#000',
    backgroundColor: '#fff',
  });

  const toggleTheme = () => {
    setTheme({
      textColor: theme.textColor === '#000' ? '#fff' : '#000',
      backgroundColor: theme.backgroundColor === '#fff' ? '#000' : '#fff',
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext};