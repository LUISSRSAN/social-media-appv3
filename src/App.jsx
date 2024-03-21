
import React from 'react';
import Post from './components/Post';

function App(){
    return(
    <div>
      <h1>Fakebook!</h1>
      {/* CreatePostForm */}
      {/* Feed */}
      <Post content="This is a test post!"/>
      <Post content="This is another test comment!"/>
    </div>
    )
 }
export default App
