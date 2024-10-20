import React from "react";
import styles from "./VideoCard.module.css"; // Asegúrate de crear este archivo CSS

interface VideoCardProps {
  title: string;
  videoSrc: string; // URL del video
  text: string; // Texto para mostrar en la columna derecha
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
          <iframe
            className={styles.video}
            src={videoSrc}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
