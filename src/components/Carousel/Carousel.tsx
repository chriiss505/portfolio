import React, { useState, useRef, useEffect } from "react";
import styles from "./Carousel.module.css";
import Icon from "../Icons/Icon"; // Componente Icon con onClick
import Modal from "../Modal/Modal"; // Componente Modal
import arrowLeft from "../../assets/images/left.svg"; // Iconos de flechas
import arrowRight from "../../assets/images/right.svg";
import image1 from "../../assets/images/street_pid_1.png"; // Imágenes del carrusel
import image2 from "../../assets/images/street_pid_2.png";
import image3 from "../../assets/images/street_pid_2.png";
import image4 from "../../assets/images/sio_turning_v3.gif";

interface CarouselProps {
  titleColor?: string; // Propiedad opcional para el color del título
}

const Carousel: React.FC<CarouselProps> = ({ titleColor }) => {
  const images = [image1, image2, image3]; // Arreglo de imágenes
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Índice actual de la imagen
  const [modalImage, setModalImage] = useState<string | null>(null); // Imagen para el modal
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Referencia del contenedor de scroll

  // Función para avanzar a la siguiente imagen
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    scrollToImage(nextIndex); // Desplaza la vista a la siguiente imagen
  };

  // Función para retroceder a la imagen anterior
  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    scrollToImage(prevIndex); // Desplaza la vista a la imagen anterior
  };

  // Función para hacer scroll a la imagen seleccionada
  const scrollToImage = (index: number) => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollWidth * index,
        behavior: "smooth",
      });
    }
  };

  // Abre el modal al hacer clic en una imagen
  const openModal = (image: string) => {
    setModalImage(image);
  };

  // Cierra el modal
  const closeModal = () => {
    setModalImage(null);
  };

  // Asegura que la primera imagen sea visible al cargar el componente
  useEffect(() => {
    scrollToImage(currentIndex);
  }, [currentIndex]);

  return (
    <div className={`${styles.card} ${styles.whiteBackground}`}>
      <div className={styles.twoThirdsLayout}>
        <div className={styles.leftColumn}>
          <h2 style={{ color: titleColor || "inherit" }}>Product Pictures</h2>{" "}
          {/* Usa el color de la prop */}
          <div className={styles.arrowsContainer}>
            <Icon src={arrowLeft} alt="Previous" onClick={prevImage} />{" "}
            {/* Flecha izquierda */}
            <Icon src={arrowRight} alt="Next" onClick={nextImage} />{" "}
            {/* Flecha derecha */}
          </div>
        </div>

        <div className={styles.carousel} ref={scrollContainerRef}>
          <div className={styles.scrollContainer}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Carousel Image ${index + 1}`}
                className={`${styles.carouselImage} ${
                  index === currentIndex ? styles.active : ""
                }`}
                onClick={() => openModal(image)} // Abre el modal
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal para la imagen seleccionada */}
      {modalImage && <Modal image={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default Carousel;
