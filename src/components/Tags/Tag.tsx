import React from "react";
import styles from "./Tag.module.css";

interface TagProps {
  name: string;
}

const Tag: React.FC<TagProps> = ({ name }) => {
  const getTagColor = (tagName: string) => {
    switch (tagName.toLowerCase()) {
      case "ux":
        return styles.ux;
      case "ui":
        return styles.ui;
      case "coding":
        return styles.coding;
      case "graphicdesign":
        return styles.graphicDesign;
      default:
        return styles.defaultTag;
    }
  };

  return <span className={`${styles.tag} ${getTagColor(name)}`}>{name}</span>;
};

export default Tag;
