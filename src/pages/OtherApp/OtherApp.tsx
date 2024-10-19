import React from "react";
import styles from "./OtherApp.module.css";
import Tag from "../../components/Tags/Tag"; // Asumiendo que tienes un componente Tag para las etiquetas

const OtherApp: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Primera Card */}
      <div
        className={`${styles.titleCard} ${styles.lilaBackground} ${styles.card}`}
      >
        <h1 className={styles.centerText}>Project Title</h1>
        <div className={styles.tagsContainer}>
          <Tag name="UI" />
          <Tag name="UX" />
          <Tag name="Graphic Design" />
          <Tag name="Coding" />
        </div>
      </div>

      {/* Segunda Card */}
      <div className={`${styles.card} ${styles.lilaBackground}`}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.leftColumn}>
            <h2>Project Title</h2>
            <p>
              This is the description of the project. It explains the details of
              the project.
            </p>
          </div>
          <div className={styles.rightColumn}>
            <img src="https://via.placeholder.com/200" alt="Project Image" />
          </div>
        </div>
      </div>

      {/* Tercera Card */}
      <div className={`${styles.card} ${styles.whiteBackground}`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={styles.twoColumnLayout}>
            <div className={styles.leftColumnIcons}>
              <h2>Skills</h2>
              <div className={styles.iconRow}>
                <img src="https://via.placeholder.com/50" alt="Icon 1" />
                <img src="https://via.placeholder.com/50" alt="Icon 2" />
                <img src="https://via.placeholder.com/50" alt="Icon 3" />
                <img src="https://via.placeholder.com/50" alt="Icon 4" />
                <img src="https://via.placeholder.com/50" alt="Icon 5" />
              </div>
            </div>
            <div className={styles.rightColumn}>
              <p>This is a paragraph describing the skill set in detail.</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cuarta Card */}
      <div className={`${styles.card} ${styles.whiteBackground}`}>
        <div className={styles.twoThirdsLayout}>
          <div className={styles.leftColumn}>
            <h2>Additional Info</h2>
            <img src="https://via.placeholder.com/50" alt="Icon 1" />
            <img src="https://via.placeholder.com/50" alt="Icon 2" />
          </div>
          <div className={styles.carousel}>
            <div className={styles.scrollContainer}>
              {Array.from({ length: 4 }).map((_, index) => (
                <img
                  key={index}
                  src={`https://via.placeholder.com/300?text=Image+${
                    index + 1
                  }`}
                  alt={`Carousel Image ${index + 1}`}
                  className={styles.carouselImage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherApp;
