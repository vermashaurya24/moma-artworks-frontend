// ArtistTableRow.js

import React from "react";

function ArtistTableRow({ artist, onDelete }) {
  const { artist_id, displayname, artistbio, nationality, gender } = artist;

  const handleDelete = () => {
    onDelete(artist_id);
  };

  return (
    <tr>
      <td>{displayname || "N/A"}</td>
      <td>{artistbio || "N/A"}</td>
      <td>{nationality || "N/A"}</td>
      <td>{gender || "N/A"}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default ArtistTableRow;
