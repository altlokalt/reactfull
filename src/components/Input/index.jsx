import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  srcOutlineGray300: "bg-white_A700 border-[1px] border-gray_300 border-solid",
  srcOutlineGray300_1: "border-[1px] border-gray_300 border-solid",
  srcFillGray50: "bg-gray_50",
  OutlineGray400: "border-[1px] border-gray_400 border-solid",
  OutlineGray400_1: "border-[1px] border-gray_400 border-solid",
  FillGray50: "bg-gray_50",
};
const shapes = {
  srcRoundedBorder15: "rounded-[15px]",
  srcRoundedBorder8: "rounded-[8px]",
  RoundedBorder8: "rounded-[8px]",
  RoundedBorder15: "rounded-[15px]",
};
const sizes = {
  smSrc: "pr-[9px] py-[10px]",
  mdSrc: "pr-[16px] py-[16px]",
  sm: "pb-[13px] pt-[16px]",
  md: "pr-[16px] py-[17px]",
  lg: "px-[16px] py-[17px]",
  xl: "py-[17px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcRoundedBorder15",
    "srcRoundedBorder8",
    "RoundedBorder8",
    "RoundedBorder15",
  ]),
  variant: PropTypes.oneOf([
    "srcOutlineGray300",
    "srcOutlineGray300_1",
    "srcFillGray50",
    "OutlineGray400",
    "OutlineGray400_1",
    "FillGray50",
  ]),
  size: PropTypes.oneOf(["smSrc", "mdSrc", "sm", "md", "lg", "xl"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "srcRoundedBorder15",
  variant: "srcOutlineGray300",
  size: "",
};

export { Input };
