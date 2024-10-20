import React from "react";
import styles from "./Card.module.css"; // Importamos los estilos de Card como módulo
import Button from "../Button/Button"; // Importa el componente Button
import Tag from "../Tags/Tag";

interface CardProps {
  imageSrc: string;
  title: string;
  tags: string[];
  description: string;
  readMoreLink: string;
  backgroundColor: string;
  className?: string; // Agrega el prop para la clase
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  tags,
  description,
  readMoreLink,
  backgroundColor,
  className, // Agrega el className aquí
}) => {
  return (
    <div className={`${styles.card} ${className}`} style={{ backgroundColor }}>
      {/* Aplica el color de fondo dinámicamente */}
      <div className={styles.cardLeft}>
        <img src={imageSrc} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardRight}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardTags}>
          {tags.map((tag, index) => (
            <Tag key={index} name={tag} />
          ))}
        </div>
        <div className={styles.cardButton}>
          <Button text="Read More" link={readMoreLink} />
        </div>
      </div>
    </div>
  );
};

export default Card;
