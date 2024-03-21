/*PRACTICE WRITING COMPONENTS AND PASSING PROPS */ 

import React from 'react';
import Comment from "./Comment";

function Post(){
    const [likes,setLikes] = useState(0);
    function handleLike(){
        setLikes(likes+1);
    }
    return(
        <div>
            <h3>Test Post</h3>
            <p>This is a test post we'll edit later!</p>
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