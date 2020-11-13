import React from "react";
import { SiSpinrilla } from "react-icons/si";

function Spinner({ size = 30, color = "black" }) {
  return (
    <div className="spinner-wrapper">
      <SiSpinrilla color={color} size={size} className="spinner" />
    </div>
  );
}

export default Spinner;
