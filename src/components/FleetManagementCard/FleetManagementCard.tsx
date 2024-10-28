import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import styles from "./FleetManagementCard.module.css"; // Asegúrate de crear este archivo CSS
import Icon from "../Icons/Icon"; // Asegúrate de que la ruta del componente Icon sea correcta
import Carousel2 from "../Carousel/Carousel2"; // Asegúrate de que la ruta del componente Carousel sea correcta

interface FleetManagementCardProps {
  titleKey: string; // Key for translation
  iconSrc: string; // URL del icono
  images: string[]; // Array de URLs de imágenes para el carrusel
}

const FleetManagementCard: React.FC<FleetManagementCardProps> = ({
  titleKey,
  iconSrc,
  images,
}) => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <div className={styles.fleetManagementCard}>
      <div className={styles.content}>
        <h2 className={styles.title}>{t(titleKey)}</h2>{" "}
        {/* Use translation for title */}
        <div className={styles.iconContainer}>
          <Icon src={iconSrc} alt={`${t(titleKey)} icon`} />
        </div>
        <div className={styles.carouselContainer}>
          <Carousel2 images={images} />
        </div>
        <p className={styles.disclaimer}>
          {t("fleetManagementCard.disclaimer")}{" "}
          {/* Use translation for disclaimer */}
        </p>
      </div>
    </div>
  );
};

export default FleetManagementCard;
