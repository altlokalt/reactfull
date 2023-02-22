import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder15: "rounded-[15px]",
  icbCircleBorder25: "rounded-[25px]",
  icbRoundedBorder8: "rounded-[8px]",
  icbCircleBorder21: "rounded-[21px]",
  RoundedBorder14: "rounded-[14px]",
  RoundedBorder10: "rounded-[10px]",
  CircleBorder18: "rounded-[18px]",
};
const variants = {
  icbOutline: "bg-gray_900_26",
  icbOutlineGray5003f: "bg-white_A700 shadow-bs",
  icbOutlineGray100: "outline outline-[0.5px] outline-gray_100",
  icbFillGray50: "bg-gray_50",
  icbFillGray90067: "bg-gray_900_67",
  Outline: "bg-gray_900_26 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_901",
  OutlineGray100: "outline outline-[0.5px] outline-gray_100 text-black_900",
  FillGray901: "bg-gray_901 text-white_A700",
  OutlineGray901: "outline outline-[0.5px] outline-gray_901 text-gray_901",
  OutlineWhiteA700:
    "outline outline-[0.5px] outline-white_A700 text-white_A700",
  Outline_1: "bg-gray_901 text-white_A700",
  FillGray100: "bg-gray_100 text-gray_500",
  FillGreen600: "bg-green_600 text-white_A700",
  FillGray50: "bg-gray_50 text-black_900",
  FillBlack900: "bg-black_900 text-white_A700",
};
const sizes = {
  smIcn: "p-[6px]",
  mdIcn: "p-[10px]",
  lgIcn: "p-[13px]",
  sm: "p-[6px]",
  md: "pr-[9px] py-[9px]",
  lg: "p-[11px]",
  xl: "pr-[16px] py-[16px]",
  "2xl": "p-[16px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
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
  shape: PropTypes.oneOf([
    "icbCircleBorder15",
    "icbCircleBorder25",
    "icbRoundedBorder8",
    "icbCircleBorder21",
    "RoundedBorder14",
    "RoundedBorder10",
    "CircleBorder18",
  ]),
  variant: PropTypes.oneOf([
    "icbOutline",
    "icbOutlineGray5003f",
    "icbOutlineGray100",
    "icbFillGray50",
    "icbFillGray90067",
    "Outline",
    "FillWhiteA700",
    "OutlineGray100",
    "FillGray901",
    "OutlineGray901",
    "OutlineWhiteA700",
    "Outline_1",
    "FillGray100",
    "FillGreen600",
    "FillGray50",
    "FillBlack900",
  ]),
  size: PropTypes.oneOf([
    "smIcn",
    "mdIcn",
    "lgIcn",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
  ]),
};

Button.defaultProps = {
  className: "",
  shape: "RoundedBorder10",
  variant: "icbOutline",
  size: "sm",
};
export { Button };
