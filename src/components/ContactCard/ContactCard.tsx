import React from "react";
import styles from "./ContactCard.module.css";

interface ContactCardProps {
  subtitle: string;
  title: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ subtitle, title }) => {
  return (
    <div className={styles.contactCard}>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default ContactCard;
