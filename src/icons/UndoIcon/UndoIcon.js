import React from "react";

function UndoIcon({ color = "#000" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill={color}>
      <path d="M8 19q-.425 0-.713-.288Q7 18.425 7 18t.287-.712Q7.575 17 8 17h6.1q1.575 0 2.737-1Q18 15 18 13.5T16.837 11q-1.162-1-2.737-1H7.8l1.9 1.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L4.7 9.7q-.15-.15-.213-.325Q4.425 9.2 4.425 9t.062-.375Q4.55 8.45 4.7 8.3l3.6-3.6q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L7.8 8h6.3q2.425 0 4.163 1.575Q20 11.15 20 13.5q0 2.35-1.737 3.925Q16.525 19 14.1 19Z" />
    </svg>
  );
}

export default UndoIcon;
