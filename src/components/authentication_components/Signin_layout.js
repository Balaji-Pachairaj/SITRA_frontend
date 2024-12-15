import React, { useState } from "react";
import Authentication_template from "../../UI_templates/authentication/Authentication_template";
import InputComponentWithErrorMessage from "../../basic_ui_elements/InputComponentWithErrorMessage";
import ButtonComponent from "../../basic_ui_elements/ButtonComponent";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isUsernameValid, passwordValid } from "../../config/ValidationConfig";
import LoginHeader from "../../UI_templates/authentication/LoginHeader";
import LoginFooter from "../../UI_templates/authentication/LoginFooter";

const Signin_layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState({
    value: "",
    isValid: false,
    isTouched: false,
    errorMessage: "Please enter a valid email",
  });

  const [password, setPassword] = useState({
    value: "",
    isValid: false,
    isTouched: false,
    errorMessage: "password should be atleast 6 characters",
  });

  const [isLoading, setIsLoading] = useState(false);

  const signInButtonClickHandler = async () => {
    setEmail((state) => {
      return { ...state, isTouched: true };
    });
    setPassword((state) => {
      return { ...state, isTouched: true };
    });

    if (!email?.isValid || !password?.isValid) {
      return;
    }

    setIsLoading(true);

    setIsLoading(false);
  };

  return (
    <Authentication_template>
      <div className=" w-full h-full flex flex-col justify-center items-center ">
        <div className=" sm:w-fit w-full sm:ps-0 ps-3 h-fit flex flex-col gap-[2rem]">
          <div className=" md:hidden w-[155px] h-[49px] mb-5">
            {/* <img
              src={logo}
              alt="Dharan company logo"
              className=" w-full h-full object-contain"
            /> */}
          </div>
          <LoginHeader>Login IN</LoginHeader>
          <div className=" sm:w-fit w-full h-fit flex flex-col gap-[1.2rem] ">
            <InputComponentWithErrorMessage
              type="text"
              name="email"
              placeholder="Username"
              className="w-[80%] sm:w-[368px] h-[48px] ps-5  border border-[#D8E1F2] rounded text-sm font-semibold placeholder:font-poppins placeholder:text-xs placeholder:font-[400] placeholder:text-[#929BAC] "
              errorMessage={email.errorMessage}
              value={email.value}
              onChange={(e) => {
                setEmail((state) => {
                  return {
                    ...state,
                    value: e.target.value,
                    isValid: isUsernameValid(e.target.value),
                  };
                });
              }}
              onBlur={() => {
                setEmail((state) => {
                  return { ...state, isTouched: true };
                });
              }}
              isValid={email.isValid}
              isTouched={email.isTouched}
            />
            <InputComponentWithErrorMessage
              type="password"
              name="email"
              placeholder="Password"
              className="w-[80%] sm:w-[368px] h-[48px] ps-5  border border-[#D8E1F2] rounded text-sm font-semibold placeholder:font-poppins placeholder:text-xs placeholder:font-[400] placeholder:text-[#929BAC] "
              errorMessage={password.errorMessage}
              value={password.value}
              onChange={(e) => {
                setPassword((state) => {
                  return {
                    ...state,
                    value: e.target.value,
                    isValid: passwordValid(e.target.value),
                  };
                });
              }}
              onBlur={() => {
                setPassword((state) => {
                  return { ...state, isTouched: true };
                });
              }}
              isValid={password.isValid}
              isTouched={password.isTouched}
            />
          </div>
          <div className="w-full h-fit  flex flex-row justify-between  items-center ">
            <ButtonComponent
              isLoading={isLoading}
              onClick={signInButtonClickHandler}
              className=" sm:w-[179px] w-[125px]  sm:h-[49px] h-[40px] bg-mainLinearGradient rounded-[6px] font-poppins font-[700] sm:text-[14px] text-[12px] text-[#fff]"
            >
              Sign in
            </ButtonComponent>
            <div></div>
            {/* 
              <h5 className=" font-poppins font-[500] sm:text-[14px] text-[10px] text-[#019BA2] cursor-pointer">
                Forgot Password?
              </h5> */}
          </div>
          <LoginFooter isUser={true} route="/users/signup" />
        </div>
      </div>
    </Authentication_template>
  );
};

export default Signin_layout;
