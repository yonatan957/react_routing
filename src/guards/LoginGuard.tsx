import React from "react";
import { Navigate } from "react-router-dom";

interface props{
    children:React.ReactNode
}

export default function LoginGuard({children}:props) {
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin){return <Navigate to= "/auth/login" />}
    return (
        children
  )
}
