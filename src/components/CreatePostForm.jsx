
/*PRACTICE USING USESTATE*/
import { useState } from "react";

function CreatePostForm(props,{handleNewSubmission}){

const [state,setState] = useState('');

const handleSubmit= (event) =>{
  event.preventDefault();
let data = document.getElementById('post-headline').value;
console.log(data);
props.onNewSubmit();
setState(data);

}
    return (
      <div>

        <h1>Create Post </h1>
        <form onSubmit={()=>handleNewSubmission(handleSubmit)}>
            <input id='post-headline' type="text"></input>
            <br/>
            <textarea id='post-message'></textarea>
            <br></br>
            <input type="submit"></input>
        </form>
        
      </div>
    )
}
export default CreatePostForm