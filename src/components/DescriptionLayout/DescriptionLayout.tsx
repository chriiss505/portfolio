import React from "react";
import styles from "./DescriptionLayout.module.css";
import Icon from "../Icons/Icon"; // Usamos el componente de Icon

interface DescriptionLayoutProps {
  title: string;
  icons: { src: string; alt: string }[]; // Lista de iconos con src y alt
  paragraph: React.ReactNode; // Cambiado a ReactNode para aceptar JSX
}

const DescriptionLayout: React.FC<DescriptionLayoutProps> = ({
  title,
  icons,
  paragraph,
}) => {
  return (
    <div className={styles.descriptionLayout}>
      <div className={styles.leftColumnIcons}>
        <h2>{title}</h2>
        <div className={styles.iconRow}>
          {icons.map((icon, index) => (
            <Icon key={index} src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </div>
      <div className={styles.rightColumn}>{paragraph}</div>{" "}
      {/* Renderiza el JSX aquí */}
    </div>
  );
};

export default DescriptionLayout;
