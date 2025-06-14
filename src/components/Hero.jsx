import React from "react";
import "../styles/components/_hero.scss";

import img1 from "../assets/food.jpg";
import img2 from "../assets/beach.jpg";
import img3 from "../assets/cook.jpg";
import img4 from "../assets/yoga.jpg";
import img5 from "../assets/kitchen.jpg";
import img6 from "../assets/smile.jpg";
import img7 from "../assets/plant.jpg";
import img8 from "../assets/stretch.jpg";

const leftImages = [img1, img2, img3, img7];
const rightImages = [img4, img5, img6, img8];

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-images-wrapper">
        <div className="column scroll-down">
          {[...leftImages, ...leftImages].map((img, idx) => (
            <img key={`left-${idx}`} src={img} alt={`Left ${idx}`} />
          ))}
        </div>
        <div className="column scroll-up">
          {[...rightImages, ...rightImages].map((img, idx) => (
            <img key={`right-${idx}`} src={img} alt={`Right ${idx}`} />
          ))}
        </div>
      </div>

      {/* Text content exactly as per Figma */}
      <div className="hero-content">
        <h1>
          Book an appointment with <br />
          <span>lifestyle medicine</span><br/> experts
        </h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
      </div>

      
<div className="floating-search">
  <div className="input-wrapper">
    <span className="icon material-icons">search</span>
    <input type="text" placeholder="Condition, procedure, specialty..." />
  </div>
  <div className="input-wrapper">
    <span className="icon material-icons">location_on</span>
    <input type="text" placeholder="City, state, or zipcode" />
  </div>
  <div className="input-wrapper">
    <span className="icon material-icons">credit_card</span>
    <input type="text" placeholder="Insurance carrier" />
  </div>
  <button>Find now</button>
</div>

    </div>
  );
};

export default HeroSection;
