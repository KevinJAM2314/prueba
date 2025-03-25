// components/ThemeProvider.tsx
"use client";

import { useState, useEffect } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string | null>(null);

  // Persistir el tema en el almacenamiento local
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Si no hay tema guardado, establecer el predeterminado
      setTheme("dark");
    }
  }, []);

  // Aplicar el tema a <body> cuando se haya cargado
  useEffect(() => {
    if (theme) {
      document.body.classList.remove("dark-theme", "light-theme");
      document.body.classList.add(`${theme}-theme`);
    }
  }, [theme]);

  // Si el tema no está listo, muestra un cargador (opcional)
  if (theme === null) return <div>Loading...</div>;

  return <>{children}</>;
};

export default ThemeProvider;