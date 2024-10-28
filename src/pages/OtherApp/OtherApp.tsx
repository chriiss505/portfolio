import React from "react";
import { useTranslation } from "react-i18next"; // Importar el hook de traducción
import { useNavigate } from "react-router-dom"; // Importa useNavigate

import styles from "./OtherApp.module.css";
import Tag from "../../components/Tags/Tag"; // Asumiendo que tienes un componente Tag para las etiquetas
import DescriptionLayout from "../../components/DescriptionLayout/DescriptionLayout";
import Icon from "../../components/Icons/Icon";
import Carousel from "../../components/Carousel/Carousel"; // Asegúrate de la ruta correcta
import VideoCard from "../../components/VideoCard/VideoCard";
import FleetManagementCard from "../../components/FleetManagementCard/FleetManagementCard";

/*--------------picture------------*/

import mainPicture from "../../assets/images/its.png";

import sunmi from "../../assets/images/sunmi1.png";
import waysion from "../../assets/images/waysion.png";
import campapp from "../../assets/images/campapp.png";
import image4 from "../../assets/images/its_4.png";

/*--------------icons------------*/

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

/*--------------svg------------*/
import computer from "../../assets/images/computer_v2.svg";
import keyboard from "../../assets/images/keyboard.svg";
import sakura from "../../assets/images/sakura.svg";
import arrowRight from "../../assets/images/right.svg";
import arrowLeft from "../../assets/images/left.svg";

import handw from "../../assets/images/handw.svg";
import brillo from "../../assets/images/brillo.svg";

const OtherApp: React.FC = () => {
  const { t } = useTranslation(); // Hook para traducción
  const navigate = useNavigate(); // Inicializa useNavigate

  const handlePreviousProject = () => {
    navigate("/its-system"); // Cambia la ruta según el path de OnBoardPID
  };

  return (
    <div className={styles.pageContainer}>
      {/* Primera Card */}
      <div
        className={`${styles.titleCard} ${styles.backgroundColor} ${styles.card}`}
      >
        <h1 className={styles.centerText}>{t("otherApps.title")}</h1>
        <div className={styles.tagsContainer}>
          <Tag name={t("otherApps.tags.ui")} />
          <Tag name={t("otherApps.tags.ux")} />
          <Tag name={t("otherApps.tags.graphicDesign")} />
          <Tag name={t("otherApps.tags.coding")} />
        </div>
      </div>

      <div className={`${styles.card} ${styles.backgroundColor}`}>
        <div className={styles.singleColumnLayout}>
          <h2>{t("otherApps.projects")}</h2>
          <p>{t("otherApps.projectDescription")}</p>
        </div>
      </div>

      {/* Primera Card */}
      <div className={`${styles.card} ${styles.whiteBackground}`}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.leftColumnProject}>
            <h2>{t("otherApps.campapp.title")}</h2>
            <p>
              <strong>{t("otherApps.campapp.goals")}: </strong>
              {t("otherApps.campapp.goalDescription")}
            </p>

            <p>
              <strong>{t("otherApps.campapp.clients")}: </strong>
              {t("otherApps.campapp.clientNames")}.
            </p>

            <p>
              <strong>{t("otherApps.campapp.myRole")}: </strong>
              {t("otherApps.campapp.roleDescription")}
            </p>
          </div>
          <div className={styles.rightColumnProject}>
            <img
              src={campapp}
              className={styles.border10}
              alt={t("otherApps.campapp.imageAlt")}
            />
          </div>
        </div>
      </div>

      {/* Segunda Card */}
      <div className={`${styles.card} ${styles.whiteBackground}`}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.leftColumnProject}>
            <h2>{t("otherApps.ticketingApp.title")}: </h2>
            <p>
              <strong>{t("otherApps.ticketingApp.goals")}: </strong>
              {t("otherApps.ticketingApp.goalDescription")}
            </p>

            <p>
              <strong>{t("otherApps.ticketingApp.clients")}: </strong>
              {t("otherApps.ticketingApp.clientNames")}.
            </p>

            <p>
              <strong>{t("otherApps.ticketingApp.myRole")}: </strong>
              {t("otherApps.ticketingApp.roleDescription")}
            </p>

            <p>
              <strong>{t("otherApps.ticketingApp.featuredIn")}: </strong>
              <a
                href="https://www.blog.sunmi.tech/partners/mybus-smart-mobility-for-smart-cities/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("otherApps.ticketingApp.linkText")}
              </a>
            </p>
          </div>
          <div className={styles.rightColumnProject}>
            <img
              src={sunmi}
              className={styles.border10}
              alt={t("otherApps.ticketingApp.imageAlt")}
            />
          </div>
        </div>
      </div>

      {/* Tercera Card */}
      <div className={`${styles.card} ${styles.whiteBackground}`}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.leftColumnProject}>
            <h2>{t("otherApps.driverDevice.title")}:</h2>
            <p>
              <strong>{t("otherApps.driverDevice.goals")}: </strong>
              {t("otherApps.driverDevice.goalDescription")}
            </p>

            <p>
              <strong>{t("otherApps.driverDevice.clients")}: </strong>
              {t("otherApps.driverDevice.clientNames")}.
            </p>

            <p>
              <strong>{t("otherApps.driverDevice.myRole")}: </strong>
              {t("otherApps.driverDevice.roleDescription")}
            </p>
          </div>
          <div className={styles.rightColumnProject}>
            <img
              src={waysion}
              className={styles.border10}
              alt={t("otherApps.driverDevice.imageAlt")}
            />
          </div>
        </div>
      </div>
      {/* Flecha de "Next Project" */}
      <div
        className={styles.nextProjectContainer}
        onClick={handlePreviousProject}
      >
        <img
          src={arrowLeft}
          alt="Previous Project Arrow"
          className={styles.arrowIcon}
        />
        <span>Previous Project</span>
      </div>
    </div>
  );
};

export default OtherApp;
