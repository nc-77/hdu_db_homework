import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export const Modal = ({ modalChildren, showModal, setShowModal }) => {
  console.log(1);
  console.log(showModal);
  const content = (
    <div className="overlay">
      <div className="modal">
        <button
          className="modal-close"
          type="button"
          onClick={() => setShowModal(false)}
        >
          X
        </button>
        <div className="modal-body">{modalChildren}</div>
      </div>
    </div>
  );
  if (showModal) {
    return (
      <>
        {/* {createPortal(content, document.querySelector("#modal"))} */}
        <div>1</div>
      </>
    );
  } else {
    return null;
  }
};

export default Modal;
