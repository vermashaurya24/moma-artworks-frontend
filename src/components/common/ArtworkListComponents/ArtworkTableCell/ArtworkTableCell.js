import React from "react";
import "./ArtworkTableCell.css";

const ArtworkTableCell = ({ value, isImage, isURL, leftAlign, children }) => {
  const renderContent = () => {
    if (isImage) {
      return (
        <img
          src={value}
          alt="Thumbnail"
          style={{ width: "50px", height: "50px" }}
        />
      );
    } else if (isURL) {
      return (
        <a href={value} target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      );
    } else {
      return value;
    }
  };

  return (
    <td className={`truncate-cell ${leftAlign ? `leftAlign` : ``}`}>
      <div className="cell-content">
        {children ? children : renderContent() || "N/A"}
      </div>
    </td>
  );
};

export default ArtworkTableCell;
