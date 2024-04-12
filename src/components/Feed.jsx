
import Post from "./Post";

function Feed({ content }) {
 
   
        return content.map((post, index) => {
         return (
         <div>
         
         <Post title={post.title}  key={index}
         message={post.message}/>
       
         </div>
         )
    })
  }
export default Feed