'use client'

import { auth } from "../firebase/firebase.config";
import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error("useAuth must be used with an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    const registrado = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
      } else {
        setUser(currentUser);
      }
    });
    return () => registrado();
  }, []);

  // inicio de sesion con google
  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    const xd = await signInWithPopup(auth, responseGoogle);
    return xd;
  };
  
  const logout = async () => {
    const response = await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        loginWithGoogle,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
