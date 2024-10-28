import React from "react";
import styles from "./AboutCard.module.css"; // Asegúrate de crear el archivo CSS correspondiente
import sioWagging from "../../assets/images/sio_turning_v3.gif";
import { useTranslation } from "react-i18next"; // Importa el hook

const AboutCard: React.FC = () => {
  const { t } = useTranslation(); // Usa el hook

  return (
    <div className={styles.aboutCard}>
      <div className={styles.leftColumn}>
        <p>
          <span className={styles.redText}>{t("aboutCard.intro")}</span>
          <span className={styles.redText}>
            {t("aboutCard.description")}
          </span>{" "}
          <span className={styles.redText}>{t("aboutCard.experience")}</span>{" "}
          {t("aboutCard.stack")}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
