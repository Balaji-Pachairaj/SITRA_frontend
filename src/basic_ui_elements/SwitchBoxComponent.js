import React from "react";
import ButtonComponent from "./ButtonComponent";

const SwitchBoxComponent = ({ value = false, onClick = () => {} }) => {
  return (
    <ButtonComponent
      className=" w-fit h-fit cursor-pointer "
      onClick={onClick}
      isLoading={false}
    >
      {value ? (
        <svg
          width="40"
          height="21"
          viewBox="0 0 40 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.5"
            width="40"
            height="20"
            rx="10"
            fill="#00BD94"
            fill-opacity="0.4"
          />
          <rect
            x="22"
            y="2.5"
            width="16"
            height="16"
            rx="8"
            fill="url(#paint0_linear_4605_411)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4605_411"
              x1="30"
              y1="2.5"
              x2="30"
              y2="18.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00BD94" />
              <stop offset="1" stop-color="#019BA2" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width="40"
          height="21"
          viewBox="0 0 40 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="4.5"
            width="40"
            height="12"
            rx="6"
            fill="#5570F1"
            fill-opacity="0.12"
          />
          <rect y="0.5" width="20" height="20" rx="10" fill="#BBC5CB" />
        </svg>
      )}
    </ButtonComponent>
  );
};

export default SwitchBoxComponent;
