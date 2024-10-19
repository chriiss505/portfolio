import React from "react";
import styles from "./AboutCard.module.css"; // Asegúrate de crear el archivo CSS correspondiente
import sioWagging from "../../assets/images/sio_turning_v3.gif";

const AboutCard: React.FC = () => {
  return (
    <div className={styles.aboutCard}>
      <div className={styles.leftColumn}>
        <p>
          <span className={styles.redText}>
            Hello, I’m Cristina, a Full-Stack Designer
          </span>
          —which means I not only design but also code!—{" "}
          <span className={styles.redText}>
            with 10 years of expertise in intelligent transportation systems .
            My specialization lies in transforming complex data and processes
            into seamless, intuitive user experiences that people can engage
            with effortlessly. While I can't showcase all of my projects due to
            data protection, I’ve included the ones I have permission to share
            here. I’m quick to learn new languages, tools, and frameworks and
            this is my Core stack:
          </span>{" "}
          Adobe Creative Cloud, Figma, Blender, Android Studio (Java), HTML,
          CSS, SCSS, JavaScript, Angular, Node, Git
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
