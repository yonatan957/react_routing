import { Outlet, Route, Routes } from "react-router-dom";
import AuthRouter from "./components/auth/AuthRouter";
import PagesRouter from "./components/pages/PagesRouter";
import LoginGuard from "./guards/LoginGuard";
import { useEffect } from "react";


export default function App() {
  useEffect(()=>{
    return ()=>{
      localStorage.removeItem("isLogin")
    }
  },[PagesRouter])
  return (
    <div className="app">
      <Routes>
          <Route path="auth/*" element={<AuthRouter/>}/>
          <Route path="pages/*" element={<LoginGuard><PagesRouter/></LoginGuard>}></Route>
      </Routes>
      <Outlet/>
    </div>
  )
}