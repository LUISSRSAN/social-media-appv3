

import React, { useState } from 'react';
import CreatePostForm from './components/CreatePostForm';
import Feed from "./components/Feed";
import style from "./modules/app.module.css";
function App(){
  const [posts,setPosts] = useState([]);



const handleNewSubmission = (data) =>{
  setPosts([...posts, data]);
};




    return(
    <div className={style.body}>
      <h1 className={style.header}>Fakebook!</h1>
      <CreatePostForm  id="outlined-basic"  variant="outlined" onNewSubmit={handleNewSubmission}/>
      
      <Feed content={posts}/>
 

    </div>
    )
 }
export default App
