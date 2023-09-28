import "./header.css"
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;1,300&family=Josefin+Slab:wght@300;400&family=Lora:ital,wght@0,400;0,600;1,500&family=Merriweather:ital,wght@1,300&family=Montserrat:wght@300&family=Oswald:wght@300;400&family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
export default function Header() {
  return (
    <div>
        <div className="header">
            <div className="headerTitles">
           
                <span className="headerTitleSm"></span>
                
                <br></br>
                <span className="headerTitleLg"></span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
        </div>
      
    </div>
  )
}
