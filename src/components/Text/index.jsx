import React from "react";

const sizeClasses = {
  txtGilroyBold38: "font-gilroybold font-normal",
  txtGilroyRegular115: "font-gilroyregular font-normal",
  txtGilroyBold5533: "font-gilroybold font-normal",
  txtGilroyRegular201: "font-gilroyregular font-normal",
  txtGilroyBold2079: "font-gilroybold font-normal",
  txtGilroyBold45: "font-gilroybold font-normal",
  txtGilroyBold2162: "font-gilroybold font-normal",
  txtGilroyBold41: "font-gilroybold font-normal",
  txtGilroyLight17: "font-gilroylight font-normal",
  txtMontserratRomanMedium2249: "font-medium font-montserrat",
  txtGilroyRegular1415: "font-gilroyregular font-normal",
  txtGilroyMedium24: "font-gilroymedium font-normal",
  txtGilroyRegular1238: "font-gilroyregular font-normal",
  txtGilroyLight16: "font-gilroylight font-normal",
  txtGilroyBold40: "font-gilroybold font-normal",
  txtGilroyRegular1211: "font-gilroyregular font-normal",
  txtGilroyRegular17: "font-gilroyregular font-normal",
  txtGilroyLight1414: "font-gilroylight font-normal",
  txtGilroySemiBold2211: "font-gilroysemibold font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
