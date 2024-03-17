import React from "react";
import ArtistTableRow from "../ArtistTableRow/ArtistTableRow";
import "./ArtistTable.css";

function ArtistTable({ artists, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Display Name</th>
          <th>Artist Bio</th>
          <th>Nationality</th>
          <th>Gender</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {artists.map((artist) => (
          <ArtistTableRow
            key={artist.artist_id}
            artist={artist}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ArtistTable;
