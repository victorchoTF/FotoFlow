const likeImage = "https://static-00.iconduck.com/assets.00/thumbs-up-emoji-1905x2048-yh44rgtn.png";
const commentsImage = "https://www.pinclipart.com/picdir/big/51-510498_clipart-info-white-outline-speech-bubble-transparent-png.png";

function PostFooter(){
    return (
    <div className="post-footer">
        <input type="image" src={likeImage} alt="Like" />
        <input type="image" src={commentsImage} alt="Comments" />
    </div>
    );
}

export default PostFooter;