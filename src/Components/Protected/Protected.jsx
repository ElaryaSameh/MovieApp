import React, { useContext } from "react";
import { Navigate } from "react-router-dom";  
import { authContext } from "../../context/auth";

function Protected({ children }) { 
  const { isAuth } = useContext(authContext);

  return isAuth ? children : <Navigate to="/Login" />;
}

export default Protected;
