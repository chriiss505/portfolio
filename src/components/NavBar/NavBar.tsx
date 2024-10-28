import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import MenuLink from "../MenuLink/MenuLink";
import { useTranslation } from "react-i18next";

const NavBar: React.FC = () => {
  const { t, i18n } = useTranslation(); // Obtén el objeto i18n y la función t
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollTo = (section: string) => {
    navigate("/"); // Redirige a la página principal

    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleLogoClick = () => {
    handleScrollTo("landing"); // Hace scroll a la sección "landing"
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={handleLogoClick}>
        CS
      </div>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        {isMenuOpen ? (
          <>
            <MenuLink
              text={t("navBar.home")} // Traducción para "Home"
              onClick={() => {
                handleScrollTo("landing");
                setIsMenuOpen(false);
              }}
              isHamburger={true}
            />
            <MenuLink
              text={t("navBar.work")} // Traducción para "The Work"
              onClick={() => {
                handleScrollTo("the-work");
                setIsMenuOpen(false);
              }}
              isHamburger={true}
            />
            <MenuLink
              text={t("navBar.about")} // Traducción para "About"
              onClick={() => {
                handleScrollTo("about");
                setIsMenuOpen(false);
              }}
              isHamburger={true}
            />
            <MenuLink
              text={t("navBar.contact")} // Traducción para "Contact"
              onClick={() => {
                handleScrollTo("contact");
                setIsMenuOpen(false);
              }}
              isHamburger={true}
            />
            <span
              onClick={() =>
                changeLanguage(i18n.language === "en" ? "es" : "en")
              }
              className={styles.languageLink}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  changeLanguage(i18n.language === "en" ? "es" : "en");
              }}
            >
              {i18n.language === "en" ? "ESPAÑOL" : "ENGLISH"}
            </span>
          </>
        ) : (
          <>
            <MenuLink
              text={t("navBar.home")} // Traducción para "Home"
              onClick={() => {
                handleScrollTo("landing");
                setIsMenuOpen(false);
              }}
            />
            <MenuLink
              text={t("navBar.work")} // Traducción para "The Work"
              onClick={() => {
                handleScrollTo("the-work");
                setIsMenuOpen(false);
              }}
            />
            <MenuLink
              text={t("navBar.about")} // Traducción para "About"
              onClick={() => {
                handleScrollTo("about");
                setIsMenuOpen(false);
              }}
            />
            <MenuLink
              text={t("navBar.contact")} // Traducción para "Contact"
              onClick={() => {
                handleScrollTo("contact");
                setIsMenuOpen(false);
              }}
            />
            <span
              onClick={() =>
                changeLanguage(i18n.language === "en" ? "es" : "en")
              }
              className={styles.languageLink}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  changeLanguage(i18n.language === "en" ? "es" : "en");
              }}
            >
              {i18n.language === "en" ? "ES" : "EN"}
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
