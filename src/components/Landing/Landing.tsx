// Landing.tsx
import React from "react";
import styles from "./Landing.module.css"; // Asegúrate de crear este archivo CSS
import crisTurning from "../../assets/images/cris_turning_v4.gif";
import ComputerIcon from "../Icons/ComputerIcon"; // Importa el nuevo componente

const Landing: React.FC = () => {
  return (
    <section className={styles.landing}>
      <div className={styles.leftColumn}>
        <img
          src={crisTurning} // Cambia esto por tu gif animado
          alt="Animated Gif"
          className={styles.gif}
        />
      </div>
      <div className={styles.rightColumn}>
        <h1>Hello! I am</h1>
        <h1 className={styles.highlighted}>Cristina Sánchez</h1>
        <h1>Barcelona based Fullstack designer</h1>
        <div className={styles.iconContainer}>
          <ComputerIcon color="var(--text-color)" />{" "}
          {/* Puedes cambiar el color aquí */}
        </div>
      </div>
    </section>
  );
};

export default Landing;
