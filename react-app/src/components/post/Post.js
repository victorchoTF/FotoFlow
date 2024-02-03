import PostFooter from "./PostFooter";
import ProfileCard from "../profile/ProfileCard";
import "./post.css";

function Post({image, username, postImage}){
    return (
        <div className="post">
            <ProfileCard username={username} image={image}/>
            <img src={postImage} alt="post" className="post-image"/>
            <PostFooter />
        </div>
    );
}

export default Post;