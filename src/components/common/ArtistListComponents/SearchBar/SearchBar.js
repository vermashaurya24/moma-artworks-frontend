import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

function SearchBar({ searchTerm, onSearch, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search artists..."
        value={searchTerm}
        onChange={onChange}
        style={{ marginRight: "5px" }}
      />
      <button
        onClick={onSearch}
        style={{
          background: "transparent", // Set background color to transparent
          border: "none", // Remove border
          padding: 0, // Remove padding
        }}
      >
        <FontAwesomeIcon
          icon={faSearch}
          style={{ backgroundColor: "inherit" }}
        />
      </button>
    </div>
  );
}

export default SearchBar;
