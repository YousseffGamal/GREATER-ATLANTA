import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[9px]" };
const variants = {
  outline: {
    light_blue_800:
      "border border-light_blue-800 border-solid text-light_blue-800",
    blue_gray_400: "border border-blue_gray-400 border-solid",
  },
  fill: { light_blue_800: "bg-light_blue-800 text-gray-50" },
};
const sizes = { xs: "p-2", sm: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["light_blue_800", "blue_gray_400"]),
};

export { Button };
