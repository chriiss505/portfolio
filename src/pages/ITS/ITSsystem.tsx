import React from "react";
import styles from "./ITSsystem.module.css";
import Tag from "../../components/Tags/Tag"; // Asumiendo que tienes un componente Tag para las etiquetas
import DescriptionLayout from "../../components/DescriptionLayout/DescriptionLayout";
import Icon from "../../components/Icons/Icon";
import Carousel from "../../components/Carousel/Carousel"; // Asegúrate de la ruta correcta
import VideoCard from "../../components/VideoCard/VideoCard";
import FleetManagementCard from "../../components/FleetManagementCard/FleetManagementCard";

/*--------------picture------------*/

import mainPicture from "../../assets/images/its.png";

import image1 from "../../assets/images/its_1.png";
import image2 from "../../assets/images/its_2.png";
import image3 from "../../assets/images/its_3.png";
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

const images = [image1, image2, image3, image4];

const ITSsystem: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Primera Card */}
      <div
        className={`${styles.titleCard} ${styles.backgroundColor} ${styles.card}`}
      >
        <h1 className={styles.centerText}>ITS Web Managers</h1>
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
            <h2>Project overview:</h2>
            <p>
              <strong>Goals:</strong>
            </p>
            <p>
              This Intelligent Transportation System (ITS) goal is to be a
              comprehensive solution to manage transit operations in real-time.
              My role focused on UI/UX design, specifically prototyping and
              designing the interface to ensure it was intuitive for transit
              operators, drivers, and passengers.
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
            <p>
              Designing components and user flows, applying both UX and UI
              principles.
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
          title="Design Thinking Approach:"
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
                I applied a design thinking methodology to guide the design
                process:
              </p>
              <ul>
                <li>
                  <strong>Empathize:</strong> Conducted in-depth user research
                  through surveys, interviews, and field observations to
                  understand the challenges faced by operators, drivers, and
                  passengers.
                </li>
                <li>
                  <strong>Define:</strong> Identified key user pain points and
                  set actionable design goals.
                </li>
                <li>
                  <strong>Ideate:</strong> Brainstormed potential solutions and
                  features to address the needs identified.
                </li>
                <li>
                  <strong>Prototype:</strong> Created interactive designs and
                  prototypes for stakeholder review.
                </li>
                <li>
                  <strong>Test:</strong> Conducted usability testing and
                  iterated on the design based on feedback.
                </li>
              </ul>
            </div>
          }
        />
        <hr className={styles.separator} />

        <DescriptionLayout
          title="Prototyping with Figma:"
          titleColor="var(--section-3-title)"
          icons={[{ src: figma, alt: "Icon 6" }]}
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
        <hr className={styles.separator} />

        <DescriptionLayout
          title="Design System:"
          titleColor="var(--section-3-title)"
          icons={[{ src: keyboard, alt: "Icon 8" }]}
          paragraph={
            <>
              <div>
                <p>
                  I developed a comprehensive design system to standardize the
                  UI and streamline development. This included:
                </p>

                <ul>
                  <li>
                    <strong>Visual guidelines:</strong> Colors, typography, and
                    iconography for a consistent and accessible interface.
                  </li>
                  <li>
                    <strong>UI components:</strong> Reusable elements like
                    buttons, forms, and menus, which simplified development and
                    maintained visual harmony.
                  </li>
                  <li>
                    <strong>Interaction patterns:</strong> Standardized
                    animations and transitions to ensure smooth user experience
                    across devices.
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <hr className={styles.separator} />

        <DescriptionLayout
          title="UX Research and Testing:"
          titleColor="var(--section-3-title)"
          icons={[{ src: sakura, alt: "Icon 10" }]}
          paragraph={
            <>
              <div>
                <p>
                  The UX research focused on understanding the workflows and
                  pain points of different users:
                </p>

                <ul>
                  <li>
                    Created personas and journey maps to visualize the needs of
                    operators, drivers, and passengers.
                  </li>
                  <li>
                    Conducted usability tests on prototypes with real users to
                    gather feedback.
                  </li>
                  <li>
                    Incorporated user feedback in iterative design improvements.
                  </li>
                </ul>
              </div>
            </>
          }
        />
        <hr className={styles.separator} />

        <DescriptionLayout
          title="Key Features of the Web Manager:"
          titleColor="var(--section-3-title)"
          icons={[{ src: brillo, alt: "Icon 12" }]}
          paragraph={
            <>
              <div>
                <p>
                  The web manager UI was designed with a focus on operational
                  efficiency, and it includes:
                </p>

                <ul>
                  <li>
                    Real-Time Vehicle Monitoring: Allows operators to track
                    buses and other vehicles in real time, improving fleet
                    management and responsiveness.
                  </li>
                  <li>
                    Driver Communications: Provides a streamlined interface for
                    real-time communication with drivers, ensuring quick and
                    clear updates.
                  </li>
                  <li>
                    Passenger Information Capabilities: Displays real-time
                    passenger updates like bus schedules and route information,
                    helping operators provide better service.
                  </li>
                </ul>
              </div>
            </>
          }
        />
      </div>

      {/* Cuarta Card con el componente Carousel */}
      <FleetManagementCard
        title="Wireframes:*"
        iconSrc={computer}
        images={images}
      />
    </div>
  );
};

export default ITSsystem;
