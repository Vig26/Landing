import React from "react";

function CloseIcon({ color = "#000000", width = "40px", height = "40px" }) {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39 39"
      width={width}
      height={height}
    >
      <path
        id="Icon material-menu"
        fill={color}
        d="m38.3 35l-3.8 3.8-34.3-34.4 3.8-3.8zm-34.3 3.8l-3.8-3.8 34.3-34.3 3.8 3.8z"
      />
    </svg>
  );
}

export default CloseIcon;
