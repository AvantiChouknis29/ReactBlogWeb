import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/14852630/pexels-photo-14852630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img><label htmlFor="fileInput"><i className="settingsPPIcon fa-solid fa-plus"></i></label>
                <label htmlFor="fileInput"><i className="settingsPPIcon fa-solid fa-user"></i></label>
                <input type="file" id="fileInput" style={{display:"none"}}></input></div>
                <label>Username</label>
                <input type="text" placeholder="Avanti"/>
                <label>Email</label>
                <input type="email" placeholder="Avantichouknis@gmail.com"/>
                <label>Password</label>
                <input type="password" placeholder=""/>
                <button className="settingsSubmit">Update</button>
           
            </form>
      </div>
     
    </div>
  )
}
