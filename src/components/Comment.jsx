/*PRACTICE USING USESTATE */ 

import React,{props} from 'react';

function Comment(props){
    return(
        <div>
        <p>{props.content}</p>
        </div>
)
}

export default Comment