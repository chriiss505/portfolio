import React from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import { Translation, useTranslation } from "react-i18next";

interface ModalProps {
  image: string;
  onClose: () => void; // Callback para cerrar el modal
}

const Modal: React.FC<ModalProps> = ({ image, onClose }) => {
  const { t } = useTranslation(); // Inicializa la función de traducción

  // Manejador para detener la propagación del clic en el contenido
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={handleContentClick}>
        <img className={styles.modalImage} src={image} alt="Enlarged" />
        <button onClick={onClose} className={styles.closeButton}>
          {t("Close")}
        </button>
      </div>
    </div>
  );
};

export default Modal;
