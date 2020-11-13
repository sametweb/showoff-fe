import React from "react";
import { BiError, BiErrorAlt, BiErrorCircle } from "react-icons/bi";

function Error({ type = "default", message = "Error", iconSize = 50 }) {
  const RenderIcon = () => {
    switch (type) {
      case "warning":
        return <BiError size={iconSize} />;
      case "error":
        return <BiErrorAlt size={iconSize} />;
      default:
        return <BiErrorCircle size={iconSize} />;
    }
  };

  return (
    <div className={`error-wrapper ${type}`}>
      <RenderIcon />
      <p>{message}</p>
    </div>
  );
}

export default Error;
