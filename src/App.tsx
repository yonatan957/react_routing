import { Outlet, Route, Routes } from "react-router-dom";
import AuthRouter from "./components/auth/AuthRouter";
import PagesRouter from "./components/pages/PagesRouter";
import LoginGuard from "./guards/LoginGuard";
import { useEffect, useState } from "react";
import BankContext from "./context/bank";
import Bank from "./types/bank";
import Account from "./types/account";
import AccountContext from "./context/account";


export default function App() {
  useEffect(()=>{
    return ()=>{
      localStorage.removeItem("isLogin")
    }
  },[PagesRouter])
  const [bank, setBank] = useState<Bank>(
    {
      treasure:10000,
      users:[
          {name:"yo",account_id:'12345'},
          {name:"yo",account_id:'54321'}
      ]
  })
  const [account, setAccount]= useState<Account>({
    balance:5000,
    id:'12345',
    loans:[],
    transactions:[]
})
  return (
    <div className="app">
      <BankContext.Provider value={bank}>
        <AccountContext.Provider value={account}>
          <Routes>
              <Route path="auth/*" element={<AuthRouter/>}/>
              <Route path="pages/*" element={<LoginGuard><PagesRouter/></LoginGuard>}></Route>
          </Routes>
        </AccountContext.Provider>
      </BankContext.Provider>
    </div>
  )
}