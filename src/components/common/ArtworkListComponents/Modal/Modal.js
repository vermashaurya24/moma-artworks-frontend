import React from "react";
import "./Modal.css";

//Reusable Modal component.
const Modal = ({ modalText, showModal, closeModal, children }) => {
  return (
    <>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{modalText}</h2>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </div>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
