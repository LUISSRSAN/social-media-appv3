
/*PRACTICE USING USESTATE*/
import { useState } from "react";
import styles from "../modules/CreatePostForm.module.css";
function CreatePostForm({onNewSubmit}){

const [state,setState] = useState('');


let [postTitle,setPostTitle] = useState('');
let [postMessage,setPostMessage]= useState('');


const handleSubmit= (event) =>{
  event.preventDefault();

if(postTitle ==="" || postMessage ===""){
return ("Fields Required");
}
else {
setPostTitle(event.target.value);
setPostMessage(event.target.value);


  onNewSubmit({
    title:postTitle,
    message:postMessage
  });
  console.log(postTitle,postMessage);
  // reset the form fields
  setPostTitle('');
  setPostMessage('');
}
}



    return (
      <div className={styles.formContainer}>

        <h1>Create Post </h1>
        <form onSubmit={handleSubmit}>
            <input  onChange ={event => setPostTitle(event.target.value)} type="text" value={postTitle}/>
            <br/>
            <textarea onChange={event =>setPostMessage(event.target.value)} value={postMessage} ></textarea>
            <input  type="submit" />
        </form>
        
      </div>
    )
}
export default CreatePostForm