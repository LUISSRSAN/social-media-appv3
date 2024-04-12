

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePostForm from './components/CreatePostForm';
import Feed from "./components/Feed";
import Navbar from './components/Navbar';
import Profile from "./components/Profile";
import style from "./modules/app.module.css";

import { createBrowserRouter } from "react-router-dom";
function App(){
  const [posts,setPosts] = useState([]);

const router = createBrowserRouter([
  {
  path:"/",
  element:<div>Hello World!</div>
},
]);

const handleNewSubmission = (data) =>{
  setPosts([...posts, data]);
};


        

        return(
          <div className={style.body}>
            <BrowserRouter>
              <Navbar/>
              <CreatePostForm  onNewSubmit={handleNewSubmission}/>
              <Routes>
                <Route path="/" element={<Feed content={posts}/>}/>
                <Route path="/profile" element={<Profile content={posts}/>}/>
              </Routes>
            </BrowserRouter>
          </div>
    )
 }
export default App
