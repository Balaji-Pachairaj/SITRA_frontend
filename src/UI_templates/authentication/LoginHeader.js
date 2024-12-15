import React from "react";

const LoginHeader = ({ children }) => {
     return (
          <h1 className=" bg-clip-text text-transparent bg-mainLinearGradient font-poppins font-[600] sm:text-[20px] text-[18px]  ">
               {children}
          </h1>
     );
};

export default LoginHeader;
