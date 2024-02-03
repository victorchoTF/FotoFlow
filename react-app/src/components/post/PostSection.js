import Post from "./Post";
import constants from "../../constants";

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
        <section>
            {usernames.map(username => <Post image={constants.image} username={username} postImage={constants.postImage} />)}
        </section>
    );
}

export default PostSection;