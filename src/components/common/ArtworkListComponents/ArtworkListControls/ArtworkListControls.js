import React from "react";
import AddArtworkButton from "../AddArtworkButton/AddArtworkButton";
import SearchBox from "../SearchBox/SearchBox";
import ArtistDropdown from "../ArtistDropdown/ArtistDropdown";
import "./ArtworkListControls.css";

const ArtworkListControls = ({ onSearch, onArtistChange }) => {
  const handleArtistChange = (selectedArtist) => {
    onArtistChange(selectedArtist); // Call the parent component's function
  };
  return (
    <div className="artwork-list-controls">
      <AddArtworkButton />
      <SearchBox onSearch={onSearch} />
      <ArtistDropdown onSelectArtist={handleArtistChange} />
    </div>
  );
};

export default ArtworkListControls;
