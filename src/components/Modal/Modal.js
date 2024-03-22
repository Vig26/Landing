// Custom Modal using React Portal

import React from "react";
import Style from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  let isBackdropClosable;
  if (props.handleBackDropClose === undefined) {
    isBackdropClosable = true;
  }

  return (
    <div
      className={Style.backdrop}
      onClick={isBackdropClosable ? props.onClose : () => {}}
    />
  );
};
const ModalOverlay = (props) => {
  return (
    <div className={Style.modal}>
      <div className={Style.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("modal");
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          onClose={props.toggleModal}
          handleBackDropClose={props.handleBackDropClose}
        />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children} </ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
