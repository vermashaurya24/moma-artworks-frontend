// ArtworkTableRow.js
import React, { useState } from "react";
import ArtworkTableCell from "../ArtworkTableCell/ArtworkTableCell";
import Modal from "../Modal/Modal";
import EditArtworkForm from "../EditArtworkForm/EditArtworkForm";
import axios from "axios";

const ArtworkTableRow = ({ artwork, onDelete }) => {
  const { artwork_id, title, displayname, url, imageurl, nationality, date } =
    artwork;

  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

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

  const openViewModal = () => {
    setShowViewModal(true); // Open the modal when view button is clicked
  };

  const closeViewModal = () => {
    setShowViewModal(false); // Set showModal state to false to close the modal
  };

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
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
          <button onClick={openEditModal}>Edit</button>
          <button onClick={openViewModal}>View</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </ArtworkTableCell>
      {showViewModal && (
        <Modal
          modalText={"Artwork Details"}
          showModal={showViewModal}
          closeModal={closeViewModal}
        >
          <div>
            <h2>{title}</h2>
            <h3>
              {displayname},{" " + date || " No date given"}
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
      {showEditModal && (
        <Modal
          modalText={"Edit Artwork"}
          showModal={showEditModal}
          closeModal={closeEditModal}
        >
          <EditArtworkForm artwork={artwork} closeModal={closeEditModal} />
        </Modal>
      )}
    </tr>
  );
};

export default ArtworkTableRow;
