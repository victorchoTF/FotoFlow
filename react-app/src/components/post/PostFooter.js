import constants from "../../constants";

function PostFooter(){
    return (
    <div className="post-footer">
        <input type="image" src={constants.likeImage} alt="Like" />
        <input type="image" src={constants.commentsImage} alt="Comments" />
    </div>
    );
}

export default PostFooter;