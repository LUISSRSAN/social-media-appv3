/*PRACTICE WRITING COMPONENTS AND PASSING PROPS */ 

import React, { useState } from 'react';
import Comment from "./Comment";


function Post(props){

    const [likes,setLikes] = useState(0);

    function handleLike(){
        setLikes(likes+1);
    }
    return(
        <div>
           
            <h3>{props.content}</h3>
            <p>{props.data}</p>
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