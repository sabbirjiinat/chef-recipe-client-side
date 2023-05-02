import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const name = { names: "sabbir" };

  const handleRegisterWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    };
    


  const authInfo = {
    name,
    handleRegisterWithEmail,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
