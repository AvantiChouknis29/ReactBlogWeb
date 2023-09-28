
import { NavLink } from "react-router-dom"
import "./topbar.css"

<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;1,300&family=Josefin+Slab:wght@300;400&family=Lora:ital,wght@0,400;0,600;1,500&family=Merriweather:ital,wght@1,300&family=Montserrat:wght@300&family=Oswald:wght@300;400&display=swap" rel="stylesheet"></link>
export default function TopBar() {

  return (
    
    <div class="top">
     <div className="topLeft">
    <h3>FOODBLOG</h3>
     </div>
     <div className="topCenter">
        <ul className="topList">
        <NavLink className="c1" to="/"><li className="topListItem" style={{color:"gray"}}>HOME</li></NavLink>
        <NavLink className="c1" to="/register"><li  className="topListItem" style={{color:"gray"}}>REGISTER</li></NavLink>
        <NavLink  className="c1" to="/write"><li className="topListItem" style={{color:"gray"}}>WRITE</li></NavLink>
        <NavLink className="c1"  to="/settings"> <li className="topListItem" style={{color:"gray"}}>PROFILE</li></NavLink>
       </ul>
    </div>
    <div className="topRight">
        <img className="topImg" src="" alt=""></img>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
  )
}
