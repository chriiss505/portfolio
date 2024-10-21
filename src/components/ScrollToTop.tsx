import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana hacia la parte superior
  }, [pathname]);

  return null; // Este componente no necesita renderizar nada
};

export default ScrollToTop;
