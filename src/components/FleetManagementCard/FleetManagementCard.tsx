import React from "react";
import styles from "./FleetManagementCard.module.css"; // Asegúrate de crear este archivo CSS
import Icon from "../Icons/Icon"; // Asegúrate de que la ruta del componente Icon sea correcta
import Carousel2 from "../Carousel/Carousel2"; // Asegúrate de que la ruta del componente Carousel sea correcta

interface FleetManagementCardProps {
  title: string;
  iconSrc: string; // URL del icono
  images: string[]; // Array de URLs de imágenes para el carrusel
}

const FleetManagementCard: React.FC<FleetManagementCardProps> = ({
  title,
  iconSrc,
  images,
}) => {
  return (
    <div className={styles.fleetManagementCard}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.iconContainer}>
          <Icon src={iconSrc} alt={`${title} icon`} />
        </div>
        <div className={styles.carouselContainer}>
          <Carousel2 images={images} />
        </div>
        <p className={styles.disclaimer}>
          *This are wireframes to get a hint of the complexity of the “Fleet
          management system”. I can’t upload real pictures of the product due to
          data protection. You can contact me if you wish to know more about the
          projects.
        </p>
      </div>
    </div>
  );
};

export default FleetManagementCard;
