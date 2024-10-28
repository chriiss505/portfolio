import React from "react";
import styles from "./Footer.module.css"; // Ajusta la ruta según sea necesario
import { useNavigate } from "react-router-dom"; // Para manejar la navegación
import { useTranslation } from "react-i18next"; // Importa el hook

const Footer: React.FC = () => {
  const { t } = useTranslation(); // Obtén la función t
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
          <a onClick={() => handleScrollToSection("the-work")}>
            {t("footer.theWork")}
          </a>
          <a onClick={() => handleScrollToSection("about")}>
            {t("footer.about")}
          </a>
          <a onClick={() => handleScrollToSection("contact")}>
            {t("footer.contact")}
          </a>
          <a href="/privacy-policy">{t("footer.privacyPolicy")}</a>
        </nav>
        <p className={styles.footerText}>{t("footer.credits")}</p>
      </div>
    </footer>
  );
};

export default Footer;
