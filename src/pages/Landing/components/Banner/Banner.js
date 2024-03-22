import HelperText from "../../../../components/HelperText";
import React, { useState } from "react";
import Style from "./Banner.module.css";
import HelpWrapper from "./components/HelpWrapper";
import LatestUpdate from "./components/LatestUpdate";
import StyleSignup from "./components/SignInForm/SignInForm.module.css";
import UserInfo from "./components/UserInfo/UserInfo";
import LoginForm from "./Forms/LoginForm";
import SendOtp from "./Forms/SendOtp";
import AadharAuthentication from "./components/AadharAuthentication";
import CMQuote from "./components/CMQuote";
import RadioButton from "../../../../components/RadioButton";
import StyledRadio from "./components/SignInForm/SignInForm.module.css";
import LoginAadhar from "./components/LoginAadhar";
import { encrypt } from "../../../../utils/common";
import { useTranslation } from "react-i18next";
import { useDispatch,useSelector } from "react-redux";
import {
  sendOtp,
  sendAadhaarSms,
} from "../../../../redux/actions/loginActions";

function Banner() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {saveconsent} = useSelector((state) => state.loginReducer);

  const [step, setStep] = useState(1);

  const [loginWith, setLoginWith] = useState("Mobile"); //Mobile | Aadhaar

  const [mobileNo, setMobileNo] = useState("");

  const handleChangeInLoginWith = (loginType) => {
    setLoginWith(loginType);
  };

  const getFormTitle = (activeStep) => {
    switch (activeStep) {
      case 1:
        return t("login");
      case 2:
        return t("please_enter_otp");
      case 3:
        return t("user_form");
      case 4:
        return t("final_form");
      default:
        return t("login");
    }
  };

  const handleSendOtp = () => {
    const encryptedMobile = encrypt(mobileNo);
    const payload = {
      mobileNo: encryptedMobile.toString(),
      // idp: encryptedIP.toString(),
      idp: "J5KBz/X9fPEF1OSpNPm5rw==",
      language: t("mobileOtpLanguage") == "English" ? "EN" : "TN",
    };
    const successCB = () => {
      setStep(2);
    };

    dispatch(sendOtp(payload, successCB, saveconsent));
  };

  const handleSendAadhaarSms = (payload, setDisable) => {
    const successCB = () => {
      //dispatch(updateAadharDetails(response.data.data || []));
      setStep(4);
    };
    dispatch(sendAadhaarSms(payload, successCB,saveconsent, setDisable));
  };

  const renderForm = (activeStep, loginWith) => {
    switch (activeStep) {
      case 1:
        return loginWith === "Mobile" ? (
          <LoginForm
            mobileNo={mobileNo}
            setMobileNo={setMobileNo}
            handleSendOtp={handleSendOtp}
          />
          
        ) : (
          <LoginAadhar handleSendAadhaarSms={handleSendAadhaarSms} />
        );
      case 2:
        return (
          <>
            <SendOtp
              setStep={setStep}
              mobileNo={mobileNo}
              handleSendOtp={handleSendOtp}
              setLoginWith={setLoginWith}
            />
            <HelperText
              title={t("please_do_not_refresh")}
              className={Style.helper}
            />
          </>
        );
      case 3:
        return <UserInfo handleSendAadhaarSms={handleSendAadhaarSms} />;
      case 4:
        return (
          <>
            <AadharAuthentication
              handleSendAadhaarSms={handleSendAadhaarSms}
              type={loginWith}
            />
            <HelperText
              title={t("please_do_not_refresh")}
              className={Style.helper}
            />
          </>
        );
      default:
        return (
          <LoginForm
            mobileNo={mobileNo}
            setMobileNo={setMobileNo}
            handleSendOtp={handleSendOtp}
          />
        );
    }
  };

  return (
    <>
      <div className={Style.wrapper}>
        <div className="container text-center text-md-left">
          <h1
            className={[
              "fs-40 mb-1 mb-md-3 text-uppercase ",
              Style.headingWelcome,
            ].join(" ")}
          >
            {t("welcome_to_makkal_portal")}
          </h1>
          <div className="row align-items-center mb-3 mb-lg-2">
            <div className="col-lg-8 mb-lg-0 order-1 order-md-0">
              {/* <div className={["", Style.headingWrapper].join(" ")}> */}
              <CMQuote />
              {/* </div> */}
            </div>
            <div className="col-lg-4 order-0 order-md-1 py-3 py-md-0">
              <div
                className={[
                  StyleSignup.wrapper,
                  "text-center position-relative",
                ].join(" ")}
              >
                <p
                  className={[
                    "mb-3 text-uppercase font-weight-bold",
                    StyleSignup.formHeading,
                  ].join(" ")}
                >
                  {getFormTitle(step)}
                </p>
                {step === 1 && (
                  <div className={StyledRadio.radioGrp}>
                    <RadioButton
                      classes={StyledRadio.radioField}
                      label={t("login_with_mobile")}
                      name="LoginWith"
                      onChange={() => handleChangeInLoginWith("Mobile")}
                      checked={loginWith === "Mobile"}
                      title="Ration Card Registered Mobile Number"
                    />
                    <RadioButton
                      classes={StyledRadio.radioField}
                      label={t("login_with_aadhar")}
                      name="LoginWith"
                      onChange={() => handleChangeInLoginWith("Aadhaar")}
                      checked={loginWith === "Aadhaar"}
                      title="Ration Card Registered Aadhaar Number"
                    />
                  </div>
                )}
                {renderForm(step, loginWith)}
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-7">
              <HelpWrapper />
            </div>
          </div> */}
        </div>
        {/* latest Updates */}
      </div>
      <LatestUpdate />
    </>
  );
}
export default Banner;
