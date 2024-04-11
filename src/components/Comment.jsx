/*PRACTICE USING USESTATE */ 

import React from 'react';
import commentStyle from '../modules/Comment.module.css';
function Comment(props){
    return(
        <div className={commentStyle.textStyle}>
        <p>{props.content}</p>
        </div>
)
}

export default Comment