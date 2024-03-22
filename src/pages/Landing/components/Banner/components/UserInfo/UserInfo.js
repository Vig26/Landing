import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import MultiSelect from "../../../../../../components/MultiSelect/MultiSelect";
import Style from "../SignInForm/SignInForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { decrypt, encrypt } from "../../../../../../utils/common";
import { showMessage } from "../../../../../../redux/actions/showMessage";
import ButtonLoader from "../../../../../../components/ButtonLoader";
import { updateUserDetails } from "../../../../../../redux/actions/loginActions";

export default function UserInfo({ handleSendAadhaarSms }) {
  const dispatch = useDispatch();

  const { aadhaarUsers } = useSelector((state) => state.loginReducer);

  console.log("Aaadhar Users : ",aadhaarUsers[0].aadharNo);

  const [newAadharNo, setAadharNo] = useState("");

  const loading = useSelector((state) => state.loginReducer.loading);
  const [userAadharNo, setUserAadharNo] = useState("");
  const [userMobileNumber, setMobileNumber] = useState("");
  const [userDob, setUserDob] = useState("");

  useEffect(() => {
    setUserAadharNo(aadhaarUsers[0].aadharNo);
    setMobileNumber(aadhaarUsers[0].mobileNumberMask);
    setUserDob(aadhaarUsers[0].dob);
    dispatch(updateUserDetails(aadhaarUsers[0] || null));
  }, [aadhaarUsers]);

  console.log("User Aadhar Number :",userAadharNo);

  const decryptedAadhar = decrypt(userAadharNo);
  const encryptedAadhar = encrypt(newAadharNo ? newAadharNo : "");

  const aadharNumber = decryptedAadhar.slice(0, -4);
  const maskAadharNo = aadharNumber.replace(/\d(?=\d{4})/g, "X");

  const nameOption = (aadhaarUsers || []).map((name) => ({
    value: name.userName,
    label: name.userName,
    aadharNo: name.aadharNo,
    mobileNo: name.mobileNumberMask,
    dob: name.dob,
    makkalId: name.makkalId,
  }));

  const selectNameDefault = aadhaarUsers.length
    ? {
        value: aadhaarUsers[0].userName,
        label: aadhaarUsers[0].userName,
      }
    : null;

  const handleChangeAadhar = (event) => {
    const { value } = event.target;
    if (value.length < 13) {
      setAadharNo(value.replace(/[^0-9]/g, ""));
    }
  };
  const handleChangeAadhaarNumber = (value) => {
    console.log("Value : ",value);
    console.log("value", value, aadhaarUsers);
    const updatedUser = aadhaarUsers.find(
      (user) => user.makkalId === value.makkalId
    );
    dispatch(updateUserDetails(updatedUser || null));
    setUserAadharNo(value.aadharNo);
    setMobileNumber(value.mobileNo);
    setUserDob(value.dob);
  };

  const sendAadharSms = (event) => {
    event.preventDefault();
    if (aadharNumber !== newAadharNo) {
      dispatch(
        showMessage({
          title: "Please Enter Valid Aadhaar Number",
          variant: "warning",
        })
      );
      return;
    }

    const payload = {
      aadharNo: encryptedAadhar.toString(),
    };
    handleSendAadhaarSms(payload);
  };

  return (
    <Form className={Style.form} onSubmit={sendAadharSms}>
      <Form.Control
        placeholder={`Mobile Number`}
        className={Style.filledInput}
        value={userMobileNumber}
        disabled
      />
      <MultiSelect
        isMulti={false}
        defaultValue={selectNameDefault}
        options={nameOption}
        onChange={handleChangeAadhaarNumber}
        placeholder="Name"
        className="mb-4"
        isDisabled={aadhaarUsers.length === 1 ? true : false}
      />
      <Form.Control
        placeholder={`Aadhaar Number`}
        className={Style.filledInput}
        value={maskAadharNo}
        disabled
      />
      <Form.Control
        placeholder={`Enter Aadhaar Number`}
        className={Style.filledInput}
        name="userAadhar"
        value={newAadharNo}
        maxLength="12"
        type="text"
        onChange={handleChangeAadhar}
      />
      <Form.Control
        placeholder={`Date Of Birth`}
        className={Style.filledInput}
        value={userDob}
        disabled
      />
      <button
        className={[Style.submitButton, "w-100"].join(" ")}
        onClick={sendAadharSms}
        type="submit"
        disabled={loading}
      >
        {loading ? <ButtonLoader /> : "Submit"}
      </button>
      {/* </>
                : <AadharAuthentication aadharAuthData={aadharAuthData} handleSendAadharSms={handleSendAadharSms} />
            }
             {isError &&
                <Toast title="Aadhaar number does not match" variant="warning" position="topRight" />
            }  */}
    </Form>
  );
}
