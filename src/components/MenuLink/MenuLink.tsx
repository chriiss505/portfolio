import React from "react";
import { Link } from "react-scroll"; // Importa de react-scroll
import styles from "./MenuLink.module.css";

interface MenuLinkProps {
  text: string;
  link?: string; // Propiedad opcional
  onClick?: () => void; // Callback opcional para manejar click
}

const MenuLink: React.FC<MenuLinkProps> = ({ text, link, onClick }) => {
  return link ? (
    <Link
      className={styles.menuLink} // Aplica el estilo directamente
      to={link}
      smooth={true}
      duration={500}
      onClick={onClick}
    >
      {text}
    </Link>
  ) : (
    <button className={styles.menuLink} onClick={onClick}>
      {" "}
      {/* Aplica el estilo al botón también */}
      {text}
    </button>
  );
};

export default MenuLink;
