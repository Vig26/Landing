import Timer from "otp-timer";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ButtonLoader from "../../../../../../components/ButtonLoader";
import { loginusingmobile } from "../../../../../../redux/actions/productActions";
import {
  getAadhaarData,
  sendAadharSmsKyc,
} from "../../../../../../redux/actions/loginActions";
import { showMessage } from "../../../../../../redux/actions/showMessage";
import { encrypt } from "../../../../../../utils/common";
import fetcher from "../../../../../../utils/fetcher";
import Style from "../SignInForm/SignInForm.module.css";
import { IS_LOGGED_IN } from "../../../../../../redux/contants/action-types";

export default function AadharAuthentication({ handleSendAadhaarSms, type }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const aadhaarSmsData = useSelector(
    (state) => state.loginReducer.aadhaarSmsData
  );
  const loading = useSelector((state) => state.loginReducer.loading);
  const [userOtp, setNewOtp] = useState("");
  const {saveconsent} = useSelector((state) => state.loginReducer);
  const handleChangeOtp = (event) => {
    const { value } = event.target;
    setNewOtp(value.replace(/[^0-9]/g, ""));
  };

  const handleSubmitFinalData = () => {
    const enctryptedOTP = encrypt(userOtp);

    const payload = {
      aadharNo: aadhaarSmsData.aadharNo,
      mod: enctryptedOTP.toString(),
      txn: aadhaarSmsData.txn,
    };

    const successCB = () => {
      history.push("/dashboard");
    };

    dispatch(sendAadharSmsKyc(payload, type, successCB,saveconsent));

    // setLoading(true);
    // fetch("post", `sendAadharSmsKyc`, payload, false)
    //   .then(async (response) => {
    //     if (response) {
    //       setLoading(false);
    //       if (type === "Aadhaar") {
    //         const payload = {
    //           adharNo: aadhaarSmsData.aadharNo,
    //         };
    //         setLoading(true);
    //         fetch("post", `getAdharDataByMobOrAdhar`, payload, false)
    //           .then((res) => {
    //             if (res.data.data.length) {
    //               localStorage.setItem(
    //                 "MakkalId",
    //                 encrypt(res.data.data[0].makkalId).toString()
    //               );
    //               dispatch(
    //                 loginusingmobile({ personalInfo: res.data.data[0] })
    //               );
    //               setLoading(false);
    //               history.push("/Dashboard");
    //             } else {
    //               setLoading(false);
    //               dispatch(
    //                 showMessage({
    //                   title:
    //                     "Dear user, we did not find your details on SFDB. Request you to please contact help desk team for registration.",
    //                   variant: "error",
    //                   description: "",
    //                 })
    //               );
    //             }
    //           })
    //           .catch((error) => {
    //             setLoading(false);
    //             dispatch(
    //               showMessage({
    //                 title:
    //                   "Dear user, we did not find your details on SFDB. Request you to please contact help desk team for registration.",
    //                 variant: "error",
    //                 description: "",
    //               })
    //             );
    //             console.log("error", error);
    //           });
    //       } else {
    //         setLoading(false);
    //         localStorage.setItem(
    //           "MakkalId",
    //           encrypt(users[0].makkalId).toString()
    //         );
    //         dispatch(loginusingmobile({ personalInfo: users[0] }));
    //         history.push("/Dashboard");
    //       }
    //     } else {
    //       setLoading(false);
    //       history.push("/Dashboard");
    //     }
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.log("error", error);
    //     dispatch(
    //       showMessage({
    //         title: "Something Went Wrong",
    //         variant: "error",
    //         description: "",
    //       })
    //     );
    //   });
  };
  const handleResendAadhaarSms = () => {
    const payload = {
      aadharNo: aadhaarSmsData.aadharNo,
    };
    // ! Not Getting Function Here
    handleSendAadhaarSms(payload);
  };

  const isOtpFilled = userOtp.length !== 6;

  return (
    <>
      <Form.Control
        placeholder={t("please_enter_otp")}
        className={Style.filledInput}
        onChange={handleChangeOtp}
        value={userOtp}
        maxLength={6}
      />
      <div className={[Style.ResendOtp, "mb-3"].join(" ")}>
        <Timer
          seconds={59}
          minutes={2}
          ButtonText={t("resent_otp")}
          resend={handleResendAadhaarSms}
          text={t("time_left")}
        />
      </div>
      <button
        className={[Style.submitButton, "w-100"].join(" ")}
        onClick={handleSubmitFinalData}
        disabled={isOtpFilled || loading}
      >
        {loading ? <ButtonLoader /> : t("proceed")}
      </button>
    </>
  );
}
