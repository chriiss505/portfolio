import React, { useState } from "react";
import styles from "./Carousel2.module.css"; // Asegúrate de que el nombre del archivo CSS sea correcto
import arrowLeft from "../../assets/images/left.svg"; // Icono de flecha izquierda
import arrowRight from "../../assets/images/right.svg"; // Icono de flecha derecha
import Icon from "../Icons/Icon";

interface CarouselProps {
  images: string[]; // Prop para las imágenes
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.carouselImage}
      />
      <div className={styles.arrowsContainer}>
        <Icon src={arrowLeft} alt="Previous" onClick={prevImage} />{" "}
        {/* Flecha izquierda */}
        <Icon src={arrowRight} alt="Next" onClick={nextImage} />{" "}
      </div>
    </div>
  );
};

export default Carousel;
