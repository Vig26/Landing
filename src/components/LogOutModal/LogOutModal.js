import React from "react";
import { CloseIcon } from "../../icons";
import Modal from "../Modal";
import Style from "./LogOutModal.module.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout,clearAll } from "../../redux/actions/loginActions";
import { useTranslation } from "react-i18next";
function LogOutModal({ toggleModal }) {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    localStorage.clear();
    dispatch(logout());
    dispatch(clearAll());
    toggleModal();
    history.push({
      pathname: "/login",
    });
  };

  return (
    <Modal toggleModal={toggleModal}>
      <div
        className={[Style.wrapper, "text-center position-relative"].join(" ")}
      >
        <h3 className="pb-2 pt-2">{t("logout")}</h3>
        <hr />
        <p className="pt-1 mb-3 fs-24 font-weight-bold">{t("are_you_sure")}</p>
        <div
          className={[Style.actions, "d-flex justify-content-center"].join(" ")}
        >
          <button
            className={["fs-18", Style.btn, Style.cancel].join(" ")}
            onClick={toggleModal}
          >
            {t("cancel")}
          </button>
          <button
            className={["fs-18", Style.btn, Style.okay].join(" ")}
            onClick={handleLogOut}
          >
            {t("okay")}
          </button>
        </div>
        <button
          className={["position-absolute", Style.iconBtn].join(" ")}
          onClick={toggleModal}
        >
          <CloseIcon color="#0584f2" width={30} height={30} />
        </button>
      </div>
    </Modal>
  );
}

export default LogOutModal;
