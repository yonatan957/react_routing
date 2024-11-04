import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const hadleRegister =()=>{
    if(!(username && password)) return
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    navigate("/auth/login");
  }
  return (
    <div>
    <h1>Register</h1>
    <div className="form">
      <input type="text" value={username} onChange={e=> setUsername(e.target.value)} placeholder="username"/>
      <input type="password" value={password} onChange={e=> setpassword(e.target.value)} placeholder="password"/>
      <button disabled={!(username && password)} onClick={hadleRegister}>Submit</button>
    </div>
    <p>Already have an account ? <Link to={'/auth/login'}>Log in</Link></p>
  </div>
  )
}