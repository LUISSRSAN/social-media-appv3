import profileStyle from "../modules/Profile.module.css";
import Post from "./Post";

function Profile({content}) {
  return content.map((post, index) => {
    return (
      <div className={profileStyle.header}>
        <h3>BIO</h3>
        <p>loves to play video games</p>
        <Post title={post.title}  key={index} message={post.message}/>
      </div>
    )
  })
}

export default Profile;

