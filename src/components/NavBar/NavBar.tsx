import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import MenuLink from "../MenuLink/MenuLink";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollTo = (section: string) => {
    navigate("/"); // Redirige a la página principal

    // Desplazarte a la sección deseada después de un breve retraso
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
              text="Home"
              onClick={() => {
                handleScrollTo("landing");
                setIsMenuOpen(false);
              }}
            />
            <MenuLink
              text="The Work"
              onClick={() => {
                handleScrollTo("the-work");
                setIsMenuOpen(false);
              }}
            />
            <MenuLink
              text="About"
              onClick={() => {
                handleScrollTo("about");
                setIsMenuOpen(false);
              }}
            />
            <MenuLink
              text="Contact"
              onClick={() => {
                handleScrollTo("contact");
                setIsMenuOpen(false);
              }}
            />
          </>
        ) : (
          <>
            <MenuLink
              text="Home"
              onClick={() => {
                handleScrollTo("landing");
                setIsMenuOpen(false);
              }}
            />
            <MenuLink
              text="The Work"
              onClick={() => {
                handleScrollTo("the-work");
                setIsMenuOpen(false);
              }}
            />
            <MenuLink
              text="About"
              onClick={() => {
                handleScrollTo("about");
                setIsMenuOpen(false);
              }}
            />
            <MenuLink
              text="Contact"
              onClick={() => {
                handleScrollTo("contact");
                setIsMenuOpen(false);
              }}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
