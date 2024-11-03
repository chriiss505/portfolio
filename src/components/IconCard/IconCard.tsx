import React from "react";
import styles from "./IconCard.module.css"; // Ajusta la ruta según sea necesario

interface IconCardProps {
  text: string;
  imgSrc?: string; // Prop opcional
  rightImgSrc?: string; // Prop opcional
  link?: string; // Prop opcional para el enlace
  className: string; // Agrega el prop para la clase
}

const IconCard: React.FC<IconCardProps> = ({
  text,
  imgSrc,
  rightImgSrc,
  link,
  className,
}) => {
  const content = link ? (
    <a
      href={link}
      className={styles.iconCardTitle}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  ) : (
    <h3 className={styles.iconCardTitle}>{text}</h3>
  );

  return (
    <div className={`${className} `}>
      {imgSrc && <img src={imgSrc} alt="Left Icon" className={styles.icon} />}
      {content}
      {rightImgSrc && (
        <img src={rightImgSrc} alt="Right Icon" className={styles.icon} />
      )}
    </div>
  );
};

export default IconCard;
