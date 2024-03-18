// ArtworkTable.js
import React from "react";
import ArtworkTableRow from "../ArtworkTableRow/ArtworkTableRow";
import "./ArtworkTable.css";

const ArtworkTable = ({ artworks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>URL</th>
          <th>Thumbnail</th>
          <th>Nationality</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {artworks.length > 0 ? (
          artworks.map((artwork) => (
            <ArtworkTableRow key={artwork.artwork_id} artwork={artwork} />
          ))
        ) : (
          <p className="no-artworks-message">Sorry, no artworks found.</p>
        )}
      </tbody>
    </table>
  );
};

export default ArtworkTable;
