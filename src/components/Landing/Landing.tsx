import React, { useState, useEffect } from "react";
import styles from "./Landing.module.css";
import crisTurning from "../../assets/images/cris_turning_v4.gif";
import ComputerIcon from "../Icons/ComputerIcon";
import { useTranslation } from "react-i18next";

const Landing: React.FC = () => {
  const { t } = useTranslation();

  // Textos a mostrar en bucle
  const positions = [
    t("landing.positionDesigner"),
    t("landing.positionDeveloper"),
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [speed, setSpeed] = useState(150); // Velocidad de escritura y borrado

  // Controla el efecto de escritura y borrado
  useEffect(() => {
    const handleTyping = () => {
      const fullText = positions[currentPosition];
      setDisplayedText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pausa antes de borrar
        setSpeed(50); // Velocidad de borrado
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentPosition((prev) => (prev + 1) % positions.length); // Cambia de palabra
        setSpeed(150); // Velocidad de escritura
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentPosition, speed, positions]);

  return (
    <section className={styles.landing}>
      <div className={styles.leftColumn}>
        <img src={crisTurning} alt="Animated Gif" className={styles.gif} />
      </div>
      <div className={styles.rightColumn}>
        <h1 className={styles.smaller}>{t("landing.greeting")}</h1>
        <h1 className={styles.highlighted}>{t("landing.name")}</h1>
        <h1 className={styles.position}>
          {t("landing.position")}{" "}
          <span className={styles.underlined}>{displayedText}</span>
        </h1>
        <h1 className={styles.smaller}>{t("landing.location")}</h1>
        <div className={styles.iconContainer}>
          <ComputerIcon />
        </div>
      </div>
    </section>
  );
};

export default Landing;
