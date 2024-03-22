import React from "react";
import Style from "./Switch.module.css";

export default function Switch({ isChecked, handleSwitch }) {
  const handleSwitchOnchange = () => {
    handleSwitch(!isChecked);
  };

  return (
    <label className={Style.switch}>
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={handleSwitchOnchange}
        checked={isChecked}
      />
      <span className={[Style.slider, Style.round].join(" ")}></span>
    </label>
  );
}
