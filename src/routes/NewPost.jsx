import React from "react";
import "./NewPost.css";
import blogFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NewPost = ()=> {

 const  navigate = useNavigate()
  const [title,setTitle] = useState()
  const [body,setBody] = useState()
 
const createPost = async(e)=>{
  e.preventDefault();
  console.log(title,body)

  const post = {title,body,userid:1}
 await blogFetch.post("/posts",{
  body:post,
 })
}


  return <div className="new-post">
    <h2>inserir novo post:</h2>
    <form onSubmit={(e)=>createPost(e)}>
      <div className="form-control">
        <label htmlFor="title">Titulo:</label>
        <input type="text" name="title" id="title" placeholder="Digite um Titulo" onChange={(e)=>setTitle(e.target.value)}/>

      </div>
      <div className="form-control">
        <label htmlFor="body">Conteudo:</label>
        <textarea name="body" id="body" placeholder="Digite o conteudo"  onChange={(e)=>setBody(e.target.value)}></textarea>

      </div>
      <input type="submit" value="criar post" className="Btn"/>
      </form>
  </div>
};

export default NewPost;