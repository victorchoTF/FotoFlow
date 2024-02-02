import "./post.css";

function PostProfile({username, image}){
    return (
        <div className="post-profile">
            <img src={image} alt="profile"/>
             <label className="username">
                {username}
             </label>
        </div>
    );
}

export default PostProfile;