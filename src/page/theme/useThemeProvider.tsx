import { useTheme } from './useTheme';
import { ThemeContext } from './useThemeContext';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
