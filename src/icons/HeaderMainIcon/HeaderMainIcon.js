import React from "react";

export default function HeaderMainIcon({ color = "#000000" }) {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 172 188"
      width="95"
      height="95"
    >
      <defs>
        <image
          width="172"
          height="188"
          id="img1"
          href="data:image/png;base64,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"
        />
      </defs>
      <use id="Background" href="#img1" x="0" y="0" />
    </svg>
  );
}
