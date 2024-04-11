
import Post from "./Post";
function Feed({ content }) {
 
   
        return content.map((post, index) => {
         return <Post title={post.title}  key={index}
         message={post.message}/>
      
        }
   
    );
  }
export default Feed