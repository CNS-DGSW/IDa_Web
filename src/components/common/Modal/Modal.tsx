import React from "react";
import "./Modal.scss";

interface ModalProps {
  children: React.ReactNode;
  onClose?: any;
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-close" onClick={onClose} />
      <div className="modal-box">{children}</div>
    </div>
  );
};

export default Modal;
