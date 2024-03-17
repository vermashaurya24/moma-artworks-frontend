// ArtworkTableRow.js
import React from "react";
import ArtworkTableCell from "../ArtworkTableCell/ArtworkTableCell";

const ArtworkTableRow = ({ artwork }) => {
  const { title, displayname, url, imageurl, nationality, date } = artwork;

  return (
    <tr>
      <ArtworkTableCell value={title} />
      <ArtworkTableCell value={displayname} />
      <ArtworkTableCell value={url} isURL={true} />
      <ArtworkTableCell value={imageurl} isImage={true} />
      <ArtworkTableCell value={nationality} />
      <ArtworkTableCell value={date} />
      <ArtworkTableCell>
        {/* Actions buttons (edit, view, delete) */}
        <button>Edit</button>
        <button>View</button>
        <button>Delete</button>
      </ArtworkTableCell>
    </tr>
  );
};

export default ArtworkTableRow;
