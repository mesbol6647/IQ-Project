//AuthContext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const login = (info) => {
    setUser(info);
    navigate("/dashboard");
  };

  // const logout = () => {
  //   setUser(null)
  //   // setUser({})
  // }

  // useEffect(()=>{
  //   sessionStorage.setItem("user",JSON.stringify(user))
  // },[user])//!componentDidUpdate



  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
