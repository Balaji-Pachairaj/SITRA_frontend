import React from "react";

import Spinner from "./Spinner";
const ButtonComponent = ({
     className = "",
     children,
     onClick = () => {},
     isLoading = false,
}) => {
     return (
          <button onClick={onClick} className={className}>
               {!isLoading ? children : <Spinner />}
          </button>
     );
};

export default ButtonComponent;
     