import React, { useState } from "react";
import Modal from "../Modal/Modal";

const AddArtworkButton = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Add new artwork</button>
      <Modal showModal={showModal} closeModal={closeModal}>
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
      </Modal>
    </div>
  );
};

export default AddArtworkButton;
