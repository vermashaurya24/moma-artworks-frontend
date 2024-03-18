// ArtworkTableRow.js
import React, { useState } from "react";
import ArtworkTableCell from "../ArtworkTableCell/ArtworkTableCell";
import Modal from "../Modal/Modal";
import axios from "axios";

const ArtworkTableRow = ({ artwork, onDelete }) => {
  const { artwork_id, title, displayname, url, imageurl, nationality, date } =
    artwork;

  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/backend-api/artworks/${artwork_id}`
      );
      onDelete(artwork_id);
    } catch (error) {
      console.error("Error deleting artwork:", error);
    }
  };

  const openModal = () => {
    setShowModal(true); // Open the modal when view button is clicked
  };

  const closeModal = () => {
    setShowModal(false); // Set showModal state to false to close the modal
  };

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
          <button onClick={openModal}>View</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </ArtworkTableCell>
      {showModal && (
        <Modal
          modalText={"Artwork Details"}
          showModal={showModal}
          closeModal={closeModal}
        >
          <div>
            <h2>{title}</h2>
            <h3>
              {displayname},{date || " No date given"}
            </h3>
            <img
              src={imageurl}
              alt={title}
              style={{
                maxWidth: "100%",
                maxHeight: "50vh",
                marginBottom: "20px",
              }}
            />
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url || "No URL given"}
            </a>
          </div>
        </Modal>
      )}
    </tr>
  );
};

export default ArtworkTableRow;
