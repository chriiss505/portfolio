import React from "react";
import { useTranslation } from "react-i18next"; // Asegúrate de tener i18next configurado
import { useNavigate } from "react-router-dom"; // Importa useNavigate

import styles from "./OnBoardPID.module.css";
import Tag from "../../components/Tags/Tag"; // Asumiendo que tienes un componente Tag para las etiquetas
import DescriptionLayout from "../../components/DescriptionLayout/DescriptionLayout";
import Icon from "../../components/Icons/Icon";
import Carousel from "../../components/Carousel/Carousel"; // Asegúrate de la ruta correcta
import VideoCard from "../../components/VideoCard/VideoCard"; // Asegúrate de la ruta correcta

/*--------------picture------------*/
import mainPicture from "../../assets/images/screenin.png";

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
import brillo from "../../assets/images/brillo.svg";

/**-------video------/ */
import onboardVideo from "../../assets/videos/onboard.mp4"; // Ruta a tu video local

const OnboardPID: React.FC = () => {
  const { t } = useTranslation(); // Inicializa la función de traducción

  const navigate = useNavigate(); // Inicializa useNavigate

  const goToPreviousProject = () => navigate("/street-pid");
  const goToNextProject = () => navigate("/its-system");
  return (
    <div className={styles.pageContainer}>
      {/* Primera Card */}
      <div
        className={`${styles.titleCard} ${styles.backgroundColor} ${styles.card}`}
      >
        <h1 className={styles.centerText}>{t("OnBoardPID.title")}</h1>
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
            <h2>{t("OnBoardPID.projectOverview")}</h2>
            <p>
              <strong>{t("OnBoardPID.goals")}</strong>
            </p>
            <p>{t("OnBoardPID.description")}</p>

            <p>
              <strong>{t("OnBoardPID.clients")}</strong>
            </p>
            <p>{t("OnBoardPID.clientsList")}</p>

            <p>
              <strong>{t("OnBoardPID.myRole")}</strong>
            </p>
            <p>{t("OnBoardPID.myRoleDescription")}</p>
          </div>
          <div className={styles.rightColumnProject}>
            <img
              src={mainPicture}
              className={styles.border10}
              alt={t("OnBoardPID.projectImageAlt")}
            />
          </div>
        </div>
      </div>

      {/* Tercera Card */}
      <div className={`${styles.card} ${styles.whiteBackground}`}>
        <DescriptionLayout
          title={t("OnBoardPID.technologiesTitle")}
          titleColor="var(--section-2-title)"
          icons={[
            { src: illustrator, alt: t("OnBoardPID.icon1") },
            { src: photoshop, alt: t("OnBoardPID.icon2") },
            { src: androidStudio, alt: t("OnBoardPID.icon3") },
            { src: figma, alt: t("OnBoardPID.icon4") },
          ]}
          paragraph={
            <ul>
              <li>
                <strong>{t("OnBoardPID.developmentEnvironment")}</strong>{" "}
                {t("OnBoardPID.androidStudio")}
              </li>
              <li>
                <strong>{t("OnBoardPID.programmingLanguages")}</strong>{" "}
                {t("OnBoardPID.java")}
              </li>
              <li>
                <strong>{t("OnBoardPID.designTools")}</strong>{" "}
                {t("OnBoardPID.figmaPhotoshopIllustrator")}
              </li>
              <li>
                <strong>{t("OnBoardPID.apis")}</strong>{" "}
                {t("OnBoardPID.apisDescription")}
              </li>
            </ul>
          }
        />
        <hr className={styles.separator} />

        <DescriptionLayout
          title={t("OnBoardPID.architectureTitle")}
          titleColor="var(--section-2-title)"
          icons={[{ src: computer, alt: t("OnBoardPID.icon5") }]}
          paragraph={
            <>
              <p>{t("OnBoardPID.dataManagementDescription")}</p>

              <ul>
                <li>
                  <strong>{t("OnBoardPID.dataSources")}</strong>
                </li>
                <ul>
                  <li>
                    <strong>{t("OnBoardPID.busData")}</strong>{" "}
                    {t("OnBoardPID.busDataDescription")}
                  </li>
                  <li>
                    <strong>{t("OnBoardPID.connectionsInfo")}</strong>{" "}
                    {t("OnBoardPID.connectionsInfoDescription")}
                  </li>
                  <li>
                    <strong>{t("OnBoardPID.flightInfo")}</strong>{" "}
                    {t("OnBoardPID.flightInfoDescription")}
                  </li>
                </ul>

                <li>
                  <strong>{t("OnBoardPID.autoUpdateFeature")}</strong>{" "}
                  {t("OnBoardPID.autoUpdateDescription")}
                </li>

                <li>
                  <strong>{t("OnBoardPID.dataHandling")}</strong>{" "}
                  {t("OnBoardPID.dataHandlingDescription")}
                </li>
              </ul>
            </>
          }
        />
        <hr className={styles.separator} />

        <DescriptionLayout
          title={t("OnBoardPID.keyFeaturesTitle")}
          titleColor="var(--section-2-title)"
          icons={[{ src: keyboard, alt: t("OnBoardPID.icon6") }]}
          paragraph={
            <>
              <ul>
                <li>
                  <strong>{t("OnBoardPID.stopInformation")}</strong>{" "}
                  {t("OnBoardPID.stopInformationDescription")}
                </li>
                <li>
                  <strong>{t("OnBoardPID.airportIntegration")}</strong>{" "}
                  {t("OnBoardPID.airportIntegrationDescription")}
                </li>
                <li>
                  <strong>{t("OnBoardPID.mediaContent")}</strong>{" "}
                  {t("OnBoardPID.mediaContentDescription")}
                </li>
                <li>
                  <strong>{t("OnBoardPID.audioAnnouncements")}</strong>{" "}
                  {t("OnBoardPID.audioAnnouncementsDescription")}
                </li>
              </ul>
            </>
          }
        />
        <hr className={styles.separator} />

        <DescriptionLayout
          title={t("OnBoardPID.challengesTitle")}
          titleColor="var(--section-2-title)"
          icons={[{ src: handw, alt: t("OnBoardPID.icon7") }]}
          paragraph={
            <>
              <ul>
                <li>
                  <strong>{t("OnBoardPID.realTimeData")}</strong>{" "}
                  {t("OnBoardPID.realTimeDataDescription")}
                </li>
                <li>
                  <strong>{t("OnBoardPID.hardwareCompatibility")}</strong>{" "}
                  {t("OnBoardPID.hardwareCompatibilityDescription")}
                </li>
                <li>
                  <strong>{t("OnBoardPID.accessibility")}</strong>{" "}
                  {t("OnBoardPID.accessibilityDescription")}
                </li>
              </ul>
            </>
          }
        />
        <hr className={styles.separator} />

        <DescriptionLayout
          title={t("OnBoardPID.designConsiderationsTitle")}
          titleColor="var(--section-2-title)"
          icons={[{ src: brillo, alt: t("OnBoardPID.icon8") }]}
          paragraph={
            <>
              <p>
                <strong>{t("OnBoardPID.uiDesign")}</strong>{" "}
                {t("OnBoardPID.uiDesignDescription")}
              </p>
            </>
          }
        />
      </div>

      {/* Cuarta Card con el componente Carousel */}
      <div className={styles.videoCardContainer}>
        <VideoCard
          title={t("OnBoardPID.videoTitle")}
          videoSrc={onboardVideo}
          text={t("OnBoardPID.videoDescription")}
        />
      </div>
      <div className={styles.navigationContainer}>
        {/* Flecha de proyecto anterior */}
        <div onClick={goToPreviousProject} className={styles.navigationItem}>
          <img
            src={arrowLeft}
            alt="Previous Project Arrow"
            className={styles.arrowIcon}
          />
          <span>{t("Previous Project")}</span>
        </div>

        {/* Flecha de siguiente proyecto */}
        <div onClick={goToNextProject} className={styles.navigationItem}>
          <span>{t("Next Project")}</span>
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

export default OnboardPID;
