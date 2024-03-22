import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Timer from "otp-timer";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrypt, encrypt } from "../../../../../utils/common";
import Style from "../components/SignInForm/SignInForm.module.css";
import { showMessage } from "../../../../../redux/actions/showMessage";
import ButtonLoader from "../../../../../components/ButtonLoader";
import {
  getAadhaarData,
  getToken,
} from "../../../../../redux/actions/loginActions";

function SendOtp({ setStep, mobileNo, handleSendOtp, setLoginWith }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [newOtp, setNewOtp] = useState("");

  const sendSmsData = useSelector((state) => state.loginReducer.sendOtp);
  const loading = useSelector((state) => state.loginReducer.loading);
  const decrypted = decrypt(sendSmsData.mod ? sendSmsData.mod : "");
  const matchingOtp = decrypted.slice(0, -11);

  const handleSubmit = (event) => {
    event.preventDefault();
    const encryptedMobile = encrypt(mobileNo);
    if (!encryptedMobile) {
      dispatch(
        showMessage({ title: "Enter mobile number please", variant: "error" })
      );
      return;
    }
    // if (matchingOtp !== newOtp) {
    //   dispatch(showMessage({ title: "Invalid OTP", variant: "error" }));
    //   return;
    // }

    const payload = {
      mobileNumber: encryptedMobile.toString(),
    };

    const successCB = () => {
      setStep(3);
    };

    const errorCB = () => {
      dispatch(
        showMessage({
          title: "Enter a valid Mobile Number Registered with Ration Card",
          variant: "warning",
        })
      );
      setStep(1);
      setLoginWith("Aadhaar");
    };

    const successCBOfToken = () => {
      dispatch(getAadhaarData(payload, "Mobile", successCB, errorCB));
    };

    const tokenPayload = {
      userName: encrypt(mobileNo).toString(),
    };

    dispatch(getToken(tokenPayload, successCBOfToken));
  };
  const handleChangeOtp = (event) => {
    const { value } = event.target;
    setNewOtp(value.replace(/[^0-9]/g, ""));
  };

  const isOtpFilled = newOtp.length !== 5;

  return (
    <Form className={Style.form} onSubmit={handleSubmit}>
      <Form.Control
        placeholder={t("enter_mobile_number")}
        className={Style.filledInput}
        name="Mobile"
        maxLength="10"
        pattern="\d*"
        value={mobileNo}
        disabled
      />
      <Form.Control
        placeholder={t("please_enter_otp")}
        className={Style.filledInput}
        maxLength="5"
        pattern="\d*"
        value={newOtp}
        onChange={handleChangeOtp}
      />
      <div className={[Style.ResendOtp, "mb-3"].join(" ")}>
        <Timer
          seconds={59}
          minutes={1}
          ButtonText={t("resent_otp")}
          resend={handleSendOtp}
          text={t("time_left")}
        />
      </div>
      <button 
        className={[Style.submitButton, "w-100"].join(" ")}
        disabled={loading || isOtpFilled}
        type="submit"
      >
        {loading ? <ButtonLoader /> : t("submit")}
      </button>
    </Form>
  );
}

export default SendOtp;
