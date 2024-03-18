// ArtworkTableRow.js
import React from "react";
import ArtworkTableCell from "../ArtworkTableCell/ArtworkTableCell";

const ArtworkTableRow = ({ artwork }) => {
  const { title, displayname, url, imageurl, nationality, date } = artwork;

  return (
    <tr>
      <ArtworkTableCell value={title} leftAlign={true} />
      <ArtworkTableCell value={displayname} leftAlign={true} />
      <ArtworkTableCell value={url} isURL={true} leftAlign={true} />
      <ArtworkTableCell value={imageurl} isImage={true} />
      <ArtworkTableCell value={nationality} />
      <ArtworkTableCell value={date} />
      <ArtworkTableCell>
        <div className="cell-buttons">
          <button>Edit</button>
          <button>View</button>
          <button>Delete</button>
        </div>
      </ArtworkTableCell>
    </tr>
  );
};

export default ArtworkTableRow;
