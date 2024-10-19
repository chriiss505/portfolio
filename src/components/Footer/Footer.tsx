import React from "react";
import styles from "./Footer.module.css"; // Ajusta la ruta según sea necesario
import { useNavigate } from "react-router-dom"; // Para manejar la navegación
import { Link as ScrollLink } from "react-scroll"; // Importa el componente Link de react-scroll

const Footer: React.FC = () => {
  const navigate = useNavigate(); // Hook para manejar la navegación

  const handleScrollToSection = (section: string) => {
    navigate("/"); // Redirige primero a la página principal
    setTimeout(() => {
      const element = document.getElementById(section); // Selecciona la sección
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Tiempo para asegurarse de que la página principal cargue antes del scroll
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <nav className={styles.footerNav}>
          <a onClick={() => handleScrollToSection("the-work")}>The Work</a>
          <a onClick={() => handleScrollToSection("about")}>About</a>
          <a onClick={() => handleScrollToSection("contact")}>Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </nav>
        <p className={styles.footerText}>
          Created with React + TypeScript by Cristina Sanchez © 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
