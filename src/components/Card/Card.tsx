import React from "react";
import styles from "./Card.module.css"; // Importamos los estilos de Card como módulo
import Button from "../Button/Button"; // Importa el componente Button
import Tag from "../Tags/Tag";
import { Translation, useTranslation } from "react-i18next";

interface CardProps {
  imageSrc: string;
  title: string;
  tags: string[];
  description: string;
  readMoreLink: string;
  backgroundColor: string;
  textColor?: string; // Cambia a opcional
  className?: string; // Agrega el prop para la clase
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  tags,
  description,
  readMoreLink,
  backgroundColor,
  textColor = "inherit", // Valor predeterminado
  className, // Agrega el className aquí
}) => {
  const { t } = useTranslation(); // Inicializa la función de traducción
  return (
    <div className={`${styles.card} ${className}`} style={{ backgroundColor }}>
      {/* Aplica el color de fondo dinámicamente */}
      <div className={styles.cardLeft}>
        <img src={imageSrc} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardRight} style={{ color: textColor }}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardTags}>
          {tags.map((tag, index) => (
            <Tag key={index} name={tag} />
          ))}
        </div>
        <div className={styles.cardButton}>
          <Button text={t("readMore")} link={readMoreLink} />
        </div>
      </div>
    </div>
  );
};

export default Card;
