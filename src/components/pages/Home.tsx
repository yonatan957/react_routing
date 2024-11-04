import { useContext } from "react"
import AccountContext from "../../context/account"
import BankContext from "../../context/bank"
import Account from "../../types/account"
import Bank from "../../types/bank"

export default function Home() {
  const account:Account = useContext(AccountContext)
  const bank:Bank = useContext(BankContext)
  const caldPrec = (b:number, t:number)=>{
    return ((b/t) * 100).toFixed(1)
  }
  return (
    <div>
      <h1>Balance: {account.balance}$</h1>
      <h3>You own {caldPrec(account.balance, bank.treasure)}% of the banks treasure!!</h3>
    </div>
  )
}