import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Timer from "otp-timer";
import { Form } from "react-bootstrap";
import RadioButton from "../../../../../../components/RadioButton";
import axios from "../../../../../../utils/axios";
import Style from "./SignInForm.module.css";
import { useDispatch } from "react-redux";
import { loginusingmobile } from "../../../../../../redux/actions/productActions";
import HelperText from "../../../../../../components/HelperText";
import fetcher from "../../../../../../utils";
import { decrypt, encrypt } from "../../../../../../utils/common";
import Toast from "../../../../../../components/Toast/Toast";
import LoginAadhar from "../LoginAadhar";
import { showMessage } from "../../../../../../redux/actions/showMessage";

function SignInForm({ setUserData, setUserInfo }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [loginWith, setLoginWith] = useState("Mobile");
  const [showOtpScreen, setOtpScreen] = useState(false);

  const [mobileNo, setMobileNo] = useState("");

  const [ipAdd, setIpAdd] = useState("");
  const [enterOtp, setEnterOtp] = useState(false);
  const [sendSmsData, setSmsData] = useState("");
  const [newOtp, setNewOtp] = useState("");
  const [dataWithAadhar, setDataWithAadhar] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const response = await axios.get("https://geolocation-db.com/json/");
  //     if (response) {
  //       setIpAdd(response.data.IPv4);
  //     }
  //   })();
  // }, []);

  const encryptedMobile = encrypt(mobileNo);
  var encryptedIP = encrypt(ipAdd);
  const decrypted = decrypt(sendSmsData.mod ? sendSmsData.mod : "");
  const matchingOtp = decrypted.slice(0, -11);

  const handleChangeInLoginWith = (loginType) => {
    setLoginWith(loginType);
  };

  const handleOnchange = (event) => {
    const { value } = event.target;
    const regex = /^[6-9][0-9]{0,9}$/;

    if (value.length === 10) {
      setOtpScreen(true);
    } else if (showOtpScreen) {
      setOtpScreen(false);
    }
    if (value === "" || regex.test(value)) {
      setMobileNo(value);
    }
  };

  const handleChangeOtp = (event) => {
    setNewOtp(event.target.value);
  };

  const handleSendOtp = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const payload = {
      mobileNo: encryptedMobile.toString(),
      // idp: encryptedIP.toString(),
      idp: "J5KBz/X9fPEF1OSpNPm5rw==",
      language: t("mobileOtpLanguage") == "English" ? "EN" : "TN",
    };

    fetcher({ method: "POST", request: `sendSms`, payload, isToken: false })
      .then((response) => {
        setSmsData(response.data.data);
        setEnterOtp(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async () => {
    if (!encryptedMobile) {
      alert("Enter mobile number please");
      return;
    }
    if (matchingOtp !== newOtp) {
      alert("invalid OTP");
      return;
    }
    const payload = {
      mobileNumber: encryptedMobile.toString(),
    };

    fetcher({
      method: "POST",
      request: `getAdharDataByMobOrAdhar`,
      payload,
      isToken: false,
    })
      .then((response) => {
        if (response.data.data.length > 0) {
          setUserInfo(response.data.data);
          // localStorage.setItem("user", JSON.stringify(response.data.data));
          localStorage.setItem(
            "MakkalId",
            encrypt(response.data.data[0].makkalId).toString()
          );
          dispatch(loginusingmobile(response.data.data));
          setUserData("userInfo");
        } else {
          setDataWithAadhar(true);
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(showMessage({ title: error.message, variant: "error" }));
      });
  };

  return (
    <Form className={Style.form} onSubmit={(event) => event.preventDefault()}>
      {!dataWithAadhar ? (
        <>
          {/* Step-1 */}
          <div className={Style.radioGrp}>
            <RadioButton
              classes={Style.radioField}
              label="Login With Mobile Number"
              name="LoginWith"
              onChange={() => handleChangeInLoginWith("Mobile")}
              checked={loginWith === "Mobile"}
            />
            <RadioButton
              classes={Style.radioField}
              label="Login With Aadhaar Number"
              name="LoginWith"
              onChange={() => handleChangeInLoginWith("Aadhaar")}
              checked={loginWith === "Aadhaar"}
            />
          </div>
          {loginWith === "Mobile" ? (
            <Form.Control
              placeholder={`Enter Mobile Number`}
              className={Style.filledInput}
              name={loginWith}
              maxLength="10"
              pattern="\d*"
              value={mobileNo}
              onChange={handleOnchange}
              disabled={enterOtp}
            />
          ) : (
            <LoginAadhar />
          )}
          {/* Step-2 */}
          {enterOtp && (
            <>
              <Form.Control
                placeholder="Enter OTP"
                className={Style.filledInput}
                maxLength="5"
                pattern="\d*"
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
            </>
          )}
          {loginWith === "Mobile" && (
            <>
              {showOtpScreen && !enterOtp ? (
                <button
                  className={[Style.submitButton, "w-100"].join(" ")}
                  onClick={handleSendOtp}
                >
                  Send OTP
                </button>
              ) : (
                <button
                  className={[Style.submitButton, "w-100", "fs-30"].join(" ")}
                  disabled={newOtp.length !== 5 && !showOtpScreen}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              )}
            </>
          )}
        </>
      ) : (
        <LoginAadhar />
      )}
      {dataWithAadhar && (
        <Toast
          title="We cannot find your details using mobile number"
          variant="warning"
          description="Please try login with Aadhaar"
        />
      )}
    </Form>
  );
}

export default SignInForm;
