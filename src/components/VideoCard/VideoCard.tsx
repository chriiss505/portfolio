import React from "react";
import styles from "./VideoCard.module.css";

interface VideoCardProps {
  title: string;
  videoSrc: string; // URL o ruta del video
  text: string; // Texto para mostrar
}

const VideoCard: React.FC<VideoCardProps> = ({ title, videoSrc, text }) => {
  return (
    <div className={styles.videoCard}>
      <div className={styles.content}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{text}</p>
        </div>
        <div className={styles.videoContainer}>
          {/* Usamos la etiqueta video para reproducir contenido local */}
          <video className={styles.video} controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
