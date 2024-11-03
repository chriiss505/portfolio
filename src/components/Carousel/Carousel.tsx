import React, { useState, useRef } from "react";
import styles from "./Carousel.module.css";
import Modal from "../Modal/Modal"; // Componente Modal
import { useTranslation } from "react-i18next";

import image1 from "../../assets/images/street_pid_1.png"; // Imágenes del carrusel
import image2 from "../../assets/images/street_pid_2.png";
import image3 from "../../assets/images/street_pid_3.png";
import image4 from "../../assets/images/street_pid_4.png";
import image5 from "../../assets/images/street_pid_5.png";

interface CarouselProps {
  titleColor?: string; // Propiedad opcional para el color del título
}

const Carousel: React.FC<CarouselProps> = ({ titleColor }) => {
  const images = [image1, image4, image5]; // Arreglo de imágenes
  const [modalImage, setModalImage] = useState<string | null>(null); // Imagen para el modal
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Referencia del contenedor de scroll
  const { t } = useTranslation();

  // Abre el modal al hacer clic en una imagen
  const openModal = (image: string) => {
    setModalImage(image);
  };

  // Cierra el modal
  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className={`${styles.card} ${styles.whiteBackground}`}>
      <div className={styles.carouselHeader}>
        <h2 style={{ color: titleColor || "inherit" }}>
          {t("carousel.title")}
        </h2>
      </div>

      <div className={styles.carousel} ref={scrollContainerRef}>
        <div className={styles.scrollContainer}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Carousel Image ${index + 1}`}
              className={styles.carouselImage}
              onClick={() => openModal(image)} // Abre el modal al hacer clic en una imagen
            />
          ))}
        </div>
      </div>

      {/* Modal para la imagen seleccionada */}
      {modalImage && <Modal image={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default Carousel;
