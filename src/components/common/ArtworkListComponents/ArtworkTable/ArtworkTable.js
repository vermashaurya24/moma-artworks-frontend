// ArtworkTable.js
import React from "react";
import ArtworkTableRow from "../ArtworkTableRow/ArtworkTableRow";

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
        {artworks.map((artwork) => (
          <ArtworkTableRow key={artwork.artwork_id} artwork={artwork} />
        ))}
      </tbody>
    </table>
  );
};

export default ArtworkTable;
