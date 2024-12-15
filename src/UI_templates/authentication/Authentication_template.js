import React from "react";

const Authentication_template = ({ children }) => {
  return (
    <div className=" w-full h-screen  flex flex-row ">
      <div className=" w-[50%] h-full bg-mainLinearGradient p-10   flex-col justify-center relative md:flex hidden">
        <div className=" w-full h-fit flex flex-col  gap-[4rem] ">
          <div className=" w-[155px] h-[49px] mb-5">
            <img
              //   src={logo}
              alt="Dharan company logo"
              className=" w-full h-full object-contain"
            />
          </div>

          <div className=" w-full h-fit ">
            <h1 className=" font-poppins text-[36px] font-[700] text-[#Fff] leading-[42px]">
              SITRA <br></br> South Indian Textile Research Association
            </h1>
          </div>
          <div className=" w-full h-fit ">
            <h2 className=" font-poppins text-[24px] font-[700] text-[#F5F5F5] leading-[42px]">
              EMPOWER YOUR MANAGEMENT
            </h2>
          </div>

          <div className=" absolute  bottom-0 ">
            <h3 className=" font-poppins text-[12px] font-[400] text-[#Ffff] leading-[42px]"></h3>
          </div>
        </div>
      </div>
      <div className=" w-[0.0001px] h-full md:hidden"></div>
      <div className=" flex-1">{children}</div>
    </div>
  );
};

export default Authentication_template;
