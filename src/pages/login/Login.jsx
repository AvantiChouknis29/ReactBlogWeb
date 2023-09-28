import { BrowserRouter, Routes, Route, Router, NavLink } from 'react-router-dom';
import "./login.css"
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;1,300&family=Josefin+Slab:wght@300;400&family=Lora:ital,wght@0,400;0,600;1,500&family=Merriweather:ital,wght@1,300&family=Montserrat:wght@300&family=Oswald:wght@300;400&family=Poppins:wght@300&display=swap" rel="stylesheet"></link>

export default function Login() {
  return (
    <div className="login">
        <pan className="loginTitle">Login</pan>

     <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Enter your Email..."/>
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your Password..."/>
        <button className="loginButton">Login</button>
     </form>
     <NavLink to="/register"><button className="loginRegisterButton">Register</button></NavLink>
    </div>
  )
}
