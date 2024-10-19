/*import React from "react";

interface IconProps {
  src: string;
  alt: string;
}

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} style={{ width: "50px", height: "50px" }} />;
};

export default Icon;*/
import React from "react";

interface IconProps {
  src: string;
  alt: string;
  onClick?: () => void; // Hacemos que onClick sea opcional
}

const Icon: React.FC<IconProps> = ({ src, alt, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
        width: "50px",
        height: "50px",
      }} // Cambiamos el cursor si hay onClick
    />
  );
};

export default Icon;
