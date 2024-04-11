/*PRACTICE WRITING COMPONENTS AND PASSING PROPS */ 

import React, { useState } from 'react';
import postStyle from "../modules/Post.module.css";
import Comment from "./Comment";
function Post({title,message}){

    const [likes,setLikes] = useState(0);

    function handleLike(){
        setLikes(likes+1);
    }
 
   return (
        <div className={postStyle.container}>
        <h1>{title}</h1>
         <p>{message}</p>
         <p>Likes: {likes}</p>
         <button onClick={handleLike}>Like</button>
         <p>Comments:</p>
         <Comment content="thIS IS A TEST COMMENT!"/>
         <Comment content="This is another test comment!"/>
         <Comment content="This is yet another test comment!"/>
     </div>
   )
 
 
}

export default Post