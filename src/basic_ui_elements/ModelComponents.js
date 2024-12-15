import React from "react";
import { useNavigate } from "react-router-dom";

const ModelComponents = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        //    navigate(-1);
      }}
      className=" w-[100vw] h-[100vh] fixed bg-black bg-opacity-50  top-0 left-0 flex flex-row justify-center md:items-center md:pt-0 pt-[2rem] z-[5000]"
    >
      <div className="w-fit h-fit" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModelComponents;
