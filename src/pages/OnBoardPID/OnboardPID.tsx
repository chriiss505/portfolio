import React from "react";
import styles from "./OnBoardPID.module.css";
import Tag from "../../components/Tags/Tag"; // Asumiendo que tienes un componente Tag para las etiquetas
import DescriptionLayout from "../../components/DescriptionLayout/DescriptionLayout";
import Icon from "../../components/Icons/Icon";
import Carousel from "../../components/Carousel/Carousel"; // Asegúrate de la ruta correcta
import VideoCard from "../../components/VideoCard/VideoCard";

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

const OnboardPID: React.FC = () => {
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
              <strong>Goals:</strong>
            </p>
            <p>
              This onboard display app provides real-time information for
              passengers inside buses, including upcoming stops, destinations,
              connections to other public transport, and media content such as
              videos or images. For buses heading to airports, the app also
              displays upcoming flight information. The app can also handle
              audio announcements to improve accessibility for passengers.
            </p>

            <p>
              <strong>Clients:</strong>
            </p>
            <p>
              Transports Urbans de Sabadell, Govern d’Andorra, Monbus, Soler i
              Sauret, Aerobus, Sarbus
            </p>

            <p>
              <strong>My role:</strong>
            </p>
            <p>Designing and coding frontend</p>
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
            { src: androidStudio, alt: "Icon 4" },
            { src: figma, alt: "Icon 5" },
          ]}
          paragraph={
            <ul>
              <li>
                <strong>Development Environment:</strong> Android Studio
              </li>
              <li>
                <strong>Programming Languages:</strong> Java
              </li>
              <li>
                <strong>Design Tools:</strong> Figma, Photoshop, Illustrator
              </li>
              <li>
                <strong>APIs:</strong> Real-time bus data for stops and routes,
                AENA API for flight information, and media content integrations
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
                The app is designed to manage multiple data streams efficiently
                with automatic updates.
              </p>

              <ul>
                <li>
                  <strong>Data Sources:</strong>
                </li>
                <ul>
                  <li>
                    <strong>Bus Data & Media:</strong> Fetched from the
                    company’s database, populated by its intelligent transport
                    system content manager.
                  </li>
                  <li>
                    <strong>Connections Info:</strong> Comes from both the AMB
                    API and the company's own database for real-time transport
                    connections.
                  </li>
                  <li>
                    <strong>Flight Info (for Airport Buses):</strong> Provided
                    by the AENA API.
                  </li>
                </ul>

                <li>
                  <strong>Auto-Update Feature:</strong> Ensures the app stays
                  updated to the latest version, including any system updates or
                  new features.
                </li>

                <li>
                  <strong>Data Handling:</strong> The app uses asynchronous
                  updates to manage real-time information, ensuring smooth
                  operation with temporary caching in case of network issues.
                </li>
              </ul>
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
                  <strong>Stop and Destination Information:</strong> Displays
                  upcoming bus stops, final destinations, and connections to
                  other public transport systems.
                </li>
                <li>
                  <strong>Airport Integration:</strong> For buses heading to the
                  airport, the app displays upcoming flight information using
                  the AENA API.
                </li>
                <li>
                  <strong>Media Content:</strong> Supports various types of
                  media (videos, images) for informational or advertising
                  purposes.
                </li>
                <li>
                  <strong>Audio Announcements:</strong> The app provides audio
                  announcements for upcoming stops and other important updates,
                  improving accessibility for all passengers.
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
                  <strong>Real-Time Data Synchronization:</strong> Ensuring
                  accurate synchronization of bus stop data, flight information,
                  and media content required efficient API management and
                  background updates.
                </li>
                <li>
                  <strong>Hardware Compatibility:</strong> The app needed to run
                  smoothly across different display systems inside buses,
                  requiring flexible design and thorough testing.
                </li>
                <li>
                  <strong>Accessibility:</strong> The integration of audio
                  announcements ensured the app was accessible for visually
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
              <p>
                <strong>UI Design:</strong> The UI is designed to be clear and
                visible to all passengers, with timely updates on bus stops,
                routes, and other travel information. The app is optimized to
                manage multiple types of content, from transport updates to
                media, without overwhelming system resources.
              </p>
            </>
          }
        />
      </div>

      {/* Cuarta Card con el componente Carousel */}
      <div className={styles.videoCardContainer}>
        <VideoCard
          title="My Amazing Video"
          videoSrc="https://www.youtube.com/embed/your_video_id" // Cambia esto por tu video
          text="This is a brief description of the video content, providing context and engaging the viewer."
        />
      </div>
    </div>
  );
};

export default OnboardPID;
