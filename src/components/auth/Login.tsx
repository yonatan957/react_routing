import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const hadleLogIn = ()=>{
    if(
      username && 
      password &&
      localStorage.getItem("username") === username &&
      localStorage.getItem("password") === password

    ){
      navigate("/pages")
      localStorage.setItem("isLogin", "tureOrBannana")
    }
    else{
      window.alert("user name or password wrong")
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <div className="form">
      <input type="text" value={username} onChange={e=> setUsername(e.target.value)} placeholder="username"/>
      <input type="password" value={password} onChange={e=> setpassword(e.target.value)} placeholder="password"/>
      <button onClick={hadleLogIn}>Submit</button>
      </div>
      <p>Don't have an account yet? <Link to={'/auth/register'}>register here</Link></p>
    </div>
  )
}