import React from "react";

function ArrowRight({ width = "28px", height = "28px", color = "#000" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 8 10.611"
      fill={color}
    >
      <path
        id="Icon_material-keyboard-arrow-down"
        d="M1.247,6.552,5.305,2.5l4.059,4.05,1.247-1.247L5.305,0,0,5.306Z"
        transform="translate(6.552) rotate(90)"
      />
    </svg>
  );
}

export default ArrowRight;
