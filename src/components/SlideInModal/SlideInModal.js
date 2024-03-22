import React from "react";
import ReactDOM from "react-dom";
import Style from "./SlideInModal.module.css";

const portalElement = document.getElementById("modal");
function SlideInModal({ toggleModal, children, slideFrom }) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={Style.backDropWrapper} onClick={toggleModal}></div>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div
          className={[
            Style.modalWrapper,
            Style[
              `${slideFrom === "left" ? "slideFromLeft" : "slideFromRight"}`
            ],
          ].join(" ")}
        >
          {children}
        </div>,
        portalElement
      )}
    </>
  );
}

export default SlideInModal;
