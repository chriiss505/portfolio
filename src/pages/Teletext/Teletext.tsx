import React from "react";
import styles from "./Teletext.module.css";
import Tag from "../../components/Tags/Tag"; // Asumiendo que tienes un componente Tag para las etiquetas
import DescriptionLayout from "../../components/DescriptionLayout/DescriptionLayout";
import Icon from "../../components/Icons/Icon";
import Carousel from "../../components/Carousel/Carousel"; // Asegúrate de la ruta correcta
import VideoCard from "../../components/VideoCard/VideoCard";
import FleetManagementCard from "../../components/FleetManagementCard/FleetManagementCard";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

/*--------------svg------------*/
import acuario from "../../assets/images/horoscopos_teletexto/acuario.png";
import libra from "../../assets/images/horoscopos_teletexto/libra.png";
import geminis from "../../assets/images/horoscopos_teletexto/geminis.png";
import escorpio from "../../assets/images/horoscopos_teletexto/horoscopo_escorpio.png";
import cancer from "../../assets/images/horoscopos_teletexto/acuario.png";
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
  return (
    <div className={styles.pageContainer}>
      {/* Primera Card */}
      <div
        className={`${styles.titleCard} ${styles.backgroundColor} ${styles.card}`}
      >
        <h1 className={styles.centerText}>Teletext</h1>
        <div className={styles.tagsContainer}>
          <Tag name="UI" />
          <Tag name="UX" />
          <Tag name="GraphicDesign" />
          <Tag name="Coding" />
        </div>
      </div>

      <div className={`${styles.card} ${styles.backgroundColor}`}>
        <div className={styles.singleColumnLayout}>
          {" "}
          {/* Cambia el layout a una sola columna */}
          <h2 className={styles.teletextFont}>Project overview:</h2>
          <p>
            This is a multidisciplinary project where we reflect on the social
            and expressive changes brought by the transition from an analog
            world to an increasingly virtual one. Inspired by the "hybrid
            imagination" of the millennial generation, we wanted to revive a
            communication format from our childhood—teletext, a hybrid bridge
            between analog and digital. Using an online real teletext coding
            tool, we explore, with irony, how products, services, and forms of
            expression are becoming obsolete in a world increasingly shaped by
            AI.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <ImageGallery images={images} />
      </div>
    </div>
  );
};

export default Teletext;
