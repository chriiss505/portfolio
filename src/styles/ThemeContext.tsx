// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { theme } from "./theme"; // Asegúrate de que la ruta sea correcta

interface ThemeContextType {
  theme: typeof theme; // Define el tipo del contexto
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentTheme] = useState(theme); // Aquí podrías manejar cambios de tema si lo deseas

  return (
    <ThemeContext.Provider value={{ theme: currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Crea un hook para usar el contexto fácilmente
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext; // Exporta el contexto si lo necesitas en otros lugares
