import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-[30px] md:text-[32px] text-[34px]",
  h2: "font-normal sm:text-[28px] md:text-[30px] text-[32px]",
  h3: "sm:text-[20px] md:text-[22px] text-[24px]",
  h4: "font-normal text-[20px]",
  h5: "text-[18px]",
  h6: "font-normal text-[16px]",
  body1: "text-[14px]",
  body2: "font-normal text-[12px]",
  body3: "font-normal text-[10px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
