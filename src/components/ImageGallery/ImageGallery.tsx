import React, { useState } from "react";
import Modal from "../Modal/Modal"; // Asegúrate de tener un componente Modal
import styles from "./ImageGallery.module.css"; // Crea este archivo CSS

interface ImageGalleryProps {
  images: string[]; // Array de URLs de imágenes
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className={styles.galleryContainer}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageContainer}>
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className={styles.image}
            onClick={() => openModal(image)}
          />
        </div>
      ))}
      {modalImage && <Modal image={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default ImageGallery;
