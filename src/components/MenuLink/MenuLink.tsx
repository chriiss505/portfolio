import React from "react";
import { Link } from "react-scroll"; // Importa de react-scroll
import styles from "./MenuLink.module.css";

interface MenuLinkProps {
  text: string;
  link?: string; // Propiedad opcional
  onClick?: () => void; // Callback opcional para manejar click
  isHamburger?: boolean; // Propiedad opcional para indicar si es un menú hamburguesa
}

const MenuLink: React.FC<MenuLinkProps> = ({
  text,
  link,
  onClick,
  isHamburger,
}) => {
  const linkClass = isHamburger
    ? `${styles.menuLink} ${styles.hamburgerMenuLink}`
    : styles.menuLink; // Aplica clase dependiendo del estado

  return link ? (
    <Link
      className={linkClass} // Aplica el estilo directamente
      to={link}
      smooth={true}
      duration={500}
      onClick={onClick}
    >
      {text}
    </Link>
  ) : (
    <button className={linkClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default MenuLink;
