// src/components/SearchBar.jsx
import React from "react";
import "../styles/components/_searchbar.scss";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <input type="text" placeholder="Condition, procedure, speciality..." />
        <input type="text" placeholder="City, state, or zipcode" />
        <input type="text" placeholder="Insurance carrier" />
        <button>🔍 Find now</button>
      </div>
    </div>
  );
};

export default SearchBar;
