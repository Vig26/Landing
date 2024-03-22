import React from "react";

function ArrowDown({ color = "#000000" }) {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9 6"
      width="9"
      height="6"
    >
      <path
        id="down-arrow-icon"
        fill={color}
        d="m0.9 0.7l3.2 3.2 3.2-3.2 1 1-4.2 4.2-4.2-4.2z"
      />
    </svg>
  );
}

export default ArrowDown;
