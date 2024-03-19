import React, { useState } from "react";
import "./EditArtworkForm.css";
import axios from "axios";

const EditArtworkForm = ({ artwork, closeModal }) => {
  const {
    title: initialTitle,
    displayname: initialDisplayName,
    url: initialUrl,
    imageurl: initialThumbnailUrl,
    nationality: initialNationality,
    date: initialDate,
  } = artwork;

  const [title, setTitle] = useState(initialTitle);
  const [displayName, setDisplayName] = useState(initialDisplayName);
  const [url, setUrl] = useState(initialUrl);
  const [thumbnailUrl, setThumbnailUrl] = useState(initialThumbnailUrl);
  const [nationality, setNationality] = useState(initialNationality);
  const [date, setDate] = useState(initialDate);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedArtwork = {
      title,
      displayname: displayName,
      url,
      thumbnailUrl,
      nationality,
      date,
    };
    console.log(updatedArtwork);
    try {
      await axios.put(
        `http://localhost:5000/backend-api/artworks/${artwork.artwork_id}`,
        updatedArtwork
      );
      closeModal();
    } catch (error) {
      console.error("Error updating artwork:", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Title:</label>
        <input
          className="form-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Artist:</label>
        <input
          className="form-input"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          disabled
        />
      </div>
      <div className="form-group">
        <label className="form-label">URL:</label>
        <input
          className="form-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Thumbnail URL:</label>
        <input
          className="form-input"
          type="text"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Nationality:</label>
        <input
          className="form-input"
          type="text"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          disabled
        />
      </div>
      <div className="form-group">
        <label className="form-label">Date:</label>
        <input
          className="form-input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button className="form-button" type="submit">
        Update Artwork
      </button>
    </form>
  );
};

export default EditArtworkForm;
