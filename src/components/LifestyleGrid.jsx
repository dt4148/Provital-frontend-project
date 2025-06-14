// src/components/LifestyleGrid.jsx
import React from "react";
import "../styles/components/_lifestylegrid.scss";

import img1 from "../assets/food.jpg";
import img2 from "../assets/yoga.jpg";
import img3 from "../assets/kitchen.jpg";
import img4 from "../assets/smile.jpg";
import img5 from "../assets/beach.jpg";
import img6 from "../assets/stretch.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const LifestyleGrid = () => {
  return (
    <div className="lifestyle-grid">
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`Lifestyle ${idx}`} />
      ))}
    </div>
  );
};

export default LifestyleGrid;
