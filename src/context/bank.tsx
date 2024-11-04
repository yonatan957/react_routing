import { createContext } from "react";
import Bank from "../types/bank";

const BankContext = createContext<Bank|undefined>({
    treasure:10000,
    users:[
        {name:"yo",account_id:'12345'},
        {name:"yo",account_id:'54321'}
    ]
})

export default BankContext