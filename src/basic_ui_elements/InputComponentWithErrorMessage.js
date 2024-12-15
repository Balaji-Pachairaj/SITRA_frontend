import React from "react";

const InputComponentWithErrorMessage = ({
  type = "text",
  name = "emaill",
  placeholder = "",
  value = "",
  onChange = () => {},
  onBlur = () => {},
  className = "w-[368px] h-12 ps-3  border border-[#D8E1F2] rounded text-sm font-semibold placeholder:font-poppins placeholder:text-xs placeholder:text-[#929BAC] ",
  isValid = true,
  isTouched = false,
  errorMessage = "",
}) => {
  let isError = isTouched && !isValid;

  return (
    <div>
      <input
        type={type}
        name={name}
        // required
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={` ${className}  ${
          isError ? " bg-[#AB1917] bg-opacity-25 text-black" : ""
        }`}
      />
      {isError && (
        <p className=" text-[10px] text-[#AB1917] font-[500] font-poppins ps-2">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputComponentWithErrorMessage;
