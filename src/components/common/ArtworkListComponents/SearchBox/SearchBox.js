import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue); // Pass the search value to the parent component
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search by title"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        onClick={handleSearch}
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
};

export default SearchBox;
