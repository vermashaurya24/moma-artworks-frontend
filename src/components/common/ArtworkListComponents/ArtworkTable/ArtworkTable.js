import React, { useState, useEffect } from "react";
import ArtworkTableRow from "../ArtworkTableRow/ArtworkTableRow";
import "./ArtworkTable.css";

const ArtworkTable = ({ artworks }) => {
  const [artworkList, setArtworkList] = useState(artworks);

  useEffect(() => {
    setArtworkList(artworks);
  }, [artworks]);

  const handleDelete = (deletedArtworkId) => {
    setArtworkList((prevArtworks) =>
      prevArtworks.filter((artwork) => artwork.artwork_id !== deletedArtworkId)
    );
  };
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
        {artworkList.length > 0 ? (
          artworkList.map((artwork) => (
            <ArtworkTableRow
              key={artwork.artwork_id}
              artwork={artwork}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <tr>
            <td colSpan="7">Sorry, no artworks found.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ArtworkTable;
