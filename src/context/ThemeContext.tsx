import { createContext, useState } from 'react';
import Props from '../components/interfaces/Props';

type Theme = 'light' | 'dark';

type ThemeContextState = {
  theme: Theme;
  toggleTheme: () => void;
};

const initialTheme: Theme = 'light';

const ThemeContext = createContext<ThemeContextState>({
  theme: initialTheme,
  toggleTheme: () => {},
});

export function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    console.log('toggleTheme');
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
