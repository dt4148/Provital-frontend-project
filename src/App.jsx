import React from 'react';
import './styles/main.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import GradientDivider from './components/GradientDivider';
import SearchBar from './components/SearchBar';
import LifestyleGrid from './components/LifestyleGrid';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <GradientDivider />
      <HowItWorks />
    </>
  );
}

export default App;
