// Landing.tsx
import React from "react";
import styles from "./Landing.module.css"; // Asegúrate de crear este archivo CSS
import crisTurning from "../../assets/images/cris_turning_v4.gif";
import ComputerIcon from "../Icons/ComputerIcon"; // Importa el nuevo componente
import { useTranslation } from "react-i18next"; // Importa el hook

const Landing: React.FC = () => {
  const { t } = useTranslation(); // Obtén la función t

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
        <h1>{t("landing.greeting")}</h1> {/* Traducción para el saludo */}
        <h1 className={styles.highlighted}>{t("landing.name")}</h1>{" "}
        {/* Traducción para el nombre */}
        <h1>{t("landing.description")}</h1>{" "}
        {/* Traducción para la descripción */}
        <div className={styles.iconContainer}>
          <ComputerIcon color="var(--text-color)" />{" "}
          {/* Puedes cambiar el color aquí */}
        </div>
      </div>
    </section>
  );
};

export default Landing;
