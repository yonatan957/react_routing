import User from "./user"

export default interface Transaction{
    amount:number
    from:User
    to:User
}