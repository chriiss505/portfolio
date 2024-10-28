import React from "react";
import { useTranslation } from "react-i18next"; // Importar el hook de traducción
import styles from "./Teletext.module.css";
import Tag from "../../components/Tags/Tag"; // Asumiendo que tienes un componente Tag para las etiquetas
import ImageGallery from "../../components/ImageGallery/ImageGallery";

/*--------------svg------------*/
import acuario from "../../assets/images/horoscopos_teletexto/acuario.png";
import libra from "../../assets/images/horoscopos_teletexto/libra.png";
import geminis from "../../assets/images/horoscopos_teletexto/geminis.png";
import escorpio from "../../assets/images/horoscopos_teletexto/horoscopo_escorpio.png";
import cancer from "../../assets/images/horoscopos_teletexto/cancer.png";
import piscis from "../../assets/images/horoscopos_teletexto/piscis.png";
import aries from "../../assets/images/horoscopos_teletexto/aries.png";
import leo from "../../assets/images/horoscopos_teletexto/leo.png";
import sagitario from "../../assets/images/horoscopos_teletexto/sagitario.png";
import capricornio from "../../assets/images/horoscopos_teletexto/horoscopo_capricornio.png";
import tauro from "../../assets/images/horoscopos_teletexto/tauro.png";
import virgo from "../../assets/images/horoscopos_teletexto/virgo.png";

const images = [
  acuario,
  libra,
  geminis,
  escorpio,
  cancer,
  piscis,
  aries,
  leo,
  sagitario,
  capricornio,
  tauro,
  virgo,
  // ... más URLs
];

const Teletext: React.FC = () => {
  const { t } = useTranslation(); // Hook para traducción

  return (
    <div className={styles.pageContainer}>
      {/* Primera Card */}
      <div
        className={`${styles.titleCard} ${styles.backgroundColor} ${styles.card}`}
      >
        <h1 className={styles.centerText}>{t("teletext.title")}</h1>
        <div className={styles.tagsContainer}>
          <Tag name={t("teletext.tags.graphicDesign")} />
          <Tag name={t("teletext.tags.coding")} />
        </div>
      </div>

      <div className={`${styles.card} ${styles.backgroundColor}`}>
        <div className={styles.singleColumnLayout}>
          <h2 className={styles.teletextFont}>{t("teletext.overviewTitle")}</h2>
          <p>{t("teletext.projectDescription")}</p>
        </div>
      </div>

      <div className={styles.card}>
        <ImageGallery images={images} />
      </div>
    </div>
  );
};

export default Teletext;
