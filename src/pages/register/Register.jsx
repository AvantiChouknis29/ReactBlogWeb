import "./register.css"
import { BrowserRouter, Routes, Route, Router, NavLink } from 'react-router-dom';
export default function Register(){
  return (
    <div className="register">
        <span className="registerTitle">REGISTER</span>
<br></br>
     <form className="registerForm" >
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter your username..." />
        <label>Email</label>
        <input type="email" className="registerInput" placeholder="Enter your email..."/>
       
       <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter your Password..." />
        <button className="registerButton">Register</button>
     </form>
     <NavLink to="/login"><button className="registerLoginButton">Login</button></NavLink>
    </div>
  )
  }