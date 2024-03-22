import React, { useState, useEffect } from "react";
import Style from "./Toast.module.css";
import CloseIcon from "../../icons/CloseIcon/CloseIcon";
import CheckIcon from "../../assets/images/svg/check.svg";
import ErrorIcon from "../../assets/images/svg/error.svg";
import WarningIcon from "../../assets/images/svg/warningToast.svg";
import InfoIcon from "../../assets/images/svg/info.svg";
import { removeMessage } from "../../redux/actions/showMessage";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Toast(props) {
  const {
    title,
    description,
    position = "topRight",
    autoDelete,
    autoDeleteTime,
    variant,
    linkText,
    link
  } = props;

  let imagePath;
  switch (variant) {
    case "success":
      imagePath = CheckIcon;
      break;
    case "error":
      imagePath = ErrorIcon;
      break;
    case "info":
      imagePath = InfoIcon;
      break;
    case "warning":
      imagePath = WarningIcon;
      break;
    default:
      imagePath = WarningIcon;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(function () {
      dispatch(removeMessage());
    }, 3000);
  }, [dispatch]);

  const handleCancel = () => {
    dispatch(removeMessage());
  };

  return (
    <div className={[Style.notificationContainer, Style[position]].join(" ")}>
      <div
        className={[
          Style.notification,
          Style.toast,
          Style[position],
          Style[variant],
        ].join(" ")}
      >
        <button onClick={handleCancel}>
          <CloseIcon color="#ffffff" width="16px" height="16px" />
        </button>
        <div className={Style.notificationImage}>
          <img src={imagePath} alt="" />
        </div>
        <div>
          <p className={Style.notificationTitle}>{title}</p>
          <p className={Style.notificationMessage}>{description}</p>
          <Link style={{color: "#fff",fontSize:16,textDecoration: "underline"}} to={link} onClick={handleCancel}>{linkText}</Link>
        </div>
      </div>
    </div>
  );
}

export default Toast;
