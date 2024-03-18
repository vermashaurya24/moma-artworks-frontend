import React, { useState } from "react";
import ArtistDropdown from "../ArtistDropdown/ArtistDropdown";
import "./AddArtworkForm.css";

const AddArtworkForm = ({ onSubmit, closeModal }) => {
  const [title, setTitle] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [url, setUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [nationality, setNationality] = useState("");
  const [date, setDate] = useState("");
  const [constituentid, setConstituentID] = useState(0);

  const handleArtistSelect = (constituentid, displayName, nationality) => {
    setConstituentID(constituentid);
    setDisplayName(displayName);
    setNationality(nationality);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      title,
      displayName: displayName,
      url,
      thumbnailUrl,
      nationality,
      date,
      artist_id: constituentid,
    };
    onSubmit(postData);
    closeModal();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Artist:</label>
        <ArtistDropdown onSelectArtist={handleArtistSelect} />
      </div>
      <div className="form-group">
        <label className="form-label">URL:</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Thumbnail URL:</label>
        <input
          type="text"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Nationality:</label>
        <input
          type="text"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          disabled
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-input"
        />
      </div>
      <button type="submit" className="form-button">
        Add Artwork
      </button>
    </form>
    //  <form onSubmit={handleSubmit}>
    //    <div>
    //      <label>Title:</label>
    //      <input
    //        type="text"
    //        value={title}
    //        onChange={(e) => setTitle(e.target.value)}
    //      />
    //    </div>
    //    <div>
    //      <label>Artist:</label>
    //      <ArtistDropdown onSelectArtist={handleArtistSelect} />
    //    </div>
    //    <div>
    //      <label>URL:</label>
    //      <input
    //        type="text"
    //        value={url}
    //        onChange={(e) => setUrl(e.target.value)}
    //      />
    //    </div>
    //    <div>
    //      <label>Thumbnail URL:</label>
    //      <input
    //        type="text"
    //        value={thumbnailUrl}
    //        onChange={(e) => setThumbnailUrl(e.target.value)}
    //      />
    //    </div>
    //    <div>
    //      <label>Nationality:</label>
    //      <input
    //        type="text"
    //        value={nationality}
    //        onChange={(e) => setNationality(e.target.value)}
    //        disabled
    //      />
    //    </div>
    //    <div>
    //      <label>Date:</label>
    //      <input
    //        type="date"
    //        value={date}
    //        onChange={(e) => setDate(e.target.value)}
    //      />
    //    </div>
    //    <button type="submit">Add Artwork</button>
    //  </form>
  );
};

export default AddArtworkForm;
