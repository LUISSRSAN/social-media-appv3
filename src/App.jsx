

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePostForm from './components/CreatePostForm';
import Feed from "./components/Feed";
import Navbar from './components/Navbar';
import Profile from "./components/Profile";
import style from "./modules/app.module.css";


function App(){
  const [posts,setPosts] = useState([]);



const handleNewSubmission = (data) =>{
  setPosts([...posts, data]);
};


        

        return(
          <div className={style.body}>
           
              <Navbar/>
              <CreatePostForm  onNewSubmit={handleNewSubmission}/>
              <Routes>
                <Route path="/" element={<Feed content={posts}/>}/>
                <Route path="/profile" element={<Profile content={posts}/>}/>
              </Routes>
         
          </div>
    )
 }
export default App
