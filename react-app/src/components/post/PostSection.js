import Post from "./Post";

const image = "https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg";
const postImage = "https://static.spacecrafted.com/bdcb89ef153b4eb28ffa328995516fbe/i/ca7a4439ea4d401c905ff146f8ada118/1/4SoifmQp45JMgBnHp7ed2/placeholder.png";

function PostSection(){
    const usernames = [
        "ivan",
        "gosho",
        "pepo",
        "fehti",
        "strashnia",
        "kokosko",
        "rosko",
        "kudravia"
    ];

    return (
        <>
            {usernames.map(username => <Post image={image} username={username} postImage={postImage} />)}
        </>
    );
}

export default PostSection;