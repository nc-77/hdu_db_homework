import React from "react";
import "./Button.css";

const STYLES = ["btn-primary", "btn-outline", "btn-blue"];

const SIZES = ["btn-medium", "btn-large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

// 由于之前没有将Button export，导致 报错
/* Error: Element type is invalid: expected a string (for built-in
components) or a class/function (for composite components) but
got: undefined. You likely forgot to export your component from 
the file it's defined in, or you might have mixed up default and 
named imports. */

export default Button;
