import React from "react";
import styles from "./StreetPID.module.css";
import Tag from "../../components/Tags/Tag"; // Asumiendo que tienes un componente Tag para las etiquetas
import DescriptionLayout from "../../components/DescriptionLayout/DescriptionLayout";
import Icon from "../../components/Icons/Icon";
import Carousel from "../../components/Carousel/Carousel"; // Asegúrate de la ruta correcta
import { useTranslation } from "react-i18next"; // Importa el hook useTranslation
import { useNavigate } from "react-router-dom"; // Importa useNavigate

/*--------------picture------------*/

import mainPicture from "../../assets/images/street_pid_11.png";

/*--------------icons------------*/

import illustrator from "../../assets/images/ai_logo.png";
import photoshop from "../../assets/images/ps_logo.png";
import androidStudio from "../../assets/images/android_logo.png";
import openWeather from "../../assets/images/weather_api.png";
import figma from "../../assets/images/figma_logo.png";

/*--------------svg------------*/
import computer from "../../assets/images/computer_v2.svg";
import keyboard from "../../assets/images/keyboard.svg";
import sakura from "../../assets/images/sakura.svg";
import arrowRight from "../../assets/images/right.svg";
import arrowLeft from "../../assets/images/left.svg";

import handw from "../../assets/images/handw.svg";

const StreetPID: React.FC = () => {
  const { t } = useTranslation(); // Inicializa la función de traducción
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleNextProject = () => {
    navigate("/onboard-pid"); // Cambia la ruta según el path de OnBoardPID
  };

  return (
    <div className={styles.pageContainer}>
      {/* Primera Card */}
      <div
        className={`${styles.titleCard} ${styles.backgroundColor} ${styles.card}`}
      >
        <h1 className={styles.centerText}>{t("streetPID.title")}</h1>{" "}
        {/* Traducción del título */}
        <div className={styles.tagsContainer}>
          <Tag name="UI" />
          <Tag name="UX" />
          <Tag name="GraphicDesign" />
          <Tag name="Coding" />
        </div>
      </div>

      {/* Segunda Card */}
      <div className={`${styles.card} ${styles.backgroundColor}`}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.leftColumnProject}>
            <h2>{t("streetPID.projectOverview")}</h2>{" "}
            {/* Traducción de "Project Overview" */}
            <p>
              <strong>{t("streetPID.goals")}</strong>{" "}
              {t("streetPID.goalsDescription")}
            </p>
            <p>
              <strong>{t("streetPID.clients")}</strong>{" "}
              {t("streetPID.clientList")}
            </p>
            <p>
              <strong>{t("streetPID.myRole")}</strong>{" "}
              {t("streetPID.roleDescription")}
            </p>
            <p>
              <strong>{t("streetPID.featuredIn")}</strong>
              <a
                href="https://www.diaridesabadell.com/2023/03/30/autobusos-tus-sabadell/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("streetPID.diariLink")}
              </a>
            </p>
            <p>
              <strong>{t("streetPID.video")}</strong>
              <a
                href="https://www.instagram.com/reel/C3GR5nEMAaX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("streetPID.videoLink")}
              </a>
            </p>
          </div>
          <div className={styles.rightColumnProject}>
            <img
              src={mainPicture}
              className={styles.border10}
              alt={t("streetPID.projectImageAlt")} // Traducción del alt
            />
          </div>
        </div>
      </div>

      {/* Tercera Card */}
      <div className={`${styles.card} ${styles.whiteBackground}`}>
        <DescriptionLayout
          title={t("streetPID.technologiesTitle")} // Traducción del título
          titleColor="var(--section-1-title)"
          icons={[
            { src: illustrator, alt: "Icon 1" },
            { src: photoshop, alt: "Icon 2" },
            { src: openWeather, alt: "Icon 3" },
            { src: androidStudio, alt: "Icon 4" },
            { src: figma, alt: "Icon 5" },
          ]}
          paragraph={
            <ul>
              <li>
                <strong>{t("streetPID.devEnvironment")}</strong>{" "}
                {t("streetPID.androidStudio")}
              </li>
              <li>
                <strong>{t("streetPID.programmingLanguages")}</strong>{" "}
                {t("streetPID.java")}
              </li>
              <li>
                <strong>{t("streetPID.designTools")}</strong>{" "}
                {t("streetPID.figmaPhotoshop")}
              </li>
              <li>
                <strong>{t("streetPID.apis")}</strong>
                <ul>
                  <li>{t("streetPID.itsApi")}</li>
                  <li>{t("streetPID.weatherApi")}</li>
                </ul>
              </li>
            </ul>
          }
        />
        <hr className={styles.separator} />
        <DescriptionLayout
          title={t("streetPID.architectureTitle")} // Traducción del título
          titleColor="var(--section-1-title)"
          icons={[{ src: computer, alt: "Icon 6" }]}
          paragraph={
            <>
              <p>{t("streetPID.architectureDescription")}</p>
              <ul>
                <li>{t("streetPID.dataPointsBusArrival")}</li>
                <li>{t("streetPID.dataPointsOptional")}</li>
              </ul>
              <p>{t("streetPID.continuousFunction")}</p>
            </>
          }
        />
        <hr className={styles.separator} />
        <DescriptionLayout
          title={t("streetPID.keyFeaturesTitle")} // Traducción del título
          titleColor="var(--section-1-title)"
          icons={[{ src: keyboard, alt: "Icon 8" }]}
          paragraph={
            <>
              <ul>
                <li>
                  <strong>{t("streetPID.realTimeData")}</strong>{" "}
                  {t("streetPID.realTimeDescription")}
                </li>
                <li>
                  <strong>{t("streetPID.customIntegrations")}</strong>{" "}
                  {t("streetPID.customDescription")}
                </li>
                <li>
                  <strong>{t("streetPID.accessibility")}</strong>{" "}
                  {t("streetPID.accessibilityDescription")}
                </li>
              </ul>
            </>
          }
        />
        <hr className={styles.separator} />
        <DescriptionLayout
          title={t("streetPID.challengesTitle")} // Traducción del título
          titleColor="var(--section-1-title)"
          icons={[{ src: sakura, alt: "Icon 10" }]}
          paragraph={
            <>
              <ul>
                <li>
                  <strong>{t("streetPID.hardwareVariability")}</strong>{" "}
                  {t("streetPID.hardwareDescription")}
                </li>
                <li>
                  <strong>{t("streetPID.nonInteractiveDisplay")}</strong>{" "}
                  {t("streetPID.nonInteractiveDescription")}
                </li>
                <li>
                  <strong>{t("streetPID.accessibilityChallenges")}</strong>{" "}
                  {t("streetPID.accessibilitySolution")}
                </li>
              </ul>
            </>
          }
        />
        <hr className={styles.separator} />
        <DescriptionLayout
          title={t("streetPID.designConsiderationsTitle")} // Traducción del título
          titleColor="var(--section-1-title)"
          icons={[{ src: handw, alt: "Icon 12" }]}
          paragraph={
            <>
              <ul>
                <li>
                  <strong>{t("streetPID.designTools")}</strong>{" "}
                  {t("streetPID.designDescription")}
                </li>
                <li>
                  <strong>{t("streetPID.userInteraction")}</strong>{" "}
                  {t("streetPID.interactionDescription")}
                </li>
                <li>
                  <strong>{t("streetPID.layoutOptimization")}</strong>{" "}
                  {t("streetPID.layoutDescription")}
                </li>
              </ul>
            </>
          }
        />
      </div>

      {/* Cuarta Card con el componente Carousel */}
      <div className={`${styles.card} ${styles.whiteBackground}`}>
        <Carousel titleColor="var(--section-1-title)" />{" "}
        {/* Aquí usas tu componente Carousel */}
      </div>
      {/* Flecha de "Next Project" */}
      <div className={styles.nextProjectContainer} onClick={handleNextProject}>
        <span>Next Project</span>
        <img
          src={arrowRight}
          alt="Next Project Arrow"
          className={styles.arrowIcon}
        />
      </div>
    </div>
  );
};

export default StreetPID;
