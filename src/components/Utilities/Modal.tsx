import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent as SvgX } from "../../assets/x.svg";

const ModalContent: React.FC<{
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}> = ({ children, onClose, title }) => {
  const closeModalHandler = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    
  );
};

const modalElement = document.getElementById("modal")! as HTMLElement;

const Modal: React.FC<{
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}> = ({ children, onClose, title }) => {
  return ReactDOM.createPortal(
    <ModalContent children={children} onClose={onClose} title={title} />,
    modalElement
  );
};

export default Modal;
