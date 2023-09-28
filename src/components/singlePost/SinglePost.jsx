import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/3758133/pexels-photo-3758133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />
      <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
      <div className="singlePostEdit"><i className="singlePostIcon fa-regular fa-pen-to-square"></i>
      <i className="singlePostIcon fa-solid fa-trash"></i></div></h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">Author:<b>Avanti</b></span>
        <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sapiente eius? Labore minima accusantium quo veritatis, quis eos incidunt adipisci doloribus cumque dolor unde maxime sit enim quasi, eligendi error!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sapiente eius? Labore minima accusantium quo veritatis, quis eos incidunt adipisci doloribus cumque dolor unde maxime sit enim quasi, eligendi error!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sapiente eius? Labore minima accusantium quo veritatis, quis eos incidunt adipisci doloribus cumque dolor unde maxime sit enim quasi, eligendi error!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sapiente eius? Labore minima accusantium quo veritatis, quis eos incidunt adipisci doloribus cumque dolor unde maxime sit enim quasi, eligendi error!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sapiente eius? Labore minima accusantium quo veritatis, quis eos incidunt adipisci doloribus cumque dolor unde maxime sit enim quasi, eligendi error!</p>
       
      </div>
    
    </div>
  )
}
