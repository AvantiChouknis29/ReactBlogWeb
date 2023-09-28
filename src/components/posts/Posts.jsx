import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/916925/pexels-photo-916925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Post img="https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Post img="https://images.pexels.com/photos/3758133/pexels-photo-3758133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Post img="https://images.pexels.com/photos/2551599/pexels-photo-2551599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Post img="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </div>
  );
}
