import PostProfile from "./PostProfile";
import "./components.css";

function Post(){
    const image = "https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg";
    const username = "DemoUser";
    const postImage = "https://static.spacecrafted.com/bdcb89ef153b4eb28ffa328995516fbe/i/ca7a4439ea4d401c905ff146f8ada118/1/4SoifmQp45JMgBnHp7ed2/placeholder.png";
    return (
        <div className="post">
            <PostProfile username={username} image={image}/>
            <img src={postImage} alt="post" className="post-image"/>
        </div>
    );
}

export default Post;