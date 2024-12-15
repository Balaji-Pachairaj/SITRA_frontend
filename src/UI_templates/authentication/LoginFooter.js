import React from "react";
import { Link } from "react-router-dom";

const LoginFooter = ({ isUser, route = "/" }) => {
  const message = {
    message: isUser ? "Haven’t yet an account?" : "Already have an account?",
    linkMessage: isUser ? "Sign Up" : "Log in",
    route: isUser ? "/signup" : "/signin",
  };

  return (
    <div className=" w-fit h-fit flex flex-col gap-[0.5rem] ">
      <div className=" flex flex-row items-center  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="151"
          height="2"
          viewBox="0 0 151 2"
          fill="none"
        >
          <path d="M0 1H151" stroke="#97B7D6" stroke-dasharray="2 2" />
        </svg>{" "}
        <p className=" bg-[#E9ECF3] text-[#76849F] w-10 text-center rounded-lg">
          or
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="151"
          height="2"
          viewBox="0 0 151 2"
          fill="none"
        >
          <path d="M0 1H151" stroke="#97B7D6" stroke-dasharray="2 2" />
        </svg>
      </div>
      <div className="text-center w-full  flex flex-row justify-center ">
        <p className="  font-poppins font-[400] sm:text-[14px] text-[12px] text-[#76849F] ">
          {message.message}{" "}
          <Link
            to={route}
            className=" bg-clip-text text-transparent bg-mainLinearGradient"
          >
            {message.linkMessage}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginFooter;
