import React, { useMemo, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LogOutModal from "../LogOutModal";
import Style from "./AvtarDropDown.module.css";

function AvatarDropDown({ userName }) {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.loginReducer);

  const [open, setopen] = useState(false);
  const openLogOut = () => {
    setopen(true);
  };
  const history = useHistory();
  const goToProfile = () => {
    history.push("/profile");
  };
  const toggleHandler = () => {
    setopen((prevState) => !prevState);
  };

  const imageUrl = useMemo(
    () =>
      user?.userImagePath
        ? `${process.env.REACT_APP_HOST_API_KEY}${user?.userImagePath}`
        : `${process.env.REACT_APP_HOST_API_KEY}${user?.personalInfo?.imagePath}`,
    [user?.userImagePath, user?.personalInfo?.imagePath]
  );

  return (
    <Dropdown className="d-flex">
      <Dropdown.Toggle variant="" id="dropdown-basic" className={Style.btn}>
        {user?.userImagePath || user?.personalInfo?.imagePath ? (
          <img
            src={imageUrl}
            className={Style.logo}
            alt="user-icon"
            width="43px"
            height="43px"
          />
        ) : (
          userName
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className={Style.dropDownItem} onClick={goToProfile}>
          {user?.personalInfo?.name || user?.userName}
        </Dropdown.Item>
        <Dropdown.Item className={Style.dropDownItem} onClick={openLogOut}>
          {t("logout")}
        </Dropdown.Item>
        {open && <LogOutModal toggleModal={toggleHandler} />}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AvatarDropDown;
