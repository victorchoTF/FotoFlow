import ProfileCard from "./ProfileCard";
import constants from "../../constants";
import "./profile.css"

function ProfileData(){
    const followers = 10;
    const following = 10;
    
    return (
        <div className="profile-data">
            <ProfileCard username="palaceholder" image={constants.image} postImage={constants.postImage}/>
            <div className="followers-data">
                <label>
                    Followers: {followers}
                </label>
                <label>
                    Following: {following}
                </label>
            </div>
        </div>
    );
}

export default ProfileData;