import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AvatarDropDown from "../../../../components/AvatarDropDown";
import UserIcon from "../../../../assets/images/svg/user-circle-icon.svg";
import { getPersonalDetails } from "../../../../redux/actions/personalDetails";
import Style from "./LoginUser.module.css";
import useMakkalId from "../../../../hooks/useMakkalId";
import avatarName from "../../../../utils/avatarIntialName";

function LoginUser() {
  const dispatch = useDispatch();
  const makkalId = useMakkalId();
  const { user, isLoggedIn } = useSelector(({ loginReducer }) => loginReducer);

  useEffect(() => {
    if (isLoggedIn && !user) {
      const payload = {
        makkalId,
      };
      dispatch(getPersonalDetails(payload));
    }
  }, [dispatch, makkalId]);

  const userName = user?.userName || user?.personalInfo?.name;
  return (
    <>
      {Boolean(isLoggedIn && user) ? (
        <AvatarDropDown userName={userName ? avatarName(userName) : ""} />
      ) : (
        <img
          src={UserIcon}
          className={Style.logo}
          alt="user-icon"
          width="43px"
          height="43px"
        />
      )}
    </>
  );
}

export default LoginUser;
