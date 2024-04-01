
import React, { useState } from 'react';
import CreatePostForm from './components/CreatePostForm';
import Post from './components/Post';

function App(){
  const [posts,setPosts] = useState([]);



const handleNewSubmission = (data) =>{
  data.preventDefault();
/*postData = document.getElementById('post-headline').value;*/
console.log("successfull");
setPosts([...posts,data]);
}


    return(
    <div>
      <h1>Fakebook!</h1>
      <CreatePostForm onNewSubmit={handleNewSubmission}/>
     
      {/* Feed */}
     
      <Post content={posts}/>
     
    </div>
    )
 }
export default App
