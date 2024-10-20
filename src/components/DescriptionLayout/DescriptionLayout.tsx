import React from "react";
import styles from "./DescriptionLayout.module.css";
import Icon from "../Icons/Icon"; // Usamos el componente de Icon

interface DescriptionLayoutProps {
  title: string;
  icons: { src: string; alt: string }[]; // Lista de iconos con src y alt
  paragraph: React.ReactNode; // Cambiado a ReactNode para aceptar JSX
  titleColor?: string; // Agrega la propiedad para el color del título
}

const DescriptionLayout: React.FC<DescriptionLayoutProps> = ({
  title,
  icons,
  paragraph,
  titleColor = "inherit", // Valor predeterminado
}) => {
  return (
    <div className={styles.descriptionLayout}>
      <div className={styles.leftColumnIcons}>
        <h2 style={{ color: titleColor }}>{title}</h2>{" "}
        {/* Aplica el color del título */}
        <div className={styles.iconRow}>
          {icons.map((icon, index) => (
            <Icon key={index} src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </div>
      <div className={styles.rightColumn}>{paragraph}</div>
    </div>
  );
};

export default DescriptionLayout;
