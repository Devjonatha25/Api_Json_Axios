import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import './Home.css'
import blogFetch from "../axios/config";

const Home = ()=>{

  const [Posts,setPosts] = useState([])
    const getPosts = async()=>{
    
     try {
      const response = await blogFetch.get("/posts")
      

      const data = response.data
      console.log(data)
      setPosts(data)

     

     } catch (error) {
      console.log("erro")
      
     }


    }
    useEffect(()=>{
          getPosts();
    },[])

 




    return(
      <div className="home">
        <h1>Ultimos posts</h1>
        {
          Posts.length  === 0 ?  <div className="load"><li></li><p>carregando...</p></div> : (
            Posts.map((post)=>(
              <div className="post" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <Link to={`/posts/${post.id}`} className="Btn">Ler mais</Link>
              </div>
            ))
          )
        }
      </div>
    )
}
export default Home;