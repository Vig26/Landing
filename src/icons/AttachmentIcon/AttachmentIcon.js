import React from "react";

function AttachmentIcon({ color = "#0085f5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33.015"
      height="32.985"
      viewBox="0 0 33.015 32.985"
    >
      <g id="Icon_feather-link" transform="translate(-1.493 -1.508)">
        <path
          id="Path_5439"
          d="M15,19.5a7.5,7.5,0,0,0,11.31.81l4.5-4.5A7.5,7.5,0,1,0,20.2,5.2L17.625,7.77"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          id="Path_5440"
          d="M21,16.5a7.5,7.5,0,0,0-11.31-.81l-4.5,4.5A7.5,7.5,0,1,0,15.8,30.8L18.36,28.23"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
}

export default AttachmentIcon;
