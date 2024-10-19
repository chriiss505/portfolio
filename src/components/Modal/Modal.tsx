import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  image: string;
  onClose: () => void; // Callback para cerrar el modal
}

const Modal: React.FC<ModalProps> = ({ image, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose}>Close</button>
        <img className={styles.modalImage} src={image} alt="Enlarged" />
      </div>
    </div>
  );
};

export default Modal;
