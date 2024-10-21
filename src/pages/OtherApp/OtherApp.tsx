import React from "react";
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
  return (
    <div className={styles.pageContainer}>
      {/* Primera Card */}
      <div
        className={`${styles.titleCard} ${styles.backgroundColor} ${styles.card}`}
      >
        <h1 className={styles.centerText}>Other Apps</h1>
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
          <h2>Projects:</h2>
          <p>
            Here, you'll find a collection of smaller projects, primarily
            focused on passenger transportation and mobility solutions. Each
            project is designed to improve the efficiency, convenience, and
            experience for both passengers and operators. These solutions are
            also developed to meet the specific requirements of public tenders,
            ensuring compliance with industry standards and regulations
          </p>
        </div>
      </div>

      {/* primera Card */}
      <div className={`${styles.card} ${styles.whiteBackground}`}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.leftColumnProject}>
            <h2>Campapp:</h2>
            <p>
              <strong>Goals: </strong>
              The app enables drivers to view their assigned vehicle, its
              location, and their scheduled shifts for the day. It was required
              to be bilingual, supporting both English and Māori, and optimized
              for the T2 mini device.
            </p>

            <p>
              <strong>Clients: </strong>
              Greater Wellington.
            </p>

            <p>
              <strong>My role: </strong>I designed the app with UX principles in
              mind and developed the frontend using Android Studio.
            </p>
          </div>
          <div className={styles.rightColumnProject}>
            <img
              src={campapp}
              className={styles.border10}
              alt="Project Image"
            />
          </div>
        </div>
      </div>

      {/* Segunda Card */}
      <div className={`${styles.card} ${styles.whiteBackground}`}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.leftColumnProject}>
            <h2>Ticketing app: </h2>
            <p>
              <strong>Goals: </strong>
              The app allows bus drivers to validate tickets, check ticket
              validity, and sell tickets using either cash or credit card. It
              was developed to run on two devices: Sunmi T2 Mini and Sunmi P2
              Pro.
            </p>

            <p>
              <strong>Clients: </strong>
              Aerobus, Andorra Government, Fisersa, Monbus.
            </p>

            <p>
              <strong>My role: </strong>
              Designing components and user flows, applying both UX and UI
              principles.
            </p>

            <p>
              <strong>Featured in:</strong>
              <a
                href="https://www.blog.sunmi.tech/partners/mybus-smart-mobility-for-smart-cities/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sunmi Blog
              </a>
            </p>
          </div>
          <div className={styles.rightColumnProject}>
            <img src={sunmi} className={styles.border10} alt="Project Image" />
          </div>
        </div>
      </div>
      {/* tercera Card */}
      <div className={`${styles.card} ${styles.whiteBackground}`}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.leftColumnProject}>
            <h2>Driver device:</h2>
            <p>
              <strong>Goals: </strong>
              The app assists drivers by showing whether they are adhering to
              the schedule, displaying upcoming trips, passenger count, the next
              stop, and their location on a map. It was required to fit specific
              device constraints.
            </p>

            <p>
              <strong>Clients: </strong>
              Bus agencies around Barcelona.
            </p>

            <p>
              <strong>My role: </strong>
              Redesigned the app to fit various devices and customized the UI
              for different clients.
            </p>
          </div>
          <div className={styles.rightColumnProject}>
            <img
              src={waysion}
              className={styles.border10}
              alt="Project Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherApp;
