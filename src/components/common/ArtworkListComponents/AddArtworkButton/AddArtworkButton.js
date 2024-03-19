import React, { useState } from "react";
import Modal from "../Modal/Modal";
import AddArtworkForm from "../AddArtworkForm/AddArtworkForm";
import axios from "axios";

const AddArtworkButton = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (artworkData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/backend-api/artworks/create",
        artworkData
      );
      console.log("Artwork added successfully:", response.data);
    } catch (error) {
      console.error("Error adding artwork:", error);
    }
  };

  return (
    <div>
      <button onClick={openModal}>Add new artwork</button>
      <Modal
        modalText={"Add New Artwork"}
        showModal={showModal}
        closeModal={closeModal}
      >
        <AddArtworkForm onSubmit={handleSubmit} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default AddArtworkButton;
