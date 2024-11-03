import React from "react";
import ScrollToTop from "./components/ScrollToTop"; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import { useTranslation } from "react-i18next";
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
import arrowDown from "./assets/images/down.svg";

/*--------------images------------*/

import streetPIDImage from "./assets/images/street_pid_11.png";
import onboardPIDImage from "./assets/images/screenin.png";
import otherAppsImage from "./assets/images/waysion.png";
import itsImage from "./assets/images/its.png";
import teletextImage from "./assets/images/teletexto.png";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "es") => {
    i18n.changeLanguage(lng);
  };

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <ScrollToTop />

        {/* Botones para cambiar el idioma */}
        <div className={styles.languageSwitcher}>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("es")}>Español</button>
        </div>

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
                    {t("thework")} {/* Traducción del título */}
                  </h1>
                </div>
                <div className={styles.cardGrid}>
                  {/* Tarjetas de trabajo con traducciones */}
                  <IconCard
                    text={t("transportationProjects")}
                    className={styles.customIconCard}
                  />
                  <Card
                    imageSrc={streetPIDImage}
                    title={t("streetPidTitle")} // Títulos traducidos
                    tags={["UX", "UI", "Coding", "GraphicDesign"]}
                    description={t("streetPidDescription")} // Descripción traducida
                    readMoreLink="/street-pid"
                    backgroundColor="var(--section-1-background)"
                  />
                  <Card
                    imageSrc={onboardPIDImage}
                    title={t("onboardPidTitle")}
                    tags={["UX", "UI", "Coding", "GraphicDesign"]}
                    description={t("onboardPidDescription")}
                    readMoreLink="/onboard-pid"
                    backgroundColor="var(--section-2-background)"
                  />
                  <Card
                    imageSrc={itsImage}
                    title={t("itsWebManagersTitle")}
                    tags={["UX", "GraphicDesign"]}
                    description={t("itsWebManagersDescription")}
                    readMoreLink="/its-system"
                    backgroundColor="var(--section-3-background)"
                  />
                  <Card
                    imageSrc={otherAppsImage}
                    title={t("otherAppsTitle")}
                    tags={["UX", "GraphicDesign"]}
                    description={t("otherAppsDescription")}
                    readMoreLink="/other-app"
                    backgroundColor="var(--section-4-background)"
                  />

                  <IconCard
                    text={t("artProject")}
                    className={styles.customIconCard}
                  />
                  <div className={styles.cardGrid}>
                    <Card
                      imageSrc={teletextImage}
                      title={t("teletextTitle")}
                      tags={["GraphicDesign", "Coding"]}
                      description={t("teletextDescription")}
                      readMoreLink="/teletext"
                      backgroundColor="var(--section-5-background)"
                      textColor="var(--magenta)"
                      className={styles.customCard}
                    />
                  </div>
                </div>
                {/* Sección About */}
                <div className={styles.header}>
                  <div className={styles.headerLineContainer}>
                    <hr className={styles.headerLine} />
                  </div>
                  <h1 className={styles.headerTitle} id="about">
                    {t("about")} {/* Traducción de la sección */}
                  </h1>
                </div>
                <AboutCard />

                {/* Sección Contact */}
                <div className={styles.header}>
                  <div className={styles.headerLineContainer}>
                    <hr className={styles.headerLine} />
                  </div>
                  <h1 className={styles.headerTitle} id="contact">
                    {t("contact")} {/* Traducción de la sección */}
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
                    text={t("linkedIn")} // Traducción del texto de LinkedIn
                    imgSrc={linkedInIcon}
                    link="https://www.linkedin.com/in/cristina-sanchez-mesa"
                    className={styles.iconCard}
                  />
                  <img
                    src={sioTurning}
                    alt="Descripción del GIF"
                    className={styles.contactGif}
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
