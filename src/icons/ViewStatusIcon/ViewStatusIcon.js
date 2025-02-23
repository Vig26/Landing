import React from "react";

export default function ViewStatusIcon({
  color = "#0085f5",
  width = "36px",
  height = "27px",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 27"
    >
      <g
        id="Icon_feather-eye"
        data-name="Icon feather-eye"
        transform="translate(0 -4.5)"
      >
        <path
          id="Path_5488"
          data-name="Path 5488"
          d="M1.5,18S7.5,6,18,6,34.5,18,34.5,18,28.5,30,18,30,1.5,18,1.5,18Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          id="Path_5489"
          data-name="Path 5489"
          d="M22.5,18A4.5,4.5,0,1,1,18,13.5,4.5,4.5,0,0,1,22.5,18Z"
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
