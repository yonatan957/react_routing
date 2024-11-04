import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Credit from "./Credit";
import Transfers from "./Transfers";

export default function PagesRouter() {
  return (
    <div className="main">
        <div className="left">
            <NavBar/>
        </div>
        <div className="right">
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="credit" element={<Credit/>}/>
                <Route path="transfer" element={<Transfers/>}/>
            </Routes>
        </div>
    </div>
  )
}