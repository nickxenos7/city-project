import React from "react";
import "./Modal.css"; 

const Modal = ({ onClose, title, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
