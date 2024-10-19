import React from "react";
import styles from "./StreetPID.module.css";
import Tag from "../../components/Tags/Tag"; // Asumiendo que tienes un componente Tag para las etiquetas
import DescriptionLayout from "../../components/DescriptionLayout/DescriptionLayout";
import Icon from "../../components/Icons/Icon";
import Carousel from "../../components/Carousel/Carousel"; // Asegúrate de la ruta correcta

/*--------------picture------------*/

import mainPicture from "../../assets/images/street_pid_1.png";

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
  return (
    <div className={styles.pageContainer}>
      {/* Primera Card */}
      <div
        className={`${styles.titleCard} ${styles.backgroundColor} ${styles.card}`}
      >
        <h1 className={styles.centerText}>Street PID's APK</h1>
        <div className={styles.tagsContainer}>
          <Tag name="UI" />
          <Tag name="UX" />
          <Tag name="Graphic Design" />
          <Tag name="Coding" />
        </div>
      </div>

      {/* Segunda Card */}
      <div className={`${styles.card} ${styles.backgroundColor}`}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.leftColumnProject}>
            <h2>Project overview:</h2>
            <p>
              Goals: The goal of this project was to meet the requirements of
              public tenders that mandate real-time bus arrival displays on
              public information screens. These screens are placed at bus stops
              or transit areas to inform passengers of the next arrivals and
              other relevant information without user interaction. The app was
              also designed for private transport companies, such as those
              offering shuttle services from Barcelona’s cruise terminal to the
              city center, to keep their passengers informed in real time.
            </p>
            <p>
              Clients: Transports Urbans de Sabadell, Govern d’Andorra, Aena
              Barcelona, Aena Madrid. My role: Designing and coding frontend
              Featured in
            </p>
          </div>
          <div className={styles.rightColumnProject}>
            <img
              src={mainPicture}
              className={styles.border10}
              alt="Project Image"
            />
          </div>
        </div>
      </div>

      {/* Tercera Card */}
      <div className={`${styles.card} ${styles.whiteBackground}`}>
        <DescriptionLayout
          title="Technologies and Tools Used:"
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
                <strong>Development Environment:</strong> Android Studio.
              </li>
              <li>
                <strong>Programming Languages:</strong> Java.
              </li>
              <li>
                <strong>Design Tools:</strong> Figma, Photoshop, Illustrator for
                prototyping and UI design.
              </li>
              <li>
                <strong>APIs:</strong>
                <ul>
                  <li>
                    Intelligent Transport System (ITS) web manager for real-time
                    bus data (JSON or XML format).
                  </li>
                  <li>
                    Optional integrations with open-source weather APIs and the
                    AENA API to display flight information for specific clients.
                  </li>
                </ul>
              </li>
            </ul>
          }
        />

        <DescriptionLayout
          title="Architecture and Data Management:"
          icons={[{ src: computer, alt: "Icon 6" }]}
          paragraph={
            <>
              <p>
                The app handles real-time data by integrating with multiple
                APIs, which supply bus arrival times, weather conditions, or
                flight information, depending on the client’s configuration. The
                key data points include:
              </p>
              <ul>
                <li>
                  Bus arrival times (including UI elements such as colors and
                  media content).
                </li>
                <li>
                  Optional weather or flight information based on specific
                  client requests.
                </li>
              </ul>
              <p>
                The system is designed to function continuously, updating the
                public information screen at pre-set intervals.
              </p>
            </>
          }
        />

        <DescriptionLayout
          title="Key Features:"
          icons={[{ src: keyboard, alt: "Icon 8" }]}
          paragraph={
            <>
              <ul>
                <li>
                  <strong>Real-Time Data:</strong> Automatically fetches bus
                  arrival times, colors, and media for display. The content
                  refreshes based on timers, without user interaction.
                </li>
                <li>
                  <strong>Custom Integrations:</strong> Depending on the client,
                  the app can also show weather and flight data.
                </li>
                <li>
                  <strong>Accessibility:</strong> Text-to-speech (TTS)
                  integration for visually impaired passengers, triggered by the
                  “Ciberpass” system, which also controls traffic lights.
                </li>
              </ul>
            </>
          }
        />

        <DescriptionLayout
          title="Challenges and Solutions:"
          icons={[{ src: sakura, alt: "Icon 10" }]}
          paragraph={
            <>
              <ul>
                <li>
                  <strong>Hardware Variability:</strong> The app had to run on
                  different screens with varying sizes, aspect ratios, and
                  Android versions. Flexible layouts and thorough testing
                  ensured compatibility.
                </li>
                <li>
                  <strong>Non-Interactive Display:</strong> Since users can’t
                  interact with the screen, I used timers to automate updates
                  and manage background processes efficiently.
                </li>
                <li>
                  <strong>Accessibility:</strong> The TTS integration with GPIO
                  and “Ciberpass” provides audio announcements for visually
                  impaired passengers.
                </li>
              </ul>
            </>
          }
        />

        <DescriptionLayout
          title="Design Considerations:"
          icons={[{ src: handw, alt: "Icon 12" }]}
          paragraph={
            <>
              <ul>
                <li>
                  <strong>Design Tools:</strong> The design was created using
                  Figma, Photoshop, and Illustrator, with a focus on clarity and
                  ease of use for public viewing.
                </li>
                <li>
                  <strong>User Interaction:</strong> Since users cannot interact
                  with the display, the timers were carefully chosen.
                </li>
                <li>
                  <strong>Layout Optimization:</strong> The layout was optimized
                  for large displays, ensuring legibility from a distance, while
                  also integrating accessibility features like TTS for visually
                  impaired passengers.
                </li>
              </ul>
            </>
          }
        />
      </div>

      {/* Cuarta Card con el componente Carousel */}
      <div className={`${styles.card} ${styles.whiteBackground}`}>
        <Carousel /> {/* Aquí usas tu componente Carousel */}
      </div>
    </div>
  );
};

export default StreetPID;
