import React from "react";

function ResetIcon({ color = "#000" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
    >
      <g id="Group_214" dataName="Group 214" transform="translate(-343 -286)">
        <g
          id="Rectangle_493"
          dataName="Rectangle 493"
          transform="translate(343 286)"
          fill="#fff"
          stroke="#707070"
          strokeWidth="1"
          opacity="0"
        >
          <rect width="26" height="26" stroke="none" />
          <rect x="0.5" y="0.5" width="25" height="25" fill="none" />
        </g>
        <path
          id="Icon_material-replay"
          dataName="Icon material-replay"
          d="M13.767,5.383V1.5L8.912,6.354l4.854,4.854V7.325A5.825,5.825,0,1,1,7.942,13.15H6a7.767,7.767,0,1,0,7.767-7.767Z"
          transform="translate(342.233 287.292)"
          fill={color}
        />
      </g>
    </svg>
  );
}

export default ResetIcon;
// DE5656
