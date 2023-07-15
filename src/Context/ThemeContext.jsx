import { createContext, useEffect } from 'react';
import useStorage from 'Hooks/useStorage';

export const ThemeContext = createContext('');

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useStorage('dark-mode', false);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeChange = () => setTheme(!theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
