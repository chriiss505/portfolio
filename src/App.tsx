import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Asegúrate de importar Routes
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import Landing from "./components/Landing/Landing";
import styles from "./App.module.css";
import AboutCard from "./components/AboutCard/AboutCard";
import IconCard from "./components/IconCard/IconCard";
import Footer from "./components/Footer/Footer";
import StreetPID from "./pages/StreetPID/StreetPID";
import OnboardPID from "./pages/OnBoardPID/OnboardPID";
import ITSsystem from "./pages/ITS/ITSsystem";
import OtherApp from "./pages/OtherApp/OtherApp";
import Teletext from "./pages/Teletext/Teletext";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

/*--------------icons------------*/

import emailIcon from "./assets/images/email_logo.png";
import linkedInIcon from "./assets/images/linkedin_logo.png";
import brilloIcon from "./assets/images/brillo.svg";
import sioTurning from "./assets/images/sio_turning_v3.gif";

/*--------------images------------*/

import streetPIDImage from "./assets/images/street_pid_1.png";
import onboardPIDImage from "./assets/images/screenin.png";
import otherAppsImage from "./assets/images/waysion.png";
import itsImage from "./assets/images/its.png";
import teletextImage from "./assets/images/teletexto.png";

function App() {
  return (
    <BrowserRouter basename="/portfolio/">
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div className={styles.container} id="landing">
                <Landing />
                <div className={styles.header}>
                  <div className={styles.headerLineContainer}>
                    <hr className={styles.headerLine} />
                  </div>
                  <h1 className={styles.headerTitle} id="the-work">
                    The Work
                  </h1>
                </div>
                <div className={styles.cardGrid}>
                  {/* Agrega las tarjetas con sus respectivos enlaces de "Read More" */}
                  <Card
                    imageSrc={streetPIDImage}
                    title="Street PID’s APK"
                    tags={["UX", "UI", "Coding", "GraphicDesign"]}
                    description="These Street PID’s (Public Information Displays) are placed at bus stops or transit areas to inform passengers of the next arrivals and other relevant information without user interaction."
                    readMoreLink="/street-pid" // Enlace para detalles
                    backgroundColor="var(--section-1-background)"
                  />
                  <Card
                    imageSrc={onboardPIDImage}
                    title="On Board PID’s APK"
                    tags={["UX", "UI", "Coding", "GraphicDesign"]}
                    description="This onboard public information display app provides passengers with real-time updates on upcoming bus stops, destinations, connections to other public transport, and media content such as videos or images."
                    readMoreLink="/onboard-pid" // Enlace para detalles
                    backgroundColor="var(--section-2-background)"
                  />
                  <Card
                    imageSrc={itsImage}
                    title="ITS Web Managers"
                    tags={["UX", "GraphicDesign"]}
                    description="Intelligent Transportation Systems (ITS) allows to manage public transportation fleets in real-time. My role focused on UI/UX design, specifically prototyping and designing the interface to ensure it was intuitive for transit operators."
                    readMoreLink="/its-system" // Enlace para detalles
                    backgroundColor="var(--section-3-background)"
                  />
                  <Card
                    imageSrc={otherAppsImage}
                    title="Other Apps"
                    tags={["UX", "GraphicDesign"]}
                    description="Here, you'll find smaller projects focused on passenger transportation and mobility solutions. Each is designed to enhance efficiency and convenience for both passengers and operators while meeting public tender requirements and industry standards."
                    readMoreLink="/other-app" // Enlace para detalles
                    backgroundColor="var(--section-4-background)"
                  />
                </div>

                {/* Sección About */}
                <div className={styles.header}>
                  <div className={styles.headerLineContainer}>
                    <hr className={styles.headerLine} />
                  </div>
                  <h1 className={styles.headerTitle} id="about">
                    About
                  </h1>
                </div>
                <AboutCard />
                <IconCard
                  text="Extra project"
                  imgSrc={brilloIcon}
                  rightImgSrc={brilloIcon}
                  className={styles.customIconCard}
                />
                <div className={styles.cardGrid}>
                  <Card
                    imageSrc={teletextImage}
                    title="Teletext"
                    tags={["GraphicDesign", "Coding"]}
                    description="In 2023 me and my friend Adela Bacardit signed up for “Stripart” contest, which is a contest for young artists. We won the first prize with this project and got the chance to exhibit it for a whole month in C.C. Guinardó."
                    readMoreLink="/teletext" // Enlace para detalles
                    backgroundColor="var(--section-5-background)"
                    textColor="var(--magenta)"
                    className={styles.customCard}
                  />
                </div>

                {/* Sección Contact */}
                <div className={styles.header}>
                  <div className={styles.headerLineContainer}>
                    <hr className={styles.headerLine} />
                  </div>
                  <h1 className={styles.headerTitle} id="contact">
                    Contact
                  </h1>
                </div>
                <div className={styles.contactSection}>
                  <IconCard
                    text="cristina.sanchez.mesa@gmail.com"
                    imgSrc={emailIcon}
                    link="mailto:cristina.sanchez.mesa@gmail.com"
                    className={styles.iconCard}
                  />
                  <IconCard
                    text="LinkedIn: Cristina Sanchez"
                    imgSrc={linkedInIcon}
                    link="https://www.linkedin.com/in/cristina-sanchez-mesa"
                    className={styles.iconCard}
                  />
                  {/* Agrega el GIF debajo de las icon cards */}
                  <img
                    src={sioTurning}
                    alt="Descripción del GIF"
                    className={styles.contactGif} // Si quieres añadir estilos
                  />
                </div>

                <div className={styles.headerLineContainer}>
                  <hr className={styles.headerLine} />
                </div>
              </div>
            }
          />
          <Route path="/street-pid" element={<StreetPID />} />
          <Route path="/onboard-pid" element={<OnboardPID />} />
          <Route path="/its-system" element={<ITSsystem />} />
          <Route path="/other-app" element={<OtherApp />} />
          <Route path="/teletext" element={<Teletext />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
