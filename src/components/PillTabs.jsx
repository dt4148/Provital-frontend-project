import React, { useState, useRef } from 'react';
import PillCard from './PillCard';
import '../styles/components/_pilltabs.scss';

const tabs = [
  'Nutrition',
  'Physical activity',
  'Restorative sleep',
  'Stress management',
  'Social connection',
  'Substance abuse'
];

const PillTabs = () => {
  const [active, setActive] = useState('Nutrition');
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="pill-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={active === tab ? 'active' : ''}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="pill-cards-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
        <div className="pill-cards" ref={scrollRef}>
          {tabs.map(tab => (
            <PillCard key={tab} title={tab} />
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
      </div>
    </>
  );
};

export default PillTabs;
