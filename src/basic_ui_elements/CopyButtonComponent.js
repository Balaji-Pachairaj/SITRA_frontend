import React from "react";
import ButtonComponent from "./ButtonComponent";
// import copy from "../Assest/Utils/copybutton.png";

const CopyButtonComponent = ({ text = "" }) => {
  return (
    <ButtonComponent
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
      className="w-[20px] h-[20px] flex flex-row justify-center items-center"
    >
      <img
        // src={copy}
        alt={"copy buttonn"}
        className=" w-full h-full object-contain"
      />
    </ButtonComponent>
  );
};

export default CopyButtonComponent;
