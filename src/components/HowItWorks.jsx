import React, { useRef, useState } from "react";
import { cardsData } from "../../utils/constants/cardsData.jsx";
import "../styles/components/_howitworks.scss";
import {
  NutritionBadgeIcon,
  PhysicalActivityBadgeIcon,
  RestorativeSleepBadgeIcon,
  StressManagementBadgeIcon,
  SocialConnectionBadgeIcon,
  SubstanceAbuseBadgeIcon,
} from "../icons/BadgeIcons";

const HowItWorks = () => {
  const categories = [
    "Nutrition",
    "Physical activity",
    "Restorative sleep",
    "Stress management",
    "Social connection",
    "Substance abuse",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const cardsContainerRef = useRef(null);
  const sectionRefs = useRef({});

  const getBadgeContent = (card) => {
    switch (card?.title) {
      case "Nutrition":
        return {
          icon: <NutritionBadgeIcon />,
          text: card?.duration,
          unit: card?.unit,
        };
      case "Physical activity":
        return {
          icon: <PhysicalActivityBadgeIcon />,
          text: card?.duration,
          unit: "minutes",
        };
      case "Restorative sleep":
        return {
          icon: <RestorativeSleepBadgeIcon />,
          text: card?.duration,
          unit: "hours",
        };
      case "Stress management":
        return {
          icon: <StressManagementBadgeIcon />,
          text: card?.duration,
          unit: card?.unit,
        };
      case "Social connection":
        return {
          icon: <SocialConnectionBadgeIcon />,
          text: "Feeling",
          unit: "good",
        };
      case "Substance abuse":
        return {
          icon: <SubstanceAbuseBadgeIcon />,
          text: card?.duration,
          unit: card?.unit,
        };
      default:
        return {
          icon: "❤",
          text: card?.duration,
          unit: card?.unit,
        };
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const slider = cardsContainerRef.current;
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const slider = cardsContainerRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  };

  const moveCards = (direction) => {
  const currentIndex = categories.indexOf(activeCategory);
  const newIndex = currentIndex + direction;

  if (newIndex >= 0 && newIndex < categories.length) {
    const newCategory = categories[newIndex];
    scrollToCategory(newCategory);
  }
};



  const scrollToCategory = (category) => {
  const section = sectionRefs.current[category];
  if (section && cardsContainerRef.current) {
    cardsContainerRef.current.scrollTo({
      left: section.offsetLeft - 69, // adjust -24 as needed
      behavior: "smooth",
    });
  }
  setActiveCategory(category);
};


  return (
    <section className="how-it-works">
      <div className="container">
        <div className="how-it-works__header">
          <h2>
            <span>HOW IT WORKS?</span>
            Lifestyle as medicine:{" "}
            <span className="text-accent">The six pillars</span>
          </h2>

          <div className="how-it-works__nav">
            <button
              type="button"
              className="how-it-works__nav-button"
              onClick={() => moveCards(-1)}
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 19L8 12L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="how-it-works__nav-button"
              onClick={() => moveCards(1)}
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 5L16 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="how-it-works__categories">
          {categories.map((data, index) => (
            <button
              key={index}
              className={`how-it-works__category ${
                data === activeCategory ? "active" : ""
              }`}
              onClick={() => scrollToCategory(data)}
            >
              {data}
            </button>
          ))}
        </div>

        <div
          ref={cardsContainerRef}
          className={`how-it-works__cards ${isDragging ? "grabbing" : ""}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {categories.map((cat) => {
            const catCards = cardsData.filter((card) => card.title === cat);
            return (
              <div
                key={cat}
                ref={(el) => (sectionRefs.current[cat] = el)}
                style={{ display: "flex", gap: "24px" }}
              >
                {catCards.map((card, index) => {
                  const badgeContent = getBadgeContent(card);
                  return (
                    <div key={index} className="how-it-works__card">
                      <div className="card-image-container">
                        <img
                          src={card?.image}
                          alt={card?.title}
                          className="card-image"
                          draggable="false"
                        />
                        <div className="card-badge">
                          <span className="badge-icon">
                            {badgeContent.icon}
                          </span>
                          <span className="badge-text">
                            {badgeContent.text}
                          </span>
                          <span className="badge-unit">
                            {badgeContent.unit}
                          </span>
                        </div>
                      </div>
                      <div className="card-content">
                        <h3>{card?.title}</h3>
                        <p>{card?.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
