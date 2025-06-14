import React from 'react';
import '../styles/components/_pillcard.scss';
import { FaHeartbeat, FaRunning, FaBed, FaSpa, FaUsers, FaBan } from 'react-icons/fa';

const content = {
  'Nutrition': {
    time: '121/80 mmHg',
    description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
    image: '/assets/nutrition.jpg',
    icon: <FaHeartbeat />
  },
  'Physical activity': {
    time: '32 minutes',
    description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
    image: '/assets/exercise.jpg',
    icon: <FaRunning />
  },
  'Restorative sleep': {
    time: '8 hours',
    description: 'Consistent, quality sleep supports cognitive function and physical health.',
    image: '/assets/sleep.jpg',
    icon: <FaBed />
  },
  'Stress management': {
    time: '20 min/day',
    description: 'Mindfulness, relaxation techniques, and positive coping strategies help manage stress effectively.',
    image: '/assets/stress.jpg',
    icon: <FaSpa />
  },
  'Social connection': {
    time: '5 interactions',
    description: 'Strong social connections improve emotional wellbeing and longevity.',
    image: '/assets/social.jpg',
    icon: <FaUsers />
  },
  'Substance abuse': {
    time: 'Avoided',
    description: 'Avoiding tobacco, excessive alcohol, and other substances promotes long-term health.',
    image: '/assets/substance.jpg',
    icon: <FaBan />
  }
};

const PillCard = ({ title }) => {
  const data = content[title] || {};

  return (
    <div className="pill-card">
      <img className="card-img" src={data.image} alt={title} />
      <div className="card-info">
        <div className="pill-tag">
          <span className="pill-icon">{data.icon}</span>
          <span className="pill-time">{data.time}</span>
        </div>
        <h3>{title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default PillCard;
