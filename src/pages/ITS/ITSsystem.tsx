import React from "react";
import { useTranslation } from "react-i18next"; // Importar useTranslation
import { useNavigate } from "react-router-dom"; // Importa useNavigate

import styles from "./ITSsystem.module.css";
import Tag from "../../components/Tags/Tag";
import DescriptionLayout from "../../components/DescriptionLayout/DescriptionLayout";
import Icon from "../../components/Icons/Icon";
import Carousel from "../../components/Carousel/Carousel";
import VideoCard from "../../components/VideoCard/VideoCard";
import FleetManagementCard from "../../components/FleetManagementCard/FleetManagementCard";

// Imágenes
import mainPicture from "../../assets/images/its.png";
import image1 from "../../assets/images/its_1.png";
import image2 from "../../assets/images/its_2.png";
import image3 from "../../assets/images/its_3.png";
import image4 from "../../assets/images/its_4.png";

// Iconos
import illustrator from "../../assets/images/ai_logo.png";
import photoshop from "../../assets/images/ps_logo.png";
import androidStudio from "../../assets/images/android_logo.png";
import openWeather from "../../assets/images/weather_api.png";
import figma from "../../assets/images/figma_logo.png";
import test from "../../assets/images/logo_test.png";
import brain from "../../assets/images/logo_brain.png";
import define from "../../assets/images/logo_define.png";
import heart from "../../assets/images/logo_heart.png";
import pencil from "../../assets/images/logo_pencil.png";

// SVGs
import computer from "../../assets/images/computer_v2.svg";
import keyboard from "../../assets/images/keyboard.svg";
import sakura from "../../assets/images/sakura.svg";
import arrowRight from "../../assets/images/right.svg";
import arrowLeft from "../../assets/images/left.svg";

import handw from "../../assets/images/handw.svg";
import brillo from "../../assets/images/brillo.svg";

const images = [image1, image2, image3, image4];

const ITSsystem: React.FC = () => {
  const { t } = useTranslation(); // Inicializar la función de traducción
  const navigate = useNavigate(); // Inicializa useNavigate

  const goToPreviousProject = () => navigate("/onboard-pid");
  const goToNextProject = () => navigate("/other-app");

  return (
    <div className={styles.pageContainer}>
      {/* Primera Card */}
      <div
        className={`${styles.titleCard} ${styles.backgroundColor} ${styles.card}`}
      >
        <h1 className={styles.centerText}>{t("itsSystem.title")}</h1>{" "}
        {/* Traducción del título */}
        <div className={styles.tagsContainer}>
          <Tag name="UX" />
          <Tag name="GraphicDesign" />
        </div>
      </div>

      {/* Segunda Card */}
      <div className={`${styles.card} ${styles.backgroundColor}`}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.leftColumnProject}>
            <h2>{t("itsSystem.projectOverview")}</h2>{" "}
            {/* Traducción de la descripción */}
            <p>
              <strong>{t("itsSystem.goals")}</strong>
            </p>
            <p>{t("itsSystem.goalDescription")}</p>
            <p>
              <strong>{t("itsSystem.clients")}</strong>
            </p>
            <p>{t("itsSystem.clientNames")}</p>
            <p>
              <strong>{t("itsSystem.myRole")}</strong>
            </p>
            <p>{t("itsSystem.roleDescription")}</p>
          </div>
          <div className={styles.rightColumnProject}>
            <img
              src={mainPicture}
              className={styles.border10}
              alt={t("itsSystem.projectImageAlt")} // Traducción del alt
            />
          </div>
        </div>
      </div>

      {/* Tercera Card */}
      <div className={`${styles.card} ${styles.whiteBackground}`}>
        <DescriptionLayout
          title={t("itsSystem.designThinkingTitle")} // Traducción del título
          titleColor="var(--section-3-title)"
          icons={[
            { src: pencil, alt: "Icon 1" },
            { src: define, alt: "Icon 2" },
            { src: heart, alt: "Icon 4" },
            { src: brain, alt: "Icon 5" },
            { src: test, alt: "test" },
          ]}
          paragraph={
            <div>
              <p>
                {t("itsSystem.designThinkingDescription")}{" "}
                {/* Traducción de la descripción */}
              </p>
              <ul>
                <li>
                  <strong>{t("itsSystem.empathize")}</strong>{" "}
                  {t("itsSystem.empathizeDescription")}
                </li>
                <li>
                  <strong>{t("itsSystem.define")}</strong>{" "}
                  {t("itsSystem.defineDescription")}
                </li>
                <li>
                  <strong>{t("itsSystem.ideate")}</strong>{" "}
                  {t("itsSystem.ideateDescription")}
                </li>
                <li>
                  <strong>{t("itsSystem.prototype")}</strong>{" "}
                  {t("itsSystem.prototypeDescription")}
                </li>
                <li>
                  <strong>{t("itsSystem.test")}</strong>{" "}
                  {t("itsSystem.testDescription")}
                </li>
              </ul>
            </div>
          }
        />
        <hr className={styles.separator} />

        <DescriptionLayout
          title={t("itsSystem.prototypingTitle")} // Traducción del título
          titleColor="var(--section-3-title)"
          icons={[{ src: figma, alt: "Icon 6" }]}
          paragraph={
            <>
              <p>
                {t("itsSystem.prototypingDescription")}{" "}
                {/* Traducción de la descripción */}
              </p>

              <ul>
                <li>
                  <strong>{t("itsSystem.dataSources")}</strong>
                </li>
                <ul>
                  <li>
                    <strong>{t("itsSystem.busData")}</strong>{" "}
                    {t("itsSystem.busDataDescription")}
                  </li>
                  <li>
                    <strong>{t("itsSystem.connectionsInfo")}</strong>{" "}
                    {t("itsSystem.connectionsInfoDescription")}
                  </li>
                  <li>
                    <strong>{t("itsSystem.flightInfo")}</strong>{" "}
                    {t("itsSystem.flightInfoDescription")}
                  </li>
                </ul>

                <li>
                  <strong>{t("itsSystem.autoUpdate")}</strong>{" "}
                  {t("itsSystem.autoUpdateDescription")}
                </li>

                <li>
                  <strong>{t("itsSystem.dataHandling")}</strong>{" "}
                  {t("itsSystem.dataHandlingDescription")}
                </li>
              </ul>
            </>
          }
        />
        <hr className={styles.separator} />

        <DescriptionLayout
          title={t("itsSystem.designSystemTitle")} // Traducción del título
          titleColor="var(--section-3-title)"
          icons={[{ src: keyboard, alt: "Icon 8" }]}
          paragraph={
            <>
              <div>
                <p>
                  {t("itsSystem.designSystemDescription")}{" "}
                  {/* Traducción de la descripción */}
                </p>

                <ul>
                  <li>
                    <strong>{t("itsSystem.visualGuidelines")}</strong>{" "}
                    {t("itsSystem.visualGuidelinesDescription")}
                  </li>
                  <li>
                    <strong>{t("itsSystem.uiComponents")}</strong>{" "}
                    {t("itsSystem.uiComponentsDescription")}
                  </li>
                  <li>
                    <strong>{t("itsSystem.interactionPatterns")}</strong>{" "}
                    {t("itsSystem.interactionPatternsDescription")}
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <hr className={styles.separator} />

        <DescriptionLayout
          title={t("itsSystem.uxResearchTitle")} // Traducción del título
          titleColor="var(--section-3-title)"
          icons={[{ src: sakura, alt: "Icon 10" }]}
          paragraph={
            <>
              <div>
                <p>
                  {t("itsSystem.uxResearchDescription")}{" "}
                  {/* Traducción de la descripción */}
                </p>

                <ul>
                  <li>{t("itsSystem.personasAndMaps")}</li>
                  <li>{t("itsSystem.usabilityTests")}</li>
                  <li>{t("itsSystem.userFeedback")}</li>
                </ul>
              </div>
            </>
          }
        />
        <hr className={styles.separator} />

        <DescriptionLayout
          title={t("itsSystem.keyFeaturesTitle")} // Traducción del título
          titleColor="var(--section-3-title)"
          icons={[{ src: brillo, alt: "Icon 12" }]}
          paragraph={
            <>
              <div>
                <p>
                  {t("itsSystem.keyFeaturesDescription")}{" "}
                  {/* Traducción de la descripción */}
                </p>

                <ul>
                  <li>{t("itsSystem.realTimeMonitoring")}</li>
                  <li>{t("itsSystem.driverCommunications")}</li>
                  <li>{t("itsSystem.passengerInformation")}</li>
                </ul>
              </div>
            </>
          }
        />
      </div>

      {/* Cuarta Card con el componente Carousel */}
      <FleetManagementCard
        titleKey="fleetManagementCard.title"
        iconSrc={computer}
        images={images}
      />
      {/* Flechas de navegación en la parte inferior */}
      {/* Flecha de proyecto anterior */}
      <div className={styles.navigationContainer}>
        {/* Flecha de proyecto anterior */}
        <div onClick={goToPreviousProject} className={styles.navigationItem}>
          <img
            src={arrowLeft}
            alt="Previous Project Arrow"
            className={styles.arrowIcon}
          />
          <span>{t("previousProject")}</span>
        </div>

        {/* Flecha de siguiente proyecto */}
        <div onClick={goToNextProject} className={styles.navigationItem}>
          <span>{t("nextProject")}</span>
          <img
            src={arrowRight}
            alt="Next Project Arrow"
            className={styles.arrowIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default ITSsystem;
