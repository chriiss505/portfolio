import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  link?: string; // Hacer el enlace opcional
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  // Si hay un link, renderiza un Link, de lo contrario un span o un div
  return link ? (
    <Link to={link} className={styles.button}>
      {text}
    </Link>
  ) : (
    <span className={styles.button}>{text}</span> // Cambia a span o div según tus necesidades
  );
};

export default Button;
