import React from "react";
import "./Modal.scss";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  onClose?: any;
}

const Modal = ({ children, onClose, className }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-close" onClick={onClose} />
      <div className={className ? `modal-box ${className}` : "modal-box"}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
