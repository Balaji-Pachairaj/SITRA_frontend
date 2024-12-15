import React from "react";
import ButtonComponent from "./ButtonComponent";

const CheckBoxComponent = ({ value = false, onClick = () => {} }) => {
  return (
    <ButtonComponent
      className=" w-fit h-fit cursor-pointer "
      onClick={onClick}
      isLoading={false}
    >
      {value ? (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="0.5"
            width="23"
            height="23"
            rx="7.5"
            stroke="#6D7DCD"
          />
          <rect x="2.5" y="2" width="20" height="20" rx="6" fill="#019BA2" />
          <path
            d="M16.5 9L11 14.5L8.5 12"
            stroke="#B0CAD9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="0.5"
            width="23"
            height="23"
            rx="7.5"
            stroke="#CFD3D5"
          />
        </svg>
      )}
    </ButtonComponent>
  );
};

export default CheckBoxComponent;
