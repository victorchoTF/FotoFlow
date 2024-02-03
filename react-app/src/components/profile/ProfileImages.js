import constants from "../../constants";
import "./profile.css";

function ProgileImages({imageCount}){
    function fetchImages(){
        const images = [];
        for (let i = 0; i < imageCount; i++)
            images.push(constants.postImage);
        
        return images;
    }

    const images = fetchImages();

    return (
        <div class="profile-posts">
            {images.map(image => <img src={image} alt="post" className="profile-post" />)}
        </div>
    );
}

export default ProgileImages;