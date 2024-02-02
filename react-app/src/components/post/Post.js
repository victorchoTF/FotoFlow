import PostFooter from "./PostFooter";
import PostProfile from "./PostProfile";
import "./post.css";

function Post({image, username, postImage}){
    return (
        <div className="post">
            <PostProfile username={username} image={image}/>
            <img src={postImage} alt="post" className="post-image"/>
            <PostFooter />
        </div>
    );
}

export default Post;